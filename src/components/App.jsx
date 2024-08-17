import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { fetchContactThunk } from "../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/RegistrationPage/RegistrationPage";
import Contacts from "../pages/Contacts/Contacts";
import NotFound from "../pages/NotFound/NotFound";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactThunk());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList /> */}
    </div>
  );
};

export default App;
