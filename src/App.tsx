import React from "react";
import styles from "./App.module.scss";
import { Routes, Route, Link } from "react-router-dom";
import CounterPage from "./pages/counter-page";
import LoginPage from "./pages/login-page";
import SignupPage from "./pages/signup-page";

const { container } = styles;
function App() {
  return (
    <div className={container}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </div>
  );
}

export default App;
