import Header from "./components/layout/Header/header";
import Brands from "./components/sections/brands/brands";
import Categories from "./components/sections/categories/categories";
import HeroBanner from "./components/sections/heroBanner/heroBanner";
import PartnerBrands from "./components/sections/PartnerBrands/partnerBrands";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <div className="container">
        <Categories />
        <PartnerBrands />
        <PartnerBrands />
        <Brands />
      </div>
    </>
  );
}

export default App;
