import "./LinkSection.scss";

interface Link {
  nome: string;
  link: string;
}

interface LinkSectionProps {
  title: string;
  links: Link[];
}
const LinkSection = ({ links, title }: LinkSectionProps) => {
  return (
    <section>
      <nav className="link-section">
        <h2>{title}</h2>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.link}>{link.nome}</a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default LinkSection;
