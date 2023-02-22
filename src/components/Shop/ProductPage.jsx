import { useState } from "react";
import "../../styles/prdPage.css";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductPage = ({ id, name, img, details, setAdded, getDetails }) => {
  const [prdQt, setPrdQt] = useState(0);
  const addQt = () => setPrdQt(prdQt + 1);
  const rmvQt = () => (prdQt > 0 ? setPrdQt(prdQt - 1) : null);

  const addToCardHandler = () => {
    if (prdQt > 0) {
      setAdded(prdQt);
      getDetails(id);
    } else {
      setAdded(0);
    }
  };

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
          <div className="qt">
            <button onClick={rmvQt} className="plusMinus">
              -
            </button>
            <input
              type="number"
              onChange={(e) => setPrdQt(e.target.value)}
              value={prdQt}
              placeholder="Quantity"
            />

            <button onClick={addQt} className="plusMinus">
              +
            </button>
          </div>

          <button onClick={addToCardHandler} className="addToCarBtn">
            <MdAddShoppingCart />
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
