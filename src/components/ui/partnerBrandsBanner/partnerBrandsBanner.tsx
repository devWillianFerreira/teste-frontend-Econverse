import Button from "../Button/button";
import "./partnerBrandsBanner.scss";

interface BannerProps {
  title: string;
  description: string;
  img: string;
}

const PartnerBrandsBanner = ({ description, img, title }: BannerProps) => {
  return (
    <section className="banner">
      <figure>
        <img src={img} />
        <figcaption>
          <h1>{title}</h1>
          <p>{description}</p>
          <Button type="banner-btn">CONFIRA</Button>
        </figcaption>
      </figure>
    </section>
  );
};

export default PartnerBrandsBanner;
