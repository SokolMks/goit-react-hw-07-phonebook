import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import style from "./Phonebook.module.css";

function PhoneBook({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getAllContacts);

  const handleChangeInput = (e) => {
    const { value } = e.currentTarget;

    if (e.target.name === "name") {
      setName(value);
    }
    if(e.target.name === "number") {
      setNumber(value);  
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    //submitForm({ name, number });
    const savedContacts =  contacts.map(({ name }) => name.toLowerCase()).includes(name.toLowerCase());
    const savedContactsNumber = contacts.map(({ number }) => number).includes(number);
    if (savedContacts) {
      alert(name + ' is already in contacts.');
      return;
    } else if (savedContactsNumber) {
      alert(number + 'is already in contacts.');
    }
    onSubmit({ name, number });
    formReset();
  };

  const formReset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={style.containerForm} onSubmit={onSubmitForm}>
      <h2 className={style.title}>Phonebook</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={style.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

PhoneBook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(contactsOperations.addContact(data)),
});


export default connect(null, mapDispatchToProps)(PhoneBook);