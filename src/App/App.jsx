import { ContactsForm } from 'components/ContactForm/contactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filters } from 'components/filter/filter';
import React, { Component } from 'react';
import css from '../App/app.module.css';


const LOCALSTORAGE_KEY = 'contact';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const data = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedData = JSON.parse(data);
    if (parsedData) {
      this.setState({ contacts: parsedData });
    }
  }

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onInput = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filtered = () => {
    return [...this.state.contacts].filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
  };

  deleteItem = e => {
    const elemToRemove = e.currentTarget.parentNode.id;
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== elemToRemove),
    });
  };

  componentDidUpdate(prevState, prevProps) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        LOCALSTORAGE_KEY,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  render() {
    return (
      <div className={css.div}>
        <h1>Phonebook</h1>
        <ContactsForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />

        <h1>Contacts</h1>
        <Filters onInput={this.onInput} />
        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
          filtered={this.filtered}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}
