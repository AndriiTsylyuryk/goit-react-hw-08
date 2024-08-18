import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/RegistrationPage/RegistrationPage";
import Contacts from "../pages/Contacts/Contacts";
import NotFound from "../pages/NotFound/NotFound";
import { getMeThunk } from "../redux/auth/operations";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { selectIsRefreshing } from "../redux/auth/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(getMeThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <Login />
            </RestrictedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <Register />
            </RestrictedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
