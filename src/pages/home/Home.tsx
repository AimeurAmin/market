import React from "react";
import MainLayout from "../../layouts/main-layout/MainLayout";
import styles from "./home.module.scss";

const { container } = styles;

const Home = () => {
  return <div className={container}>Home</div>;
};

export default MainLayout(Home);
