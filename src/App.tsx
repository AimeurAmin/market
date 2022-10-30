import React, { PropsWithChildren, ReactElement, ReactNode, useEffect } from "react";
import styles from "./App.module.scss";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import LoginPage from "./pages/login/login-page";
import SignupPage from "./pages/signup/signup-page";
import Cashier from "./pages/cashier/Cashier";
import Clients from "./pages/clients/Clients";
import Home from "./pages/home/Home";
import StudentPage from "./pages/student/StudentPage";
import { Provider } from "react-redux";
import { store } from "./app/store";
import StudentDetail from "./pages/student/studentDetail/StudentDetail";
import { useAppDispatch } from "@app/hooks";
import { loadSession } from "@features/authentication/slices/auth.slice";
import { localStorageGet } from "@app/utils";

const { container } = styles;

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const token  = localStorageGet("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadSession())
  }, []);
  
  return (
    <Provider store={store}>
      <div className={container}>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route path="/cashier" element={<ProtectedRoute><Cashier /></ProtectedRoute>} />
          <Route path="/teachers" element={<ProtectedRoute><Clients /></ProtectedRoute>} />     

          <Route path="/students" element={<ProtectedRoute><StudentPage /></ProtectedRoute>} />
          <Route path="/students/:studentId" element={<ProtectedRoute><StudentDetail /></ProtectedRoute>} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
