import React, { useEffect } from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/contacts/selectors";

import { fetchContactThunk } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const filteredData = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContactThunk());
  }, [dispatch]);
  
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}

      <ul>
        {filteredData.map((item) => (
          <li className={s.li} key={item.id}>
            <Contact item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
