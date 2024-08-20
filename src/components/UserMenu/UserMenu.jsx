import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  <h3>Welcome, {user.name}</h3>;
  return (
    <div>
      <button
        onClick={() => {
          dispatch(logoutThunk());
        }}
      >
        Exit
      </button>
    </div>
  );
};

export default UserMenu;
