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
      <section>
        <RouteLink />
      </section>
    </div>
  );
};

export default App;
