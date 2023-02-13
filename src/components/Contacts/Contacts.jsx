import PropTypes from 'prop-types';
import css from '../../components/Contacts/Contacts.module.css';

export const Contacts = ({ contacts, filter, filtered, deleteItem }) => {
  let rendered = filter === '' ? contacts : filtered();
  return (
    <ul className={css.list}>
      {rendered.map(({ name, id, number }) => (
        <li className={css.item} key={id} id={id}>
          <span className={css.name}>{name}: </span>
          <span className={css.number}>{number}</span>
          <button className={css.button__del} onClick={e => deleteItem(e)}>
            delete
          </button>
        </li>
      ))}
    </ul>
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
