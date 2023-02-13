import PropTypes from 'prop-types';
import { InputForm } from './Filter.styled';

export const Filters = ({ filter, onInput }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <InputForm name="filter" value={filter} onChange={e => onInput(e)} />
    </div>
  );
};

Filters.propTypes = {
  onInput: PropTypes.func,
};
