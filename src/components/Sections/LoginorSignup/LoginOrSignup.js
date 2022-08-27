import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginOrSignup.module.css";
import validate from "./validate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { object } from "prop-types";
export default function LoginOrSignup() {
  const [data, setData] = useState({
    Email: "",
    Password: "",
    Password2: "",
    name: "",
    name: "",
    lastName: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  useEffect(() => {
    setErrors(validate(data));
    console.log(errors);
  }, [data, touched]);
  const changeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const touchHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length !== 0) {
      setTouched({
        name: true,
        lastName: true,
        Email: true,
        Password: true,
        Password2: true,
      });
      notifyError();
    } else {
      notify();
    }
  };
  const notifyError = () => {
    toast.error("invalid Data!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      bgColor: "black",
    });
  };
  const notify = () =>
    toast.success("Success!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      bgColor: "black",
    });
  return (
    <>
      <div className={styles.container}>
        <div className={styles.back}></div>
        <form>
          <div className={styles.main}>
            <div className={styles.math}>
              <h1>Create New Account</h1>
              <p>
                Already a Member?{" "}
                <Link to={"/login"} className={styles.link}>
                  Log In
                </Link>
              </p>
            </div>
            <div className={styles.nameAndLastName}>
              <input
                type={"text"}
                placeholder="First Name"
                className={
                  errors.Email && touched.name ? styles.NameError : styles.name
                }
                name="name"
                onChange={changeHandler}
                onFocus={touchHandler}
              />
              <input
                type={"text"}
                placeholder="Last Name"
                className={
                  errors.Email && touched.lastName
                    ? styles.NameError
                    : styles.lastName
                }
                name="lastName"
                onChange={changeHandler}
                onFocus={touchHandler}
              />
            </div>
            <div
              className={
                errors.name && touched.name ? styles.errors : styles.hidden
              }
            >
              <p
                className={
                  errors.name && touched.name ? styles.nameError : styles.hidden
                }
              >
                {errors.name}
              </p>
              <p
                className={
                  errors.lastName && touched.lastName
                    ? styles.nameError
                    : styles.hidden
                }
              >
                {errors.lastName}
              </p>
            </div>
            <input
              type={"email"}
              placeholder="Email"
              className={
                errors.Email && touched.Email ? styles.EmailError : styles.email
              }
              name="Email"
              onChange={changeHandler}
              onFocus={touchHandler}
            />
            <p
              className={
                errors.Email && touched.Email
                  ? styles.emailError
                  : styles.hidden
              }
            >
              {errors.Email}
            </p>
            <input
              type={"password"}
              placeholder="Password"
              className={
                errors.Email && touched.Password
                  ? styles.EmailError
                  : styles.password
              }
              name="Password"
              onChange={changeHandler}
              onFocus={touchHandler}
            />
            <p
              className={
                errors.Password && touched.Password
                  ? styles.PasswordError
                  : styles.hidden
              }
            >
              {errors.Password}
            </p>
            <input
              type={"password"}
              placeholder="Confirm Password"
              className={
                errors.Email && touched.Password2
                  ? styles.EmailError
                  : styles.password
              }
              name="Password2"
              onChange={changeHandler}
              onFocus={touchHandler}
            />
            <p
              className={
                errors.Password2 && touched.Password2
                  ? styles.emailError
                  : styles.hidden
              }
            >
              {errors.Password2}
            </p>
            <br />
            <div className={styles.idk}>
              <button
                className={styles.submit}
                type={"submit"}
                onClick={submitHandler}
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}
