import Header from "./components/Header";
import RouteLink from "./routes";
import "./styles/app.css";
const App = () => {
  return (
    <div className="box">
      <div className="container ">
        <header>
          <Header />
        </header>
        <section>
          <RouteLink />
        </section>
      </div>
    </div>
  );
};

export default App;
