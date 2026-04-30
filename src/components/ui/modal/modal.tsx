import { useEffect, useRef, useState } from "react";

import "./modal.scss";
import Button from "../Button/button";

interface Product {
  nome: string;
  descricao: string;
  img: string;
  preco: number;
}

interface ModalProps {
  item: Product | null;
  aoFechar: () => void;
}

const Modal = ({ aoFechar, item }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // 🔹 contador
  const [contador, setContador] = useState(0);

  // 🔹 derivado
  const aberto = !!item;

  // 🔹 efeito colateral (scroll)
  useEffect(() => {
    if (aberto) {
      document.body.classList.add("desabilitar-scroll");
    } else {
      document.body.classList.remove("desabilitar-scroll");
    }

    return () => {
      document.body.classList.remove("desabilitar-scroll");
    };
  }, [aberto]);

  // 🔹 contador correto
  const maisContador = () => {
    setContador((prev) => prev + 1);
  };

  const menosContador = () => {
    setContador((prev) => Math.max(0, prev - 1));
  };

  // 🔹 fechar modal
  const aoFecharModal = () => {
    aoFechar();
  };

  return (
    <>
      {item && aberto && (
        <>
          <div className="overlay" onClick={aoFecharModal}></div>
          <dialog className="modal" ref={dialogRef} open={aberto}>
            <button onClick={aoFecharModal} className="close">
              ✕
            </button>
            <figure>
              <img src={item.img} />
              <figcaption>
                <div className="text-card">
                  <p className="product-name">{item.nome}</p>
                  <p className="product-price">
                    R${" "}
                    {item.preco.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <p className="product-description">{item.descricao}</p>
                  <a className="details">
                    Veja mais detalhes sobre o produto &gt;
                  </a>
                </div>

                <div className="buttons">
                  <div className="contador">
                    <button onClick={menosContador}>-</button>
                    <input type="number" value={contador} />
                    <button onClick={maisContador}>+</button>
                  </div>
                  <Button>Comprar</Button>
                </div>
              </figcaption>
            </figure>
          </dialog>
        </>
      )}
    </>
  );
};

export default Modal;
