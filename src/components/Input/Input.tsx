import React, { useId, useState } from "react";
import Image from "../Image";
import userIcon from "../assets/user.svg";
import hiddenPasswordIcon from "@assets/icons/hidden-password.svg";
import visiblePasswordIcon from "@assets/icons/visible-password.svg";
import styles from "./input.module.scss";
interface InputModel {
  placeholder?: string;
  type?: string;
  label?: string;
  prefixIcon?: typeof userIcon;
  suffixIcon?: any;
  passwordVisibility?: boolean;
  style?: {
    inputContainer?: any;
    label?: any;
    input?: any;
    prefixIcon?: any;
    suffixIcon?: any;
  };
  className?: string;
}

const { container } = styles;

const Input = ({
  placeholder = "",
  type = "text",
  label = "",
  prefixIcon = undefined,
  suffixIcon = undefined,
  passwordVisibility = false,
  style = {},
  className = ''
}: InputModel) => {
  const id = useId();
  const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className={container} style={style.inputContainer}>
        {prefixIcon && <Image src={prefixIcon} alt="user-email" />}
        <input
          id={id}
          type={
            !passwordVisibility ? type : visiblePassword ? type : "password"
          }
          placeholder={placeholder}
          style={style.input}
          autoComplete="new-password"
        />
        {suffixIcon && (
          <Image
            style={{ cursor: "pointer" }}
            src={suffixIcon}
            alt="password-visibility"
          />
        )}
        {passwordVisibility && (
          <Image
            style={{ cursor: "pointer" }}
            src={visiblePassword ? hiddenPasswordIcon : visiblePasswordIcon}
            alt="password-visibility"
            onClick={() => setVisiblePassword((prev) => !prev)}
          />
        )}
      </div>
    </>
  );
};

export default Input;
