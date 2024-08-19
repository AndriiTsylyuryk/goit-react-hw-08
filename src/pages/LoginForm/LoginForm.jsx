import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import styles from './LoginForm.module.css'
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
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

export default LoginForm;
