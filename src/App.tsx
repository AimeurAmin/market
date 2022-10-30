import React, { useEffect } from "react";
import styles from "./App.module.scss";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/login/login-page";
import SignupPage from "./pages/signup/signup-page";
import Cashier from "./pages/cashier/Cashier";
import Clients from "./pages/clients/Clients";
import Home from "./pages/home/Home";
import StudentPage from "./pages/student/StudentPage";
import { Provider } from "react-redux";
import { store } from "./app/store";
import StudentDetail from "./pages/student/studentDetail/StudentDetail";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { loadSession, selectToken } from "@features/authentication/slices/auth.slice";

const { container } = styles;

function App() {
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadSession())
  }, []);
  
  return (
    <Provider store={store}>
      <div className={container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cashier" element={<Cashier />} />
          <Route path="/teachers" element={<Clients />} />        
          <Route path="/students" element={<StudentPage />} />
          <Route path="/students/:studentId" element={<StudentDetail />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
