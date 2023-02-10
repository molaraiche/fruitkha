import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h1> Logo</h1>{" "}
      </Link>
      <ul>
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
    </div>
  );
};

export default Header;
