import Header from "./components/layout/Header/header";
import Categories from "./components/sections/categories/categories";
import HeroBanner from "./components/sections/HeroBanner/heroBanner";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <div className="container">
        <Categories />
      </div>
    </>
  );
}

export default App;
