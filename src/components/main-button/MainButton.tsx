import React, { DetailedHTMLProps, HTMLAttributes, MouseEventHandler } from "react";
import style from "./main-button.module.scss";

const { button } = style;

interface ButtonProps {
  text: string;
  style: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Button = ({ text, onClick, style }: ButtonProps) => {
  return (
    <div className={button} onClick={onClick} style={style}>
      {text}
    </div>
  );
};

export default Button;
