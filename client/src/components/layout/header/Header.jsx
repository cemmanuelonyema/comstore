import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/sign-up">Sign up</Link>
      <Link to="/login">login</Link>
    </div>
  );
};
