import "./heroBanner.scss";
import heroBanner from "../../../assets/images/HeroBanner.svg";
import Button from "../../ui/Button/button";

const HeroBanner = () => {
  return (
    <section className="heroBanner_container">
      <img src={heroBanner} alt="Banner" />
      <div className="hero-txt">
        <h1>Venha conhecer nossas </h1>
        <h1>promoções</h1>
        <p>
          <strong>50% Off </strong>
          nos produtos
        </p>
        <Button>Ver Produto</Button>
      </div>
    </section>
  );
};

export default HeroBanner;
