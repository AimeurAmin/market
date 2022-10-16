import React from "react";
import MainLayout from "@layouts/main-layout/MainLayout";
import styles from "./clients.module.scss";
import ClientsTable from "@features/Clients/components/ClientsTable/ClientsTable";
import Paginator from "@components/paginator/Paginator";

const { container } = styles;

const Clients = () => {
  return <div className={container}>
    <ClientsTable />
    <Paginator pagesNumber={11} selectedPage={undefined} />
  </div>;
};

export default MainLayout(Clients);
