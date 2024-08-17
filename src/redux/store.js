import { configureStore } from "@reduxjs/toolkit";

import { filterReducer } from "./filters/filtersSlice";
import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";

export const store = configureStore({
  reducer: {
    contactsData: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
