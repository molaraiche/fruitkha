import { useState, useEffect } from "react";
import Header from "./components/Header";
import RouteLink from "./routes";
import "./styles/app.css";
const App = () => {
  const [datas, setData] = useState([]);
  const [products, setProducrs] = useState([]);
  const [added, setAdded] = useState(0);
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
  const getDetails = (id) => {
    console.log(id);
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
        />
      </section>
    </div>
  );
};

export default App;
