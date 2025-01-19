import React from 'react';
import '../styles/Testimonials.css';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.png';

// Data for demo purposes
//for demo purposes
const testimonialsData = [
  {
    rating: "⭐⭐⭐⭐",
    name: "Skhan",
    review: "delicious food!",
    image: photo1,
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    name: "Ibm",
    review: "Great experience",
    image: photo2,
  },
  {
    rating: "⭐⭐⭐⭐",
    name: "Mushtaq",
    review: "Best experience I hsave had!",
    image: photo1,
  },
  {
    rating: "⭐⭐⭐⭐",
    name: "Mazz",
    review: "friendly staff!",
    image: photo2,
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <header>
        <h2 className="testimonials__title">What Our Customers Say</h2>
      </header>
      <div className="testimonials__grid">
        {testimonialsData.map((testimonial, index) => (
          <article className="testimonial__item" key={index}>
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s testimonial`}
              className="testimonial__image"
            />
            <h3 className="testimonial__name">{testimonial.name}</h3>
            <p className="testimonial__rating">{testimonial.rating}</p>
            <p className="testimonial__review">{testimonial.review}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;