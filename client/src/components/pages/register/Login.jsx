import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./register.module.scss";

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
    <section className={styles.register_container}>
      Login
      <div className={styles.register_right}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              className={styles.form_input}
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
              className={styles.form_input}
              onChange={handleChange}
              placeholder="password"
              value={password}
              type="password"
              name="password"
            />
          </div>

          <div className={styles.btn__group}>
            <button type="submit">Login</button>
            <Link to="/sign-up" className={styles.btn__group_link}>
              {" "}
              <button>I don't have an account, Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
      <div className={styles.register_left}> sidebar left</div>
    </section>
  );
};
