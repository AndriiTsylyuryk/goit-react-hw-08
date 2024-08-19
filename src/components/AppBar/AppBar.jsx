import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import styles from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h2 className={styles.userInfo}>
        {isLoggedIn ? `Hello, ${user.name}` : "Welcome!"}
      </h2>
      <ul className={styles.nav}>
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        {isLoggedIn && (
          <li>
            <button
              className={styles.button}
              onClick={() => {
                dispatch(logoutThunk());
              }}
            >
              Exit
            </button>
          </li>
        )}
      </ul>
      <Navigation />
    </div>
  );
};

export default AppBar;
