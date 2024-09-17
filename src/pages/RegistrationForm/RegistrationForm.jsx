import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";


const RegistrationForm = () => {
  const dispatch = useDispatch();

  const schema = Yup.object({
    name: Yup.string()
      .required("This field is required")
      .min(3, "add more")
      .max(50, "too much chars"),

    email: Yup.string("please add only numbers")
      .required("This field is required")
      .min(3, "add more")
      .max(50, "too much chars"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };

  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
        <Form className={styles.form}>
          <Field
            className={styles.field}
            name="name"
            placeholder="Enter name"
          />
          <ErrorMessage name="name" component="span" />
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
            Register
          </button>
          <Link className={styles.link} to="/login">
            <p>I already have an account</p>
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
