import React from 'react';
import '../styles/AboutLittleLemon.css'; // Refactored to use new CSS class names
import marioAndAdrianMain from '../assets/MarioandAdrianA.jpg';

const AboutLittleLemon = () => {
  return (
    <section className="about-us">
      <div className="about-us__content">
        <h2 className="about-us__title">Little Lemon</h2>
        <h3 className="about-us__location">Located in the Heart of Chicago</h3>
        <p className="about-us__description">
          At Little Lemon, we bring a unique Mediterranean dining experience right here in Chicago. 
          We blend vibrant flavors and fresh, locally-sourced ingredients with modern techniques to 
          create dishes that not only satisfy your taste buds but also tell a story. Whether you’re 
          here for a casual lunch, an elegant dinner, or just to unwind in a cozy atmosphere, 
          we promise an unforgettable culinary experience. Come explore the perfect fusion of tradition 
          and innovation at Little Lemon—where every meal is more than just food; it's an experience.
        </p>
      </div>

      <div className="about-us__images">
        <img src={marioAndAdrianMain} alt="Mario and Adrian with a dish at Little Lemon" className="about-us__image-main" />
      </div>
    </section>
  );
};

export default AboutLittleLemon;
