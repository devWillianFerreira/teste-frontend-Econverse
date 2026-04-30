import type { ReactNode } from "react";
import "./itemFilter.scss";

interface ItemFilter {
  children: ReactNode;
  link: string;
  activate?: boolean;
}

function ItemFilter({ children, link, activate = false }: ItemFilter) {
  return (
    <div className={`item-filter ${activate ? "activate" : ""}`}>
      <a href={link}>
        <p>{children}</p>
      </a>
    </div>
  );
}

export default ItemFilter;
