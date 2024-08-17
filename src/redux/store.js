import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filters/filtersSlice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    contactsData: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
