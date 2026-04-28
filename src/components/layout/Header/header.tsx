import logo from "../../assets/icons/logo.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import userIcon from "../../assets/icons/UserCircle.svg";
import boxIcon from "../../assets/icons/box.svg";
import likeIcon from "../../assets/icons/Heart.svg";
import ShoppingCartIcon from "../../assets/icons/ShoppingCart.svg";
import CrownIcon from "../../assets/icons/CrownSimple.svg";
import shieldIcon from "../../assets/icons/ShieldCheck.svg";
import truckIcon from "../../assets/icons/Truck.svg";
import creditCardIcon from "../../assets/icons/CreditCard.svg";

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
            <img src={shieldIcon} alt="Compra 100% segura " />
            <p>
              Compra <strong>100% segura</strong>
            </p>
          </li>
          <li>
            <img src={truckIcon} alt="Frete grátis acima de R$ 200" />
            <p>
              <strong>Frete grátis</strong> acima de R$ 200
            </p>
          </li>
          <li>
            <img src={creditCardIcon} alt="Parcele suas compras" />
            <p>
              <strong>Parcele</strong> suas compras
            </p>
          </li>
        </ul>
      </section>
      <section className="header_container">
        <a href="/">
          <img className="logo" src={logo} alt="Econverse" />
        </a>
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
              <a href="/" className={category.activate ? "activate" : ""}>
                <img src={category?.icone} />
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
