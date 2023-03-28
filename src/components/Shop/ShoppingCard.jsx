import "../../styles/cart.css";
import Tables from "./Tables";
const ShoppingCard = ({
  getDetails,
  id,
  name,
  price,
  prdQt,
  shoppingCard,
  setShoppingCard,
}) => {
  console.table(getDetails, id, name, price, prdQt);
  const closeHandler = (e) => {
    setShoppingCard("hideCart");
  };
  return (
    <div id={shoppingCard} className="cardContent">
      <div className="closeEvent">
        <button onClick={closeHandler}>X</button>
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
