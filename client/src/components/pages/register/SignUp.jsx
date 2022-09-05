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
    <section className={styles.register_container}>
      SignUp
      <div className={styles.register_right}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              className={styles.form_input}
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
          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              className={styles.form_input}
              onChange={handleChange}
              placeholder="confirm password"
              value={password2}
              type="password"
              name="password2"
            />
          </div>
          <div className={styles.btn__group}>
            <input type="submit" value="Sign Up" className="btn btn-primary" />
            <Link to="/login" className={styles.btn__group_link}>
              {" "}
              <button>I have an account, Log In</button>
            </Link>
          </div>
        </form>
      </div>
      <div className={styles.register_left}> sidebar left</div>
    </section>
  );
};
