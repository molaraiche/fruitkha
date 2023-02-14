import { Link } from "react-router-dom";
import "../../styles/home.css";
const Home = () => {
  return (
    <div className="home">
      <p> FRESH & ORGANIC </p>
      <h1> Delicious Seasonal Fruits</h1>
      <div className="links">
        <Link to="/shop" className="fc">
          Fruit Collection
        </Link>
        <Link to="/contact" className="cu">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Home;
