import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cuponheart from "../assets/cuponheart.png";
import "../styles/Confirmation.css";
import Header from "./Header";
import Footer from "./Footer";

const Confirmation = () => {
  const location = useLocation();
  const { bookingDetails } = location.state || {};
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequest: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First name is required.";
    if (!formData.lastName) formErrors.lastName = "Last name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.phone) formErrors.phone = "Phone number is required.";
    return formErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const completeBookingData = { ...bookingDetails, ...formData };
    navigate("/confirmed-booking", { state: completeBookingData });
  };

  return (
    <>
      <Header />
      <section className="booking-confirmation">
        <div className="booking-confirmation__details">
          <h2>Review Your Booking</h2>
          <p><strong>Date:</strong> {bookingDetails?.date}</p>
          <p><strong>Time:</strong> {bookingDetails?.time}</p>
          <p><strong>Guest Count:</strong> {bookingDetails?.guest}</p>
          <p><strong>Occasion:</strong> {bookingDetails?.occasion}</p>

          <form onSubmit={handleFormSubmit} className="booking-confirmation__form">
            <fieldset>
              <legend>Personal Information</legend>

              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="specialRequest">Special Requests</label>
                <textarea
                  name="specialRequest"
                  id="specialRequest"
                  value={formData.specialRequest}
                  onChange={handleInputChange}
                  placeholder="Add any special instructions..."
                />
              </div>

              <button type="submit" className="btn-submit">Confirm Booking</button>
            </fieldset>
          </form>
        </div>

        <div className="booking-confirmation__image">
          <img src={cuponheart} alt="Happy Couple Illustration" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Confirmation;
