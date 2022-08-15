import React, { PropsWithChildren } from "react";
import styles from "./main-layout.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

const { container, mainContent, content } = styles;

const MainLayout = (Content: any) => {
  return () => (
    <div className={container}>
      <Sidebar />
      <div className={mainContent}>
        <Navbar />
        <Content />
      </div>
    </div>
  );
};

export default MainLayout;
