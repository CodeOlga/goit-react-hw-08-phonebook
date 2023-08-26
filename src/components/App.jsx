import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

import { selectContacts } from 'redux/selectors'

const App = () => {
  const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.mainContainer}>
      <h1 className={css.headers}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.headers}>Contacts</h2>
        <p className={css.total}>
        Total contacts in phonebook:
        <span className={css.total}> {contacts.length}</span>
        </p>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;



















