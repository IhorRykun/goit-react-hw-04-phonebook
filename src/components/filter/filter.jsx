import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export const Filter = ({filter, onInput}) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        name="filter"
        value={filter}
        onChange={e => onInput(e)}
      />
    </div>
  );
};

Filter.propTypes = {
  onInput: PropTypes.func,
};
