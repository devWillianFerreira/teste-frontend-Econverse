import { useState } from "react";

import "./carrossel.scss";
import gtIcon from "../../../assets/icons/gtIcon.svg";
import ltIcon from "../../../assets/icons/ltIcon.svg";

import Title from "../../ui/Title/title";

import Item from "../../ui/item/item";
import ItemFilter from "../../ui/itemFilter/itemFilter";

interface Produto {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface CarrosselProps {
  dados: Produto[];
  version?: "ver1" | "ver2";
}

const filters = [
  { nome: "CELULAR", ativo: true, link: "#" },
  { nome: "ACESSÓRIOS", link: "#" },
  { nome: "TABLETS", link: "#" },
  { nome: "NOTEBOOKS", link: "#" },
  { nome: "TVS", link: "#" },
  { nome: "VER TODOS", link: "#" },
];

const infoAdicional = {
  precoAntigo: 30.9,
  adicional: "ou 2x de R$ 49,95 sem juros",
  freteGratis: true,
};

function Carrossel({ dados = [], version }: CarrosselProps) {
  const [indexAtual, setIndexAtual] = useState([0, 1, 2, 3]);

  const proxItem = () => {
    setIndexAtual((indexAnt) => {
      const newIndex = indexAnt.map((index) => {
        return index + 1 >= dados.length ? 0 : index + 1;
      });
      return newIndex;
    });
  };

  const antItem = () => {
    setIndexAtual((prevIndex) => {
      const newIndex = prevIndex.map((index) => {
        return index - 1 < 0 ? dados.length - 1 : index - 1;
      });
      return newIndex;
    });
  };

  const dadosAtuais = indexAtual
    .map((index) => dados[index >= 0 && index < dados.length ? index : 0])
    .filter((item) => item !== undefined);

  return (
    <section className="carrossel-section">
      <Title line viewAll={version === "ver1" ? false : true}>
        Produtos relacionados
      </Title>
      {version === "ver1" && (
        <nav className="filter">
          {filters.map((filter, index) => (
            <ItemFilter key={index} activate={filter.ativo} link={filter.link}>
              {filter.nome}
            </ItemFilter>
          ))}
        </nav>
      )}

      <article className="carrossel">
        <button className="carrossel-btn" onClick={antItem}>
          <img alt="<" src={ltIcon} />
        </button>
        <ul>
          {dadosAtuais.map((item: Produto, index) => (
            <li key={index}>
              <Item
                nome={item.productName}
                descricao={item.descriptionShort}
                img={item.photo}
                preco={item.price}
                precoAntigo={infoAdicional.precoAntigo}
                adicional={infoAdicional.adicional}
                freteGratis={true}
              />
            </li>
          ))}
        </ul>
        <button className="carrossel-btn" onClick={proxItem}>
          <img alt=">" src={gtIcon} />
        </button>
      </article>
    </section>
  );
}

export default Carrossel;
