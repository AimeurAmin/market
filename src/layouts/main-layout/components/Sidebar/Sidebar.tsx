import React from "react";
import Image from "@components/Image";
import logo from "@assets/imgs/Logo-market-manager.png";
import styles from "./sidebar.module.scss";
import SideNavItem from "@components/NavItem/NavItem";
import { HiHome } from "react-icons/hi";
import { MdPointOfSale } from "react-icons/md";
import { BsPeopleFill  } from "react-icons/bs";
import { FaChalkboardTeacher } from 'react-icons/fa'


import { RiLogoutBoxFill } from "react-icons/ri";

const { container, items, logoutItem, logoItem } = styles;

const Sidebar = () => {
  return (
    <div className={container}>
      <Image src={logo} alt="Market Manager" className={logoItem} />
      <div className={items}>
        <SideNavItem Icon={HiHome} text="Accueil" route="/" />
        <SideNavItem Icon={BsPeopleFill} text="Étudiants" route="/students" />
        <SideNavItem Icon={FaChalkboardTeacher} text="Enseignants" route="/teachers" />
        <SideNavItem Icon={MdPointOfSale} text="Caisse" route="/cashier" />
      </div>

      <SideNavItem
        Icon={RiLogoutBoxFill}
        text="Déconnecter"
        route="/login"
        className={logoutItem}
      />
    </div>
  );
};

export default Sidebar;
