import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ConfirmationPage from '../components/Confirmation';

const mockBookingDetails = {
  date: '2024-10-01',
  time: '19:00',
  guest: '2',
  occasion: 'Birthday',
};

const renderConfirmationPage = () => {
  render(
    <Router>
      <ConfirmationPage />
    </Router>
  );
};

describe('ConfirmationPage', () => {
  beforeEach(() => {
    renderConfirmationPage();
  });

  it('renders booking details correctly', () => {
    screen.getByText(/Booking Details/i);
    screen.getByText(/Date: 2024-10-01/i);
    screen.getByText(/Time: 19:00/i);
    screen.getByText(/Guest: 2/i);
    screen.getByText(/Occasion: Birthday/i);
  });

  it('displays error messages for empty fields on submit', () => {
    fireEvent.click(screen.getByText(/Confirm Booking/i));

    expect(screen.getByText(/First name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Last name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone number is required/i)).toBeInTheDocument();
  });

  it('allows form submission with valid data', () => {
    // Fill out the form
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByPlaceholderText(/Any special requests?/i), { target: { value: 'Window seat' } });

    fireEvent.click(screen.getByText(/Confirm Booking/i));

    // Verify that error messages are cleared after valid input
    expect(screen.queryByText(/First name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Last name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Email is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Phone number is required/i)).not.toBeInTheDocument();
  });

  it('has accessibility attributes', () => {
    const inputs = [
      { label: /First Name/i, id: 'firstName-label' },
      { label: /Last Name/i, id: 'lastName-label' },
      { label: /Email/i },
      { label: /Phone Number/i },
    ];

    inputs.forEach(({ label, id }) => {
      const input = screen.getByLabelText(label);
      expect(input).toBeInTheDocument();
      if (id) {
        expect(input).toHaveAttribute('aria-labelledby', id);
      }
    });
  });
});
