import React from "react";
import MainLayout from "../../layouts/main-layout/MainLayout";
import styles from "./clients.module.scss";

const { container } = styles;

const Clients = () => {
  return <div className={container}>Clients</div>;
};

export default MainLayout(Clients);
