import "./itemCategory.scss";
interface ItemCategoriaProps {
  img: string;
  title: string;
  link: string;
  activate?: boolean;
}

const ItemCategory = ({ img, link, title, activate }: ItemCategoriaProps) => {
  return (
    <a href={link} className="item-category">
      <figure className={`${activate ? "ativo" : ""}`}>
        <img src={img} alt={title} />
        <figcaption>
          <h2>{title}</h2>
        </figcaption>
      </figure>
    </a>
  );
};

export default ItemCategory;
