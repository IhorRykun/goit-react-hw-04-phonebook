import css from '../feedback/feedback.module.css';
import PropTypes from 'prop-types';

export const ListFeedback = ({ good, netural, bad, total }) => {
  return (
    <ul className={css.list__text}>
      <li className={css.list__text__item}>
        <p>
          Good: <span className={css.span__text}>{good}</span>
        </p>
      </li>
      <li className={css.list__text__item}>
        <p>
          Neutral: <span className={css.span__text}>{netural}</span>
        </p>
      </li>
      <li className={css.list__text__item}>
        <p>
          Bad:<span className={css.span__text}>{bad}</span>
        </p>
      </li>
      <li className={css.list__text__item}>
        <p>
          Total:
          <span className={css.span__text__red}>{total}</span>
        </p>
      </li>
      <li className={css.list__text__item}>
        <p>
          Positive feedback:
          <span className={css.span__text__red}>
            {this.state.positiveFeedback}%
          </span>
        </p>
      </li>
    </ul>
  );
};

ListFeedback.propTypes = {
  good: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  natural: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};
