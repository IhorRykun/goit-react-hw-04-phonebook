import PropTypes from 'prop-types';
import { ButtonDel, Item, List, Name, Number } from './Contacts.styled';

export const Contacts = ({ contacts, filter, filtered, deleteItem }) => {
  let rendered = filter === '' ? contacts : filtered();
  return (
    <List>
      {rendered.map(({ name, id, number }) => (
        <Item key={id} id={id}>
          <Name>{name}: </Name>
          <Number>{number}</Number>
          <ButtonDel onClick={e => deleteItem(e)}>
            delete
          </ButtonDel>
        </Item>
      ))}
    </List>
  );
};

Contacts.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  filtered: PropTypes.func,
};
