import Button from "../../ui/Button/button";
import "./newsletter.scss";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="teste">
        <h1>Inscreva-se na nossa newsletter</h1>
        <p>
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
          da Econverse.
        </p>
      </div>
      <form>
        <div className="information">
          <input type="text" placeholder="Digite seu nome" />
          <input type="text" placeholder="Digite seu e-mail" />
          <Button type="news-btn">INSCREVER</Button>
        </div>
        <div className="check">
          <input type="checkbox" />
          <p>Aceito os termos e condições</p>
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
