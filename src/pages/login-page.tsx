import React from "react";
import Image from "../components/Image";
import Login from "../features/authentication/Login";
import styles from "./login-page.module.scss";
import MarketManagerLogo from "../assets/imgs/Logo-market-manager.png";
import { useNavigate } from "react-router-dom";
const { container } = styles;
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className={container}>
      <Image
        src={MarketManagerLogo}
        alt="Market-Manager"
        style={extrStyles.logo}
        onClick={() => navigate("/")}
      />
      <Login />
      {/* <Footer /> */}
    </div>
  );
};

export default LoginPage;

const extrStyles = {
  logo: {
    width: 200,
    position: "absolute",
    top: 20,
    left: 20,
    cursor: "pointer",
  },
};
