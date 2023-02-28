import "../../styles/cart.css";
import Tables from "./Tables";
const ShoppingCard = ({ getDetails, id, name, price, prdQt }) => {
  console.table(getDetails, id, name, price, prdQt);
  return (
    <div className="cardContent">
      <div className="cartHead">
        <h1>Cart</h1>
      </div>
      <div className="cartHolder">
        <Tables
          getDetails={getDetails}
          id={id}
          name={name}
          price={price}
          prdQt={prdQt}
        />
        <main className="total">
          <p>
            Total: <span className="price">10$</span>
          </p>
          <div className="btnHolder">
            <button>Checkout</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ShoppingCard;
