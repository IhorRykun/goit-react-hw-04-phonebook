import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from '../ContactForm/Forma.module.css';

export const Forma = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const onInputChange = e => {
    let { name, value } = e.currentTarget;
    setIsDisabled(isDisabled);
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }

    let finder = contacts.find(
      contact =>
        contact.toLowerCase() === value.toLowerCase() ||
        contact.number === value
    );
    if (finder) {
      setIsDisabled(true);
      alert(`${value} is already in contacts.`);
      setName('');
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    addContact(contact);
    resetForm();
  };

  return (
    <form className={css.form__add} onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name:
        <input
          className={css.input__name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={e => onInputChange(e)}
        />
      </label>
      <label className={css.form__lable}>
        Number:
        <input
          className={css.input__number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => onInputChange(e)}
        />
      </label>
      <button className={css.button__add} type="submit" disabled={isDisabled}>
        add contact
      </button>
    </form>
  );
};
