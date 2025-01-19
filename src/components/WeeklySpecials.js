import greeksalad from '../assets/greeksalad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemondessert from '../assets/lemondessert.jpg';
import '../styles/WeeklySpecials.css';
import { Link } from 'react-router-dom';

const highlightsData = [
  {
    name: "Greek Salad",
    price: "12.99$",
    description: "A healthy mix of greens with a tangy dressing.",
    image: greeksalad,
    link: "/order/greeksalad",
  },
  {
    name: "Bruchetta",
    price: "5.99$",
    description: "Toasted bread topped with fresh tomatoes and herbs.",
    image: bruchetta,
    link: "/order/bruchetta",
  },
  {
    name: "Lemon Dessert",
    price: "4.99$",
    description: "A sweet and refreshing lemon-based dessert.",
    image: lemondessert,
    link: "/order/lemondessert",
  },
  {
    name: "Pasta Primavera",
    price: "14.99$",
    description: "Pasta with fresh vegetables and a creamy sauce.",
    image: bruchetta,
    link: "/order/pasta-primavera",
  },
];

const WeeklySpecials = () => {
  return (
    <section className="highlights">
      <header className="highlights-header">
        <h2 className="highlights-title">Specials!</h2>
      </header>

      <div className="highlights-content">
        {highlightsData.map((item, index) => (
          <div className="highlights-card" key={index}>
            <div className="highlights-card-image-container">
              <img src={item.image} alt={item.name} className="highlights-card-image" />
            </div>
            <div className="highlights-card-content">
              <header className="highlights-card-header">
                <h4 className="highlights-card-title">{item.name}</h4>
                <p className="highlights-card-price">{item.price}</p>
              </header>
              <p className="highlights-card-description">{item.description}</p>
              <Link to={item.link} className="primary-button">Order Now</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklySpecials;