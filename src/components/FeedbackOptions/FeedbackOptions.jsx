import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.options}>
      {options.map(option => (
        <button
          type="button"
          data-name={option}
          className={css.btn}
          onClick={onLeaveFeedback}
          key={nanoid()}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
