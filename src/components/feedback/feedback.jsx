import css from '../feedback/feedback.module.css';
import { ListButton } from './listButton';
import { useState } from 'react';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [netural, setNatural] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const goodHendler = () => {
    setGood(good + 1);
    totalHendler();
  };

  const neturalHendler = () => {
    setNatural(netural + 1);
    totalHendler();
  };

  const badHendler = () => {
    setBad(bad + 1);
    totalHendler();
  };

  const totalHendler = () => {
    setTotal(total + 1);
    positiveFeedbackHandler();
  };

  const positiveFeedbackHandler = () => {
    return Math.round((good / total) * 100);
  };
  return (
    <div className={css.container}>
      <h2 className={css.title}>Please leave feedback</h2>
      <h3 className={css.title__text}>Statistics</h3>
      <ListButton
        goodHendler={goodHendler}
        neturalHendler={neturalHendler}
        badHendler={badHendler}
      />
      {good || bad || netural || total ? (
        <ul className={css.list__text}>
          <li className={css.list__text__item}>
            <p>
              Good: <span className={css.span__text}>{good}</span>
            </p>
          </li>
          <li className={css.list__text__item}>
            <p>
              Neutral:
              <span className={css.span__text}>{netural}</span>
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
                {positiveFeedbackHandler()}%
              </span>
            </p>
          </li>
        </ul>
      ) : (
        <p className={css.text__message}>There is no feedback</p>
      )}
    </div>
  );
};
