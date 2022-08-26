import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./register.module.scss";

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
    <div className={styles.signUp_container}>
      SignUp
      <div></div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              onChange={handleChange}
              placeholder="first - last name"
              value={name}
              type="name"
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              onChange={handleChange}
              placeholder="mail@address.com"
              value={email}
              type="email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="`password`">Password</label>
            <input
              onChange={handleChange}
              placeholder="password"
              value={password}
              type="password"
              name="password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              onChange={handleChange}
              placeholder="confirm password"
              value={password2}
              type="password"
              name="password2"
            />
          </div>
          <div className="btn-group">
            <button type="submit">Sign Up</button>
            <Link to="/login">
              {" "}
              <button>I have an account, Log In</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
