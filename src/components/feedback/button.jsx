import css from '../feedback/feedback.module.css';
export const Button = (goodHendler, neturalHendler, badHendler) => {
  <ul className={css.list}>
    <li>
      <button onClick={goodHendler} className={css.button}>
        Good
      </button>
    </li>
    <li>
      <button onClick={neturalHendler} className={css.button}>
        Neutral
      </button>
    </li>
    <li>
      <button onClick={badHendler} className={css.button}>
        Bad
      </button>
    </li>
  </ul>;
};
