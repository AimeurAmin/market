import React, { DetailedHTMLProps, HTMLAttributes, MouseEventHandler } from "react";
import style from "./button.module.scss";

const { button } = style;

interface ButtonProps {
  text: string;
  style?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
}

const Button = ({ text, onClick, style, className }: ButtonProps) => {
  return (
    <div className={`${button} ${className}`} onClick={onClick} style={style}>
      {text}
    </div>
  );
};

export default Button;
