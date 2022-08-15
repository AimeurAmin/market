import React from "react";
import MainLayout from "../../layouts/main-layout/MainLayout";
import styles from "./cashier.module.scss";

const { container } = styles;

const Cashier = () => {
  return <div className={container}>Cashier</div>;
};

export default MainLayout(Cashier);
