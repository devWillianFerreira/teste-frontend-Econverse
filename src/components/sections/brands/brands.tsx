import imgBrand from "../../../assets/icons/logo.svg";
import BrandItem from "../../ui/brandItem/brandItem";
import Title from "../../ui/Title/title";
import "./brands.scss";

const Brands = () => {
  const brands = new Array(5).fill({
    brand: "econverse",
    img: imgBrand,
    link: "#",
  });
  return (
    <section className="brands_container">
      <Title>Navegue por marcas</Title>
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
