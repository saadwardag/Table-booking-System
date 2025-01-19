import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import BookingPage from '../components/BookingPage';
import { fetchAPI } from '../utility/mockAPI';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

jest.mock('../utility/mockAPI', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00', '20:00']),
}));

describe('BookingPage Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
  });

  // Test: Renders the form correctly
  it('renders the booking form with required fields and button', () => {
    const requiredText = ['BOOK A TABLE', 'AT LITTLE LEMON'];
    const formLabels = ['Occasion', 'Guest', 'Date', 'Time'];

    requiredText.forEach(text => expect(screen.getByText(text)).toBeInTheDocument());
    formLabels.forEach(label => expect(screen.getByLabelText(label)).toBeInTheDocument());
    expect(screen.getByRole('button', { name: /Continue/i })).toBeInTheDocument();
  });

  // Test: Validates that all form fields are required
  it('validates required fields on form submission', () => {
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    const validationMessages = [
      'Occasion is required',
      'Number of guests is required',
      'Date is required',
      'Time is required',
    ];

    validationMessages.forEach(message =>
      expect(screen.getByText(new RegExp(message, 'i'))).toBeInTheDocument()
    );
  });

  // Test: Allows valid form submission and calls navigate with booking details
  it('submits the form with valid inputs and navigates to confirmation', () => {
    const formData = {
      occasion: 'Birthday',
      guest: '4',
      date: '2024-09-21',
      time: '18:00',
    };

    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: formData.occasion } });
    fireEvent.change(screen.getByLabelText('Guest'), { target: { value: formData.guest } });
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: formData.date } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: formData.time } });

    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    // Ensure validation errors are cleared
    expect(screen.queryByText(/is required/i)).not.toBeInTheDocument();

    // Check that the correct navigation happens
    expect(mockNavigate).toHaveBeenCalledWith('/Confirming', {
      state: { bookingDetails: formData },
    });
  });

  // Test: Displays validation errors when required fields are missing
  it('shows validation errors when required fields are not filled', () => {
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    const validationErrors = [
      'Occasion is required',
      'Number of guests is required',
      'Date is required',
      'Time is required',
    ];

    validationErrors.forEach(error =>
      expect(screen.getByText(error)).toBeInTheDocument()
    );
  });

  // Test: Updates available times when the date is changed
  it('updates time options based on the selected date', () => {
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2024-09-21' } });

    const timeOptions = screen.getByLabelText('Time').children;
    expect(timeOptions).toHaveLength(5); // 4 options + 1 default
    expect(timeOptions[1].value).toBe('17:00');
    expect(timeOptions[2].value).toBe('18:00');
    expect(timeOptions[3].value).toBe('19:00');
    expect(timeOptions[4].value).toBe('20:00');
  });

  // Test: Disables the continue button when there are validation errors
  it('disables the submit button if validation errors exist', () => {
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Guest'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '' } });

    expect(screen.getByRole('button', { name: /Continue/i })).toBeDisabled();
  });

  // Test: Ensures all form elements are accessible
  it('ensures accessibility of form elements', () => {
    const formLabels = ['Occasion', 'Guest', 'Date', 'Time'];

    formLabels.forEach(label => {
      expect(screen.getByLabelText(label)).toHaveAccessibleName(label);
    });

    expect(screen.getByRole('button', { name: /Continue/i })).toBeEnabled();
  });
});
