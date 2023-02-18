import { useState } from "react";
import "../../styles/prdPage.css";
import { MdAddShoppingCart } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const off = {
  display: "none",
};
const on = {
  display: "block",
};
const ProductPage = ({ name, img, details, setAdded }) => {
  const [prdQt, setPrdQt] = useState(0);
  const [cardstats, setCardStats] = useState(off);
  const addQt = () => setPrdQt(prdQt + 1);
  const rmvQt = () => (prdQt > 0 ? setPrdQt(prdQt - 1) : null);
  console.log(cardstats);

  const addToCardHandler = () => {
    console.log(cardstats);
    if (prdQt > 0) {
      setAdded(prdQt);
    } else {
      setAdded("");
    }
  };
  console.log(cardstats);

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
