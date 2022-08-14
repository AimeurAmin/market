import React from "react";
import Image from "../../../../components/Image";
import logo from "../../../../assets/imgs/Logo-market-manager.png";
import styles from "./sidebar.module.scss";
import NavItem from "../../../../components/NavItem/NavItem";
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
        <NavItem Icon={HiHome} text="Accueil" route="/" />
        <NavItem Icon={MdPointOfSale} text="Caisse" route="/cashier" />
        <NavItem Icon={BsPeopleFill} text="Clients" route="/clients" />
        <NavItem Icon={IoReceipt} text="Factures" route="/bills" />
        <NavItem Icon={BsCartFill} text="Produits" route="/products" />
        <NavItem Icon={MdStore} text="Stock" route="/stock" />
        <NavItem Icon={FaBook} text="Carnet des crédits" route="/credit-book" />
      </div>

      <NavItem
        Icon={RiLogoutBoxFill}
        text="Déconnecter"
        route="/login"
        className={logoutItem}
      />
    </div>
  );
};

export default Sidebar;
