import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";

export const Login = () => {
  //initial  user state
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { name, email, password, password2 } = user;

  //copy and update user state
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User", user);
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <section className="page__container">
      <div className="left">Sidebar</div>
      <div className="right">
        <form onSubmit={handleSubmit} className="form">
          <div className="form__group">
            <label htmlFor="email">Email Address</label>
            <input
              className="form__input"
              onChange={handleChange}
              placeholder="mail@address.com"
              value={email}
              type="email"
              name="email"
            />
          </div>
          <div className="form__group">
            <label htmlFor="`password`">Password</label>
            <input
              className="form__input"
              onChange={handleChange}
              placeholder="password"
              value={password}
              type="password"
              name="password"
            />
          </div>

          <div className="btn__group">
            <button type="submit">Login</button>
            <Link to="/sign-up" className="btn__group">
              {" "}
              <button>I don't have an account, Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};
