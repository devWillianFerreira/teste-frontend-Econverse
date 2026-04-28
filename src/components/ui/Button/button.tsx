import type { ReactNode } from "react";
import "./button.scss";

interface buttonProps {
  children: ReactNode;
  type?: string;
  onClick?: () => void;
}

const Button = ({ children, onClick, type }: buttonProps) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
