import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/ConfirmedBooking.css';
import celebrationImage from '../assets/glassescheer.png';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  const location = useLocation();
  const booking = location.state || {};

  return (
    <>
      <Header />
      <main className="confirmed-booking">
        <section className="booking-details">
          <h1 className="booking-title">🎉 Booking Confirmed!</h1>
          <article className="booking-summary">
            <h2 className="summary-title">Your Booking Summary:</h2>
            <ul className="summary-list">
              <li><strong>Occasion:</strong> {booking.occasion}</li>
              <li><strong>Guests:</strong> {booking.guest}</li>
              <li><strong>Date:</strong> {booking.date}</li>
              <li><strong>Time:</strong> {booking.time}</li>
              <li><strong>Email:</strong> {booking.email}</li>
            </ul>
          </article>
          <p className="menu-description">
            Plan ahead and check out our menu featuring exquisite dishes and beverages.
          </p>
          <Link to="/" className="menu-link" aria-label="Explore our menu">
            Explore Menu
          </Link>
        </section>
        <aside className="booking-image">
          <img
            src={celebrationImage}
            alt="Celebration with two glasses clinking"
            className="image-responsive"
          />
        </aside>
      </main>
      <Footer />
    </>
  );
};

export default ConfirmedBooking;
