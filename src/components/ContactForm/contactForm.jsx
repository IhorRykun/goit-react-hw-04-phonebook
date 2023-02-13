import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  InputName,
  FormAdd,
  FormLable,
  InputNumber,
  ButtonAdd,
} from './ContactForm.styled';

export const ContactsForm = ({ contacts, addContact }) => {
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
        contact.name.toLowerCase() === value.toLowerCase() ||
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
    <FormAdd onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name:
        <InputName
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={e => onInputChange(e)}
        />
      </label>
      <FormLable>
        Number:
        <InputNumber
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => onInputChange(e)}
        />
      </FormLable>
      <ButtonAdd type="submit">add contact</ButtonAdd>
    </FormAdd>
  );
};
