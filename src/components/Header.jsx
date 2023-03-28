import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { FaShoppingCart } from "react-icons/fa";
import { CgMenuGridR, CgClose } from "react-icons/cg";
import ShoppingCard from "./Shop/ShoppingCard";
const Header = ({
  added,
  setAdded,
  cartData,
  cartId,
  setCartId,
  cartName,
  setCartName,
  cartQt,
  setCartQt,
  cartPrice,
  setCartPrice,
}) => {
  const [square, setSquare] = useState(true);
  const [Menu, setMenu] = useState("hide");
  const [cardIcon, setCardIcon] = useState("hideIcons");
  const [shoppingCard, setShoppingCard] = useState("hideCart");
  const menuHandler = () => {
    setMenu(Menu === "hide" ? "show" : "hide");
    setSquare(false);
    setCardIcon(cardIcon === "hideIcons" ? "showIcons" : "hideIcons");
  };
  const squareHandler = () => {
    setSquare(true);
    setMenu("hide");
    setCardIcon("hideIcons");
  };
  const closeMenu = () => {
    setMenu("hide");
    setSquare(true);
    setCardIcon("hideIcons");
  };
  const cartHandler = (e) => {
    setShoppingCard("showCard");
  };
  return (
    <div className="header">
      <Link to="/" onClick={closeMenu}>
        <img src="./Images/logo.png" alt="logo" />
      </Link>
      <ul id={Menu}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/news" onClick={closeMenu}>
            News
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="shop" onClick={closeMenu}>
            Shop
          </Link>
        </li>
      </ul>
      <div className="icons" id={cardIcon}>
        <span onClick={cartHandler}>
          <span className="qtNbr"> {added} </span>
          <FaShoppingCart />
        </span>
      </div>
      <div className="burger">
        {square === true ? (
          <CgMenuGridR onClick={menuHandler} />
        ) : (
          <CgClose onClick={squareHandler} />
        )}
      </div>
      <ShoppingCard
        cartData={cartData}
        shoppingCard={shoppingCard}
        setShoppingCard={setShoppingCard}
        added={added}
        setAdded={setAdded}
        cartId={cartId}
        setCartId={setCartId}
        cartName={cartName}
        setCartName={setCartName}
        cartQt={cartQt}
        setCartQt={setCartQt}
        cartPrice={cartPrice}
        setCartPrice={setCartPrice}
      />
    </div>
  );
};

export default Header;
