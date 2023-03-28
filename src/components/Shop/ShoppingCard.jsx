import "../../styles/cart.css";
import Tables from "./Tables";
const ShoppingCard = ({
  added,
  setAdded,
  id,
  name,
  price,
  prdQt,
  shoppingCard,
  setShoppingCard,
  cartId,
  setCartId,
  cartName,
  setCartName,
  cartQt,
  setCartQt,
  cartPrice,
  setCartPrice,
}) => {
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
          id={id}
          name={name}
          price={price}
          prdQt={prdQt}
          cartId={cartId}
          setCartId={setCartId}
          cartName={cartName}
          setCartName={setCartName}
          cartQt={cartQt}
          setCartQt={setCartQt}
          cartPrice={cartPrice}
          setCartPrice={setCartPrice}
          added={added}
          setAdded={setAdded}
        />
        <main className="total">
          <p>
            Total: <span className="price"> {cartQt * cartPrice}$ </span>
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
