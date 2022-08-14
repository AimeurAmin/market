import React, { PropsWithChildren } from "react";
import styles from "./main-layout.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";

const { container, mainContent } = styles;

const MainLayout = (Content: any) => {
  return () => (
    <div className={container}>
      <Sidebar />
      <div className={mainContent}>
        <Content />
      </div>
    </div>
  );
};

export default MainLayout;
