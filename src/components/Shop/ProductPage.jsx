import "../../styles/prdPage.css";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
const ProductPage = ({ name, img, details }) => {
  return (
    <div>
      <div className="prdHead">
        <Link to="/shop" className="backBtn">
          <span>Back</span>
        </Link>
        <p> SEE MORE DETAILS</p>
        <h1> {name} </h1>
      </div>
      <div className="productsContent">
        <div className="imageHolder">
          <img src={img} alt={name} />
        </div>
        <div className="prdTxt">
          <h1> {name} </h1>
          <p> {details} </p>
          <input type="number" placeholder="Quantity" />
          <button>
            <MdAddShoppingCart />
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
