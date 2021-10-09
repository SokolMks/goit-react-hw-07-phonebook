import { createSelector } from '@reduxjs/toolkit';


const getFilter = state => state.contacts.filter;

export const getAllContacts = state => state.contacts.items;

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  },
);



export default {
  getFilter,
  getFilteredContacts,
};