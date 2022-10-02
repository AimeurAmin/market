import React from "react";
import Image from "@components/Image";
import logo from "@assets/imgs/Logo-market-manager.png";
import styles from "./sidebar.module.scss";
import SideNavItem from "@components/NavItem/NavItem";
import { HiHome } from "react-icons/hi";
import { MdPointOfSale, MdStore } from "react-icons/md";
import { BsPeopleFill, BsCartFill } from "react-icons/bs";
import { IoReceipt } from "react-icons/io5";
import { FaBook } from "react-icons/fa";

import { RiLogoutBoxFill } from "react-icons/ri";

const { container, items, logoutItem, logoItem } = styles;

const Sidebar = () => {
  return (
    <div className={container}>
      <Image src={logo} alt="Market Manager" className={logoItem} />
      <div className={items}>
        <SideNavItem Icon={HiHome} text="Accueil" route="/" />
        <SideNavItem Icon={MdPointOfSale} text="Caisse" route="/cashier" />
        <SideNavItem Icon={BsPeopleFill} text="Clients" route="/clients" />
        <SideNavItem Icon={IoReceipt} text="Factures" route="/bills" />
        <SideNavItem Icon={BsCartFill} text="Produits" route="/products" />
        <SideNavItem Icon={MdStore} text="Stock" route="/stock" />
        <SideNavItem Icon={FaBook} text="Carnet des crédits" route="/credit-book" />
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
