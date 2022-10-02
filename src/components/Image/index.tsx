import React, { MouseEventHandler } from "react";
import logo from "@/assets/imgs/Logo-market-manager.png";
import styles from "./logo.module.scss";

interface ImageProps {
  src: typeof logo | undefined;
  alt: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
  style?: any;
  className?: any;
}

const { logoImg } = styles;

const Image = ({
  src = undefined,
  alt = "TwoDevs",
  style,
  className,
  onClick = undefined,
}: ImageProps) => {
  return (
    <img
      src={src}
      onClick={onClick}
      alt="TwoDevs"
      className={`${logoImg} ${className}`}
      style={style}
    />
  );
};

export default Image;
