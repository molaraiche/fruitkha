import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "../styles/header.css";
import { CgMenuGridR } from "react-icons/cg";
const Header = () => {
  const { menu, setMenu } = useState("hide");
  const menuHandler = () => {
    setMenu("show");
  };
  return (
    <div className="header">
      <Link to="/">
        <img src="./images/logo.png" alt="logo" />
      </Link>
      <ul id={menu}>
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
        <CgMenuGridR onClick={menuHandler} />
      </div>
    </div>
  );
};

export default Header;
