import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "../styles/header.css";
import { CgMenuGridR, CgClose } from "react-icons/cg";
const Header = () => {
  const [square, setSquare] = useState(true);
  const [Menu, setMenu] = useState("hide");
  const [icons, setIcons] = useState("hideIcons");
  const menuHandler = () => {
    setMenu(Menu === "hide" ? "show" : "hide");
    setIcons("showIcons");
    setSquare(false);
  };
  const squareHandler = () => {
    setSquare(true);
    setIcons("hideIcons");
    setMenu("hide");
  };
  const closeMenu = () => {
    setMenu("hide");
    setSquare(true);
  };
  return (
    <div className="header">
      <Link to="/" onClick={closeMenu}>
        <img src="./images/logo.png" alt="logo" />
      </Link>
      <ul id={Menu}>
        <li>
          <Link to="/" onClick={closeMenu}>
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/news" onClick={closeMenu}>
            {" "}
            News{" "}
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
      <div className="icons" id={icons}>
        <span>
          <FaSearch onClick={closeMenu} />
        </span>
        <span>
          <FaShoppingCart onClick={closeMenu} />
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
