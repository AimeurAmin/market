import React, { PropsWithChildren, ReactNode } from "react";
import { NavLink, To } from "react-router-dom";
import styles from "./nav-item.module.scss";

const { container, current } = styles;

interface Props {
  Icon: Function;
  text: string;
  route: To;
  size?: number;
  children?: ReactNode;
  style?: React.CSSProperties;
  className?: any;
  onClick?: any;
}

const SideNavItem = ({ Icon, size = 26, text, style, route, className, onClick }: Props) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }: any) =>
        `${container} ${className} ${isActive ? current : ""}`
      }
      onClick={onClick}
    >
      <Icon color="white" size={size} />
      <span>{text}</span>
    </NavLink>
  );
};

export default SideNavItem;
