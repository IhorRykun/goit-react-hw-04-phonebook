import PropTypes from 'prop-types';
import css from '../Contacts/ContactsList.module.css';

export const ContactsList = ({ contacts, filter, filtered, deleteItem }) => {
  let rendered = filter === '' ? contacts : filtered();
  return (
    <ul className={css.list}>
      {rendered.map(({ name, id, number }) => (
        <li className={css.item} key={id} id={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <button className={css.button__del} onClick={e => deleteItem(e)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
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
