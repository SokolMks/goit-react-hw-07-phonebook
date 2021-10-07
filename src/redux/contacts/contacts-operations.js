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
import {addContacts} from './contacts-selectors';

axios.defaults.baseURL = 'http://localhost:3001';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSucces(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = ({ name, number }, contacts) =>
  async (dispatch) => {
    dispatch(addContactsRequest());
    try {
      const data = await addContacts({ name, number }, contacts);
      if (!data) {
        return alert("Cant have dublicate contact");
      }
      dispatch(addContactsSucces(data));
    } catch (error) {
      dispatch(addContactsError(error.message));
    }
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