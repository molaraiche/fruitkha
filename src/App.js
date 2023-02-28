import { useState, useEffect } from "react";
import Header from "./components/Header";
import RouteLink from "./routes";
import "./styles/app.css";
const App = () => {
  const [datas, setData] = useState([]);
  const [products, setProducrs] = useState([]);
  const [added, setAdded] = useState(0);
  const [prdQt, setPrdQt] = useState(0);
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
  const addQt = () => setPrdQt(prdQt + 1);
  const rmvQt = () => (prdQt > 0 ? setPrdQt(prdQt - 1) : null);
  const getDetails = (id, name, prdQt, price) => {
    console.log(id);
    console.log(name);
    console.log(prdQt);
    console.log(price);
  };

  useEffect(() => {
    getData();
    getProducts();
  }, []);

  return (
    <div className="box">
      <div className="hContainer">
        <header className="container">
          <Header added={added} />
        </header>
      </div>
      <section>
        <RouteLink
          datas={datas}
          products={products}
          added={added}
          setAdded={setAdded}
          getDetails={getDetails}
          prdQt={prdQt}
          addQt={addQt}
          rmvQt={rmvQt}
          setPrdQt={setPrdQt}
        />
      </section>
    </div>
  );
};

export default App;
