import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "../styles/header.css";
import { CgMenuGridR, CgClose } from "react-icons/cg";
const Header = () => {
  const [square, setSquare] = useState(true);
  const [Menu, setMenu] = useState("hide");
  console.log(Menu);
  const menuHandler = () => {
    setMenu(Menu === "hide" ? "show" : "hide");
    setSquare(false);
  };
  const squareHandler = () => {
    setSquare(true);
    setMenu("hide");
  };
  console.log(Menu);
  return (
    <div className="header">
      <Link to="/">
        <img src="./images/logo.png" alt="logo" />
      </Link>
      <ul id={Menu}>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/news"> News </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
      </ul>
      <div className="icons">
        <span>
          <FaSearch />
        </span>
        <span>
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
    </div>
  );
};

export default Header;
