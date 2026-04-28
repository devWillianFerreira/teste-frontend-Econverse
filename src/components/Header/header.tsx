import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/search-icon.svg";
import userIcon from "../../assets/UserCircle.svg";
import boxIcon from "../../assets/box.svg";
import likeIcon from "../../assets/Heart.svg";
import ShoppingCartIcon from "../../assets/ShoppingCart.svg";
import CrownIcon from "../../assets/CrownSimple.svg";
import shieldIcon from "../../assets/ShieldCheck.svg";

const categories: {
  name: string;
  link: string;
  activate?: boolean;
  icone?: string;
}[] = [
  { name: "TODAS CATEGORIAS", link: "#" },
  { name: "SUPERMERCADO", link: "#" },
  { name: "LIVROS", link: "#" },
  { name: "MODA", link: "#" },
  { name: "LANÇAMENTOS", link: "#" },
  { name: "OFERTAS DO DIA", link: "#", activate: true },
  { name: "ASSINATURA", link: "#", icone: CrownIcon },
];
import "./header.scss";

const Header = () => {
  return (
    <header>
      <section>
        <ul className="header_top">
          <li>
            <img src={shieldIcon} alt="Proteção" />
            <p>
              Compra <strong>100% segura</strong>
            </p>
          </li>
          <li>
            <img src={shieldIcon} alt="Proteção" />
            <p>
              <strong>Frete grátis</strong> acima de R$ 200
            </p>
          </li>
          <li>
            <img src={shieldIcon} alt="Proteção" />
            <p>
              <strong>Parcele</strong> suas compras
            </p>
          </li>
        </ul>
      </section>
      <section className="header_container">
        <img className="logo" src={logo} alt="Econverse" />
        <div className="input-wrapper">
          <input type="text" placeholder="O que você está buscando?..." />
          <button>
            <img src={searchIcon} alt="Buscar" />
          </button>
        </div>
        <div className="header__actions">
          <a href="/">
            <img src={boxIcon} alt="Pedidos" />
          </a>
          <a href="/">
            <img src={likeIcon} alt="Favoritos" />
          </a>
          <a href="/">
            <img src={userIcon} alt="Usuário" />
          </a>
          <a href="/">
            <img src={ShoppingCartIcon} alt="Carrinho" />
          </a>
        </div>
      </section>
      <nav>
        <ul className="header_nav">
          {categories.map((category, index) => (
            <li key={index}>
              <a href="/">{category.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
