import React from "react";
import MainLayout from "../../layouts/main-layout/MainLayout";
import styles from "./stock.module.scss";

const { container } = styles;

const Stock = () => {
  return <div className={container}>Stock</div>;
};

export default MainLayout(Stock);
