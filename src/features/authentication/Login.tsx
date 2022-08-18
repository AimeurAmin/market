import React from "react";
import Input from "../../components/Input/Input";
import userIcon from "./assets/user.svg";
import passwordIcon from "./assets/password.svg";
import styles from "./login.module.scss";
import Image from "../../components/Image";
import robotImg from "../../assets/imgs/robot.png";
import Button from "../../components/main-button/MainButton";
import { useNavigate } from "react-router-dom";

const { container, title, passwordHint, accountHint } = styles;

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={container}>
      <Image src={robotImg} alt="TwoDevs" style={{ width: 90 }} />

      <p className={title}>Connectez-vous</p>

      <Input
        style={{ inputContainer: { marginBottom: 20 } }}
        prefixIcon={userIcon}
        placeholder="Veillez saisir votre e-mail"
      />

      <Input
        prefixIcon={passwordIcon}
        placeholder="Veillez saisir votre mot de passe"
        passwordVisibility={true}
      />
      <p
        className={passwordHint}
        onClick={() =>
          alert("Will take you to reset password page! coming soon...")
        }
      >
        Vous avez oublié votre mot de passe? Cliquez ici.
      </p>

      <Button
        text="Connecter"
        onClick={() => navigate("/cashier")}
        style={{ marginBlock: 40 }}
      />

      <p className={accountHint} onClick={() => navigate("/signup")}>
        Vous n’avez pas un compte? Créer votre Market.
      </p>
    </div>
  );
};

export default Login;
