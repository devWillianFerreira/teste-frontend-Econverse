import "./brandItem.scss";

interface BrandProps {
  brand: string;
  img: string;
  link: string;
}

const BrandItem = ({ brand, img, link }: BrandProps) => {
  return (
    <a href={link} className="brand">
      <img alt={brand} src={img} />
    </a>
  );
};

export default BrandItem;
