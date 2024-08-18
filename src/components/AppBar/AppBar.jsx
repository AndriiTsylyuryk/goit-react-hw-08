import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import styles from "./AppBar.module.css"; 

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h2 className={styles.userInfo}>{isLoggedIn ? `Hello, ${user.name}` : "Welcome!"}</h2>
      <ul className={styles.nav}>
        <li>
          <NavLink className={styles.navLink} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="/contacts">Contacts</NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink className={styles.navLink} to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink className={styles.navLink} to="/register">Register</NavLink>
            </li>
          </>
        )}
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
    </div>
  );
};

export default AppBar;
