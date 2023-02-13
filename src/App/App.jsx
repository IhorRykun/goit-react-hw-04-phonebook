
import { Contacts } from 'components/Contacts/Contacts';
import { Filters } from 'components/Filter/Filter';
import { useState, useEffect } from 'react';
import css from 'App/App.module.css';
import { ContactsForm } from 'components/ContactForm/ContactForm';




const LOCALSTORAGE_KEY = 'contact';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const data = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedData = JSON.parse(data);
    if (parsedData) {
      setContacts(parsedData);
    }
  }, []);

  const addContact = contact => {
    setContacts(prevState => [...prevState, contact]);
  };

  const onInput = e => {
    setFilter(e.currentTarget.value);
  };

  const filtered = () => {
    return [...contacts].filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const deleteItem = e => {
    const elemToRemove = e.currentTarget.parentNode.id;
    setContacts(contacts.filter(item => item.id !== elemToRemove));
  };

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactsForm addContact={addContact} contacts={setContacts} />

      <h1>Contacts</h1>
      <Filters onInput={onInput} />
      <Contacts
        contacts={contacts}
        filter={filter}
        filtered={filtered}
        deleteItem={deleteItem}
      />
    </div>
  );
};
