import React from "react";
import styles from "./profile-pic.module.scss";
import robot from "../../assets/imgs/robot.png";
import { RiArrowDownSFill } from "react-icons/ri";

const { container, usernameContainer } = styles;

const ProfilePic = () => {
  return (
    <div className={container}>
      <img src={robot} alt="Profile pic (replace this text with username)" />
      <div className={usernameContainer}>
        <span>AIMEUR Amin</span>
        <RiArrowDownSFill size={15} />
      </div>
    </div>
  );
};

export default ProfilePic;
