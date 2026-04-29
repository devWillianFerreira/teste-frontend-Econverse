import ItemCategory from "../../ui/itemCategory/itemCategory";
import "./categories.scss";
import tecnologia from "../../../assets/images/tecnologia.svg";
import supermercados from "../../../assets/images/supermercados.svg";
import bebidas from "../../../assets/images/bebidas.svg";
import ferramentas from "../../../assets/images/ferramentas.svg";
import saude from "../../../assets/images/saude.svg";
import esportes from "../../../assets/images/esportes.svg";
import moda from "../../../assets/images/moda.svg";

const Categories = () => {
  const categories: {
    title: string;
    img: string;
    activate?: boolean;
    link: string;
  }[] = [
    {
      title: "Tecnologia",
      img: tecnologia,
      activate: true,
      link: "#",
    },
    {
      title: "Supermercado",
      img: supermercados,
      link: "#",
    },
    { title: "Bebidas", img: bebidas, link: "#" },
    {
      title: "Ferramentas",
      img: ferramentas,
      link: "#",
    },
    { title: "Saúde", img: saude, link: "#" },
    {
      title: "Esportes e Fitness",
      img: esportes,
      link: "#",
    },
    { title: "Moda", img: moda, link: "#" },
  ];
  return (
    <section className="categories">
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <ItemCategory
              img={category.img}
              title={category.title}
              activate={category.activate}
              link={category.link}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
