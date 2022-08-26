import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./components/layout/header/Header";
import { Checkout } from "./components/pages/checkout/Checkout";
import { Home } from "./components/pages/home/Home";
import { NotFound } from "./components/pages/notFound/NotFound";
import { Login } from "./components/pages/register/Login";
import { SignUp } from "./components/pages/register/SignUp";
import { Shop } from "./components/pages/shop/shopPage/ShopPage";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" index exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

export default App;
