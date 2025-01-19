import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="site-nav">
      <ul className="site-nav__list">
        <li className="site-nav__item">
          <Link to="/" className="site-nav__link">Home</Link>
        </li>
        <li className="site-nav__item">
          <Link to="/about" className="site-nav__link">About Us</Link>
        </li>
        <li className="site-nav__item">
          <Link to="/menu" className="site-nav__link">Menu</Link>
        </li>
        <li className="site-nav__item">
          <Link to="/booking" className="site-nav__link">Reservation</Link>
        </li>
        <li className="site-nav__item">
          <Link to="/order-online" className="site-nav__link">Order Online</Link>
        </li>
        <li className="site-nav__item">
          <a href="#login" className="site-nav__link">Log In</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
