import React from 'react';
import PropTypes from 'prop-types';
import css from '../filter/filter.module.css';

export class Filters extends React.Component {
  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <input
          className={css.input}
          name="filter"
          value={this.props.filter}
          onChange={e => this.props.onInput(e)}
        />
      </div>
    );
  }
}

Filters.propTypes = {
  onInput: PropTypes.func,
};
