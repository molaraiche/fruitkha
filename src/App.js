import Header from "./components/Header";
import RouteLink from "./routes";
const App = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <section>
        <RouteLink />
      </section>
    </div>
  );
};

export default App;
