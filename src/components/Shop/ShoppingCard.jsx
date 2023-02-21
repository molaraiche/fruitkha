import "../../styles/cart.css";
import Tables from "./Table";
const ShoppingCard = () => {
  return (
    <div className="cardContent">
      <div className="cartHead">
        <h1>Cart</h1>
      </div>
      <div className="cartHolder">
        <Tables />
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
