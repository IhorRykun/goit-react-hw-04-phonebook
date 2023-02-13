import PropTypes from 'prop-types';
import css from './Filter/Filter.module.css';

export const Filters = ({filter, onInput}) => {
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

Filters.propTypes = {
  onInput: PropTypes.func,
};
