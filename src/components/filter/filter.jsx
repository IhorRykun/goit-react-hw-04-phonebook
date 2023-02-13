import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export const Filterds = ({filter, onInput}) => {
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

Filterds.propTypes = {
  onInput: PropTypes.func,
};
