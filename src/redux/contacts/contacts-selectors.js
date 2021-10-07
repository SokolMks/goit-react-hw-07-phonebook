import { createSelector } from '@reduxjs/toolkit';
import axios from "axios";

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  },
);

export async function addContacts({ name, number }, contacts) {
  const data = {
    name,
    number,
  };
  const repeat = contacts.some(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );
  if (repeat) {
    return null;
  }
  axios.post("/contacts", data);
  return data;
}

export default {
  getFilter,
  getFilteredContacts,
};