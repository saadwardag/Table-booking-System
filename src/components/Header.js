import React, { useState } from 'react';
import NavBar from './NavBar';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            {/* Logo */}
            <Link to="/" className="header-logo-link" aria-label="Little Lemon Home">
                <img src={Logo} alt="Little Lemon Logo" className="header-logo" />
            </Link>

            {/* Hamburger Menu */}
            <button 
                className="header-hamburger-button" 
                onClick={toggleMenu} 
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
            >
                <span className={`header-hamburger-bar ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`header-hamburger-bar ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`header-hamburger-bar ${isMenuOpen ? 'open' : ''}`}></span>
            </button>

            {/* Navigation Menu */}
            <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                <NavBar />
            </nav>
        </header>
    );
};

export default Header;
