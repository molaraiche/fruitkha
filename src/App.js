import Header from "./components/Header";
import RouteLink from "./routes";
import "./styles/app.css";
const App = () => {
  return (
    <div className="box">
      <div className="hContainer">
        <header className="container">
          <Header />
        </header>
      </div>
      <div className="container ">
        <section>
          <RouteLink />
        </section>
      </div>
    </div>
  );
};

export default App;
