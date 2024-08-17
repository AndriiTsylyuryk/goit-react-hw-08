import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";

const Login = () => {
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
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="email" placeholder="Enter email"></Field>
          <Field
            name="password"
            type="password"
            placeholder="Enter password"
          ></Field>
          <button type="submit">Login</button>

          <Link to="/register">
            <p>Register</p>{" "}
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
