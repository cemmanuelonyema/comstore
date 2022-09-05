import { Outlet } from "react-router-dom";
import { Header } from "./components/layout/header/Header";

import React from "react";

export const LayoutRoute = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};
