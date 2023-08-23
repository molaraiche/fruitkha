import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import "../../styles/shop.css";
const ProductCard = ({ img, price, name, path }) => {
  return (
    <Link to={path} className="prdCard">
      <img src={img} alt="product img" />
      <h4> {name}</h4>
      <p>per kg</p>
      <h4 className="prices"> $ {price} </h4>
      <button>
        <MdAddShoppingCart /> Add to Cart
      </button>
    </Link>
  );
};

export default ProductCard;
