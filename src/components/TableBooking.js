import React, { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TableBooking.css';
import table from '../assets/table.jpg';
import coupleOnDate from '../assets/coupleondate.png';
import { fetchAvailableTimes } from '../utility/mockAPI';

// Reducer to manage available times state
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAvailableTimes(action.payload);
    default:
      return state;
  }
};

// Initialize available times
const initializeTimes = () => {
  const today = new Date().toISOString().split('T')[0];
  return fetchAvailableTimes(today);
};

const TableBooking = () => {
  const [guestCount, setGuestCount] = useState('');
  const [occasion, setOccasion] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [], initializeTimes);

  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setBookingDate(e.target.value);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const validateForm = () => {
    const errors = {};
    if (!occasion) errors.occasion = 'Please select an occasion.';
    if (!guestCount) errors.guestCount = 'Please select the number of guests.';
    if (!bookingDate) errors.bookingDate = 'Please choose a date.';
    if (!bookingTime) errors.bookingTime = 'Please select a time.';
    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    navigate('/confirm-booking', {
      state: { occasion, guestCount, bookingDate, bookingTime },
    });
  };

  return (
    <section className="booking-container">
      <div className="booking-image-container">
        <img src={coupleOnDate} alt="Couple enjoying a dinner date" />
      </div>

      <div className="booking-form-container">
        <header className="booking-header">
          <img src={table} alt="Table setup for dining" className="header-image" />
          <div className="header-text">
            <h1>Book Your Table</h1>
            <h2>Welcome to Little Lemon</h2>
          </div>
        </header>

        <form onSubmit={handleFormSubmit} className="booking-form">
          <fieldset>
            <legend className="form-title">Reservation Details</legend>

            <div className="form-group">
              <label htmlFor="occasion" className="form-label">
                Occasion
              </label>
              <select
                id="occasion"
                className="form-select"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="">Select an Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Celebration">Celebration</option>
                <option value="Dinner">Dinner</option>
              </select>
              {formErrors.occasion && <span className="form-error">{formErrors.occasion}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="guestCount" className="form-label">
                Number of Guests
              </label>
              <select
                id="guestCount"
                className="form-select"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
              >
                <option value="">Select Number of Guests</option>
                {Array.from({ length: 20 }, (_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              {formErrors.guestCount && <span className="form-error">{formErrors.guestCount}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="bookingDate" className="form-label">
                Date
              </label>
              <input
                id="bookingDate"
                type="date"
                className="form-input"
                value={bookingDate}
                onChange={handleDateChange}
              />
              {formErrors.bookingDate && <span className="form-error">{formErrors.bookingDate}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="bookingTime" className="form-label">
                Time
              </label>
              <select
                id="bookingTime"
                className="form-select"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
              >
                <option value="">Select Time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {formErrors.bookingTime && <span className="form-error">{formErrors.bookingTime}</span>}
            </div>

            <button type="submit" className="form-button">
              Confirm Booking
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default TableBooking;
