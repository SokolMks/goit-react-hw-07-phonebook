import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { addContact, deleteContact, filterContact } from "./actions";

const itemContactReducer = createReducer([], {
  [addContact]: (state, action) => {
    const search = state.find(
      (el) => el.name.toLowerCase() === action.payload.name.toLowerCase()
    );
    if (search) {
      alert(`${search.name} is already in contacts.`);
      return;
    }
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    const filtered = state.filter((el) => el.id !== action.payload);
    return [...filtered];
  },
});

const filterContactReducer = createReducer("", {
  [filterContact]: (state, action) => action.payload,
});

export default combineReducers({
  items: itemContactReducer,
  filter: filterContactReducer,
});