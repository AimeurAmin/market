import React from "react";
import MainLayout from "@layouts/main-layout/MainLayout";
import styles from "./credit-book.module.scss";

const { container } = styles;

const CreditBook = () => {
  return <div className={container}>CreditBook</div>;
};

export default MainLayout(CreditBook);
