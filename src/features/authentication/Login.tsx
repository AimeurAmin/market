import React from "react";
import Input from "@components/Input/Input";
import UserIcon from "./assets/user.svg";
import passwordIcon from "./assets/password.svg";
import styles from "./login.module.scss";
import Image from "@components/Image";
import robotImg from "@assets/imgs/robot.png";
import Button from "@components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import CustomInput from "@components/CustomInput/CustomInput";
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'
import CustomButton from "@components/CustomButton/CustomButton";
import { useAppDispatch } from "@app/hooks";
import { asyncLogin } from "./slices/auth.slice";
const { container, title, passwordHint, accountHint, errorClass, errorMessage, inputClass, loginButton } = styles;

const validate = (values: any) => {
  const errors: {email?: string; password?: string} = {};
 
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length >= 20 || values.password.length < 6) {
    errors.password = 'Must be between 6 and 20 characters';
  }


  return errors;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: ({email, password}: {email: string; password: string;}) => {
      dispatch(asyncLogin({email, password}, navigate))
    },
  });
  return (
    <form className={container} onSubmit={formik.handleSubmit}>
      <Image src={robotImg} alt="TwoDevs" style={{ width: 90 }} />

      <p className={title}>Connectez-vous</p>

      <CustomInput className={`${inputClass} ${formik.touched.email && formik.errors.email ? errorClass : ''}`}>
        <AiOutlineUser size={25}/>
        <input 
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Veuillez saisir vtore adresse mail."
        />
        {formik.touched.email && formik.errors.email ? <div className={errorMessage}>{formik.errors.email}</div> : null}
      </CustomInput>

      <CustomInput className={`${inputClass} ${formik.touched.password && formik.errors.password ? errorClass : ''}`}>
        <AiOutlineLock size={25}/>
        <input 
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Veuillez saisir vtore mot de passe."
        />
        {formik.touched.password && formik.errors.password ? <div className={errorMessage}>{formik.errors.password}</div> : null}
      </CustomInput>
      
      <p
        className={passwordHint}
        onClick={() =>
          alert("Will take you to reset password page! coming soon...")
        }
      >
        Vous avez oublié votre mot de passe? Cliquez ici.
      </p>


      <button>Connecter-vous</button>
      
      <p className={accountHint} onClick={() => navigate("/signup")}>
        Vous n’avez pas un compte? Créer votre Market.
      </p>
    </form>
  );
};

export default Login;
