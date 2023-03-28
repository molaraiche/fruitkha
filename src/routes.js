import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import News from "./components/Pages/News";
import Contact from "./components/Pages/Contact";
import Shop from "./components/Pages/Shop";
import ProductPage from "./components/Shop/ProductPage";
import Article from "./components/Article";
import ShoppingCard from "./components/Shop/ShoppingCard";
const RouteLink = ({
  datas,
  products,
  setAdded,
  getDetails,
  rmvQt,
  addQt,
  prdQt,
  setPrdQt,
  cartId,
  setCartId,
  cartName,
  setCartName,
  cartQt,
  setCartQt,
  cartPrice,
  setCartPrice,
}) => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news/*" element={<News datas={datas} />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/shop/*"
        element={<Shop products={products} getDetails={getDetails} />}
      />
      <Route path="/cart" element={<ShoppingCard getDetails={getDetails} />} />
      {datas.map((data) => (
        <Route
          key={data.id}
          path={data.link}
          element={
            <Article
              id={data.id}
              img={data.img}
              admin={data.admin}
              title={data.title}
              date={data.date}
              content={data.content}
            />
          }
        />
      ))}

      {products.map((prd) => (
        <Route
          path={prd.path}
          key={prd.id}
          element={
            <ProductPage
              id={prd.id}
              name={prd.name}
              img={prd.image}
              details={prd.details}
              products={products}
              price={prd.price}
              setAdded={setAdded}
              getDetails={getDetails}
              prdQt={prdQt}
              addQt={addQt}
              rmvQt={rmvQt}
              setPrdQt={setPrdQt}
              setCartId={setCartId}
              setCartName={setCartName}
              setCartQt={setCartQt}
              setCartPrice={setCartPrice}
            />
          }
        />
      ))}
    </Routes>
  );
};

export default RouteLink;
