import axios from 'axios';
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
} from './contacts-actions';


axios.defaults.baseURL = 'http://localhost:3001';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSucces(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = data => dispatch => {
  const contacts = { name: data.name, number: data.number };
  dispatch(addContactsRequest());
  
    axios
    .post('/contacts', contacts)
    .then(({ data }) => dispatch(addContactsSucces(data)))
    .catch(error => dispatch(addContactsError(error)));

};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSucces(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

export default {
  addContact,
  deleteContact,
  fetchContacts,
};