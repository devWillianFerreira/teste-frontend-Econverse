import { useState } from "react";
import "./item.scss";
import Button from "../Button/button";
import Modal from "../modal/modal";

interface Product {
  nome: string;
  descricao: string;
  img: string;
  preco: number;
}

interface ItemProps {
  nome: string;
  descricao: string;
  img: string;
  preco: number;
  precoAntigo?: number;
  adicional?: string;
  freteGratis?: boolean;
}

function Item({
  nome,
  descricao,
  img,
  preco,
  precoAntigo,
  adicional,
  freteGratis = false,
}: ItemProps) {
  const [itemSelected, setItemSelected] = useState<Product | null>(null);

  const abrirModal = () => {
    setItemSelected({ nome, descricao, img, preco });
  };

  const fecharModal = () => {
    setItemSelected(null);
  };

  return (
    <>
      <Modal item={itemSelected} aoFechar={fecharModal} />
      <article className="item">
        <img alt={nome} src={img} />
        <h2>{nome}</h2>
        {precoAntigo && (
          <p>
            <del>
              R${" "}
              {precoAntigo.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </del>
          </p>
        )}
        <p>
          <strong>
            R${" "}
            {preco.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </strong>
        </p>
        {adicional && <p>{adicional}</p>}
        {freteGratis && (
          <p>
            <span>Frete grátis</span>
          </p>
        )}
        <Button
          onClick={abrirModal}
          type="item-btn"
          aria-label={`Comprar ${nome}`}
        >
          Comprar
        </Button>
      </article>
    </>
  );
}

export default Item;
