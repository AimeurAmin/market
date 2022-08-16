import React from "react";
import styles from "./table.module.scss";
import { PropsWithChildren } from "react";

const { container, table } = styles;

const Table = ({ children }: PropsWithChildren) => {
  return <div className={container}>
    <table className={table}>{children}</table>
  </div>;
};

export default Table;
