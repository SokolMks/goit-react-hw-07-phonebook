import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactsRequest,
  addContactsSucces,
  addContactsError,
  deleteContactRequest,
  deleteContactSucces,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSucces,
  fetchContactsError,
  filterContact,
} from './contacts-actions';

const loading = createReducer(false, {
  [addContactsRequest]: () => true,
  [addContactsSucces]: () => false,
  [addContactsError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSucces]: () => false,
  [deleteContactError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSucces]: () => false,
  [fetchContactsError]: () => false,
});

const items = createReducer([], {
  [fetchContactsSucces]: (_, { payload }) => payload,
  [addContactsSucces]: (state, { payload }) => [payload, ...state],
  [deleteContactSucces]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter, loading });