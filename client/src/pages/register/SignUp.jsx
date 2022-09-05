import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";

export const SignUp = () => {
  //initial  user state
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  //copy and update user state
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User", user);
    setUser({
      name: "",
      email: "",
      password: "",
      password2: "",
    });
  };

  return (
    <section className="page__container">
      <div className="left">Sidebar</div>
      <div className="right">
        <form onSubmit={handleSubmit} className="form">
          <div className="form__group">
            <label htmlFor="name">Full Name</label>
            <input
              className="form__input"
              onChange={handleChange}
              placeholder="first - last name"
              value={name}
              type="name"
              name="name"
            />
          </div>
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
          <div className="form__group">
            <label htmlFor="password">Confirm Password</label>
            <input
              className="form__input"
              onChange={handleChange}
              placeholder="confirm password"
              value={password2}
              type="password"
              name="password2"
            />
          </div>
          <div className="btn__group">
            <input type="submit" value="Sign Up" className="btn btn-primary" />
            <Link to="/login" className="btn btn-secondary">
              {" "}
              <button>I have an account, Log In</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};
