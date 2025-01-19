import { Link } from 'react-router-dom';
import restaurantfood from "../assets/restaurantfood.jpg";
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-text-content">
                    <h1 className="hero-heading">Little Lemon</h1>
                    <h2 className="hero-location">Chicago</h2>
                    <p className="hero-description">
                        At Little Lemon, we bring you a dining experience like no other. Nestled in the heart of Chicago, 
                        our restaurant blends the vibrant flavors of Mediterranean cuisine with a modern twist. Every dish is 
                        crafted with fresh, locally sourced ingredients, ensuring quality and taste in every bite. 
                        Whether you're stopping by for a casual lunch, a celebratory dinner, or simply to enjoy our warm 
                        ambiance, we promise an unforgettable culinary journey. Discover the perfect balance of tradition 
                        and innovation at Little Lemon—where every meal is a story worth savoring.
                    </p>
                    <Link to="/reservation" className="hero-button" aria-label="Reserve a table">
                        Reserve a Table
                    </Link>
                </div>
                <div className="hero-image-wrapper">
                    <img 
                        src={restaurantfood} 
                        alt="A selection of delicious Mediterranean dishes" 
                        className="hero-image" 
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
