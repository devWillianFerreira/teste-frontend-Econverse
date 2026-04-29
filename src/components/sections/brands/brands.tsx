import imgBrand from "../../../assets/icons/logo.svg";
import BrandItem from "../../ui/brandItem/brandItem";
import "./brands.scss";

const Brands = () => {
  const brands = new Array(5).fill({
    brand: "econverse",
    img: imgBrand,
    link: "#",
  });
  return (
    <section className="brands_container">
      <h1>Navegue por marcas</h1>
      <ul>
        {brands.map((item, index) => (
          <li key={index}>
            <BrandItem brand={item.marca} img={item.img} link={item.link} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Brands;
