import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

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
