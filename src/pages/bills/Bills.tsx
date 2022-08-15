import React from "react";
import MainLayout from "../../layouts/main-layout/MainLayout";
import styles from "./bills.module.scss";

const { container } = styles;

const Bills = () => {
  return <div className={container}>Bills</div>;
};

export default MainLayout(Bills);
