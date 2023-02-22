import "../../styles/shop.css";
import ProductCard from "../Shop/ProductCard";
import { CgMenuRound } from "react-icons/cg";
const Shop = ({ products, getDetails }) => {
  return (
    <div>
      <div className="sHead">
        <p>FRESH AND ORGANIC</p>
        <h1>Shop</h1>
      </div>

      <div className="menuFil">
        <CgMenuRound />
      </div>
      <div className="products">
        {products.map((prd) => (
          <ProductCard
            key={prd.id}
            img={prd.image}
            name={prd.name}
            price={prd.price}
            path={prd.path}
            getDetails={getDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
