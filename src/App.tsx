import { useEffect, useState } from "react";
import Footer from "./components/layout/Footer/footer";
import Header from "./components/layout/Header/header";
import Brands from "./components/sections/brands/brands";
import Categories from "./components/sections/categories/categories";
import HeroBanner from "./components/sections/heroBanner/heroBanner";
import Newsletter from "./components/sections/newsletter/newsletter";
import PartnerBrands from "./components/sections/PartnerBrands/partnerBrands";
import "./styles/main.scss";
import Carrossel from "./components/sections/Carrossel/carrossel";

function App() {
  const [dadosCar, setDadosCar] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await fetch("/api/produtos.json");
        const response = await products.json();
        setDadosCar(response.products);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <Header />
      <HeroBanner />
      <div className="container">
        <Categories />
        <Carrossel version="ver1" dados={dadosCar} />
        <PartnerBrands />
        <Carrossel dados={dadosCar} />
        <PartnerBrands />
        <Brands />
        <Newsletter />
      </div>
      <Footer />
    </>
  );
}

export default App;
