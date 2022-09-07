import { Outlet } from "react-router-dom";

import React, { Fragment } from "react";

export const LayoutRoute = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};
