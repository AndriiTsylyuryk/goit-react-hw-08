import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/slice";
import { deleteContactThunk } from "../../redux/contacts/operations";

const Contact = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.number}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteContactThunk(item.id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
