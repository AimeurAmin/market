import React, { useEffect } from "react";
import styles from "./main-layout.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Subnav from "./components/Subnav/Subnav";

const { container, mainContent } = styles;

const MainLayout = (Content: any) => {
  return () => (
    <div className={container}>
      <Sidebar />
      <div className={mainContent}>
        <Navbar />
        <Subnav text="Sub nav" />
        <Content />
      </div>
    </div>
  );
};

export default MainLayout;
