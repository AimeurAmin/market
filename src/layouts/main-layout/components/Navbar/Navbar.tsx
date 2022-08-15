import React from "react";
import ProfilePic from "../../../../components/ProfilePic/ProfilePic";
import styles from "./navbar.module.scss";

const { container } = styles;

const Navbar = () => {
  return <div className={container}>
    <ProfilePic />
  </div>;
};

export default Navbar;
