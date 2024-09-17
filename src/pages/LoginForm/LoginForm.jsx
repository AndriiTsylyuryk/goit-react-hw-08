import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { selectError } from "../../redux/auth/selectors";

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
  const error = useSelector(selectError);
  
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
          {error && <p>{"Wrong username or password:("}</p>}
          <Link className={styles.link} to="/register">
            <p>Register</p>
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
