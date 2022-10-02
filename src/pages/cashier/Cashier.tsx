import React from "react";
import MainLayout from "@layouts/main-layout/MainLayout";
import Paginator from "@components/paginator/Paginator";
import styles from "./cashier.module.scss";
import CashierTable from "@features/cashier/components/cashierTable/CashierTable";
import CashierHeader from "@features/cashier/components/cashierHeader/CashierHeader";

const { container } = styles;

const Cashier = () => {
  return (
    <div className={container}>
      <CashierHeader />
      <CashierTable />
      <Paginator pagesNumber={11} selectedPage={undefined} />
    </div>
  );
};

export default MainLayout(Cashier);
