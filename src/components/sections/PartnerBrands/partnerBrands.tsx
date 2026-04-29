import "./partnerBrands.scss";
import img from "../../../assets/images/partnerBrands.svg";
import PartnerBrandsBanner from "../../ui/partnerBrandsBanner/partnerBrandsBanner";

const banners = [
  {
    img,
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    img,
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
  },
];

const PartnerBrands = () => {
  return (
    <section className="partnerBrands_container">
      {banners.map((banner, index) => (
        <PartnerBrandsBanner
          key={index}
          img={banner.img}
          description={banner.description}
          title={banner.title}
        />
      ))}
    </section>
  );
};

export default PartnerBrands;
