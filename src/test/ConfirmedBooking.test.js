import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import ConfirmedBooking from '../components/ConfirmedBooking';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('ConfirmedBooking Component', () => {
  const mockBookingDetails = {
    occasion: 'Birthday',
    guest: '2',
    date: '2024-09-30',
    time: '7:00 PM',
    email: 'test@example.com',
  };

  const renderConfirmedBooking = () => {
    window.history.replaceState({ state: mockBookingDetails }, '');
    render(
      <MemoryRouter initialEntries={['/confirmed']}>
        <Route path="/confirmed">
          <ConfirmedBooking />
        </Route>
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    renderConfirmedBooking();
  });

  it('renders booking confirmation message', () => {
    expect(screen.getByText(/Congratulations! Your booking is confirmed/i)).toBeInTheDocument();
  });

  it('displays the booking summary correctly', () => {
    expect(screen.getByText(/Occasion:/i)).toHaveTextContent(mockBookingDetails.occasion);
    expect(screen.getByText(/Guest:/i)).toHaveTextContent(mockBookingDetails.guest);
    expect(screen.getByText(/Date:/i)).toHaveTextContent(mockBookingDetails.date);
    expect(screen.getByText(/Time:/i)).toHaveTextContent(mockBookingDetails.time);
    expect(screen.getByText(/Email:/i)).toHaveTextContent(mockBookingDetails.email);
  });

  it('has a link to the menu', () => {
    const menuLink = screen.getByLabelText(/Explore menu/i);
    expect(menuLink).toBeInTheDocument();
    expect(menuLink).toHaveAttribute('href', '/menu');
  });

  it('passes accessibility checks', async () => {
    const results = await axe(screen.getByRole('main'));
    expect(results).toHaveNoViolations();
  });
});
