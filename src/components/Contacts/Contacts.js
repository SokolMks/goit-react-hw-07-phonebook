import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import style from "./Contacts.module.css";

const Contacts = ({ contacts, onDeleteContact, fetchContacts }) => {
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className={style.container}>
      <h2 className={style.title}>Contacts</h2>
        <ul className={style.list}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={style.listElement}>
              <p>
                {name}: {number}
              </p>
              <button className={style.btn} onClick={() => onDeleteContact(id)}>
                Delete contact
              </button>
            </li>
          ))}
        </ul>

    </div>
  );
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

Contacts.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);