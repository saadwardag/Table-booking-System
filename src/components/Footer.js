import React from 'react';
import '../styles/Footer.css';
import footerLogo from '../assets/footerLogo.png';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__logo">
        <img
          src={footerLogo}
          alt="Little Lemon Logo"
          className="site-footer__logo-image"
        />
      </div>

      <nav className="site-footer__nav" aria-label="Footer Navigation">
        <div className="site-footer__column">
          <h4 className="site-footer__heading">Doormat Navigation</h4>
          <ul className="site-footer__list">
            <li className="site-footer__item">
              <a href="/" className="site-footer__link">Home</a>
            </li>
            <li className="site-footer__item">
              <a href="/about" className="site-footer__link">About</a>
            </li>
            <li className="site-footer__item">
              <a href="/menu" className="site-footer__link">Menu</a>
            </li>
            <li className="site-footer__item">
              <a href="/reservation" className="site-footer__link">Reservations</a>
            </li>
            <li className="site-footer__item">
              <a href="/order-online" className="site-footer__link">Order Online</a>
            </li>
            <li className="site-footer__item">
              <a href="/login" className="site-footer__link">Login</a>
            </li>
          </ul>
        </div>

        <div className="site-footer__column">
          <h4 className="site-footer__heading">Contact</h4>
          <address className="site-footer__contact">
            <p>123 Lemon Street</p>
            <p>+1 (123) 456-7890</p>
            <p>contact@littlelemon.com</p>
          </address>
        </div>

        <div className="site-footer__column">
          <h4 className="site-footer__heading">Follow Us</h4>
          <ul className="site-footer__list">
            <li className="site-footer__item">
              <a href="https://facebook.com" className="site-footer__link" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li className="site-footer__item">
              <a href="https://twitter.com" className="site-footer__link" target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
            <li className="site-footer__item">
              <a href="https://instagram.com" className="site-footer__link" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
