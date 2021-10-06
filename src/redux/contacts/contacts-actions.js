import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSucces = createAction('contacts/fetchContactsSucces');
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactsRequest = createAction('contacts/addContactsRequest');
export const addContactsSucces = createAction('contacts/addContactsSucces');
export const addContactsError = createAction('contacts/addContactsError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSucces = createAction('contacts/deleteContactSucces');
export const deleteContactError = createAction('contacts/deleteContactError');

export const filterContact = createAction('contacts/Filter');