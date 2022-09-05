import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

//Layout
import { LayoutRoute } from "../../LayoutRoute";

//other files
import "./app.scss";

//Pages
import { Checkout } from "../../pages/checkout/Checkout";
import { Login } from "../../pages/register/Login";
import { NotFound } from "../../pages/notFound/NotFound";
import { SignUp } from "../../pages/register/SignUp";
import { Shop } from "../../pages/shop/shopPage/ShopPage";
import { Landing } from "../../pages/landing/Landing";

export const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LayoutRoute />}>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Fragment>
  );
};
