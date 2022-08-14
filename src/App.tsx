import React from "react";
import styles from "./App.module.scss";
import { Routes, Route, Link } from "react-router-dom";
import CounterPage from "./pages/counter-page";
import LoginPage from "./pages/login/login-page";
import SignupPage from "./pages/signup/signup-page";
import Cashier from "./pages/cashier/Cashier";
import Clients from "./pages/clients/Clients";
import Bills from "./pages/bills/Bills";
import Products from "./pages/products/Products";
import Stock from "./pages/stock/Stock";
import CreditBook from "./pages/credit-book/CreditBook";
import Home from "./pages/home/Home";

const { container } = styles;
function App() {
  return (
    <div className={container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/cashier" element={<Cashier />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/products" element={<Products />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/credit-book" element={<CreditBook />} />
      </Routes>
    </div>
  );
}

export default App;
