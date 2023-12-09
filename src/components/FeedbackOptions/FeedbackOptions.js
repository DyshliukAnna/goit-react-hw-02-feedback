import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, clickFeedback }) => {
  return options.map(option => {
    return (
      <button
        type="button"
        className={css.button}
        key={option}
        onClick={() => clickFeedback(option)}
      >
        {option}
      </button>
    );
  });
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  clickFeedback: PropTypes.func.isRequired,
};
