import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./Login.module.css"; // Імпорт стилів

const Login = () => {
  const isLoggenIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    console.log(values);
    options.resetForm();
  };

  if (isLoggenIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <Field
            className={styles.field}
            name="email"
            placeholder="Enter email"
          />
          <Field
            className={styles.field}
            name="password"
            type="password"
            placeholder="Enter password"
          />
          <button className={styles.button} type="submit">
            Login
          </button>
          <Link className={styles.link} to="/register">
            <p>Register</p>
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
