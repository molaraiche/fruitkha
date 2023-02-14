import { useState, useEffect } from "react";
import Header from "./components/Header";
import RouteLink from "./routes";
import "./styles/app.css";
const App = () => {
  const [datas, setData] = useState([]);
  const [products, setProducrs] = useState([]);
  console.log(datas);
  const getData = async () => {
    const res = await fetch("./db/db.json");
    const data = await res.json();
    setData(data);
  };
  const getProducts = async () => {
    const res = await fetch("./db/products.json");
    const data = await res.json();
    setProducrs(data);
  };
  useEffect(() => {
    getData();
    getProducts();
  }, []);
  console.log(datas);
  return (
    <div className="box">
      <div className="hContainer">
        <header className="container">
          <Header />
        </header>
      </div>
      <section>
        <RouteLink datas={datas} products={products} />
      </section>
    </div>
  );
};

export default App;
