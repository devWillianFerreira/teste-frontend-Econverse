import logo from "../../../assets/icons/logo.svg";
import instagram from "../../../assets/icons/instagram.svg";
import facebook from "../../../assets/icons/facebook.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import "./footer.scss";
import LinkSection from "../../sections/LinkSection/linkSection";

const Institucional = [
  {
    nome: "Sobre Nós",
    link: "#",
  },
  {
    nome: "Movimento",
    link: "#",
  },
  {
    nome: "Trabalhe conosco",
    link: "#",
  },
];

const ajuda = [
  {
    nome: "Suporte",
    link: "#",
  },
  {
    nome: "Fale Conosco",
    link: "#",
  },
  {
    nome: "Perguntas Frequentes",
    link: "#",
  },
];

const termos = [
  {
    nome: "Termos e Condições",
    link: "#",
  },
  {
    nome: "Política de Privacidade",
    link: "#",
  },
  {
    nome: "Troca e Devolução",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <section className="top-footer">
        <div className="footer_container">
          <img alt="Econverse Logo" src={logo} className="logo-footer" />
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>

          <nav className="social">
            <ul>
              <li>
                <a href="#">
                  <img alt="instagram logo" src={instagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img alt="facebook logo" src={facebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img alt="linkedin logo" src={linkedin} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <section className="links">
          <LinkSection title="Institucional" links={Institucional} />
          <LinkSection title="Ajuda" links={ajuda} />
          <LinkSection title="Termos" links={termos} />
        </section>
      </section>
      <section className="bottom-footer">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
    </footer>
  );
};

export default Footer;
