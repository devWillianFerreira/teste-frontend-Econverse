import type { ReactNode } from "react";
import "./title.scss";

interface TitleProps {
  children: ReactNode;
  line?: boolean;
  viewAll?: boolean;
}

const Title = ({ children, line, viewAll }: TitleProps) => {
  return (
    <div className={`title ${viewAll ? "padding-small" : "padding-big"}`}>
      <h1>{children}</h1>
      {line && <div className={`line ${viewAll ? "" : "line-solo"}`} />}
      {viewAll && <a>Ver todos</a>}
    </div>
  );
};

export default Title;
