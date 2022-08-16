import React from "react";
import styles from "./subnav.module.scss";

const { container } = styles;

interface Props {
  text: String;
}

const Subnav = ({ text }: Props) => {
  return <div className={container}>{text}</div>;
};

export default Subnav;
