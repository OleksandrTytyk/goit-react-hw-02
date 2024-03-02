import css from "./Feedback.module.css";

const Feedback = ({ feedback: { good, neutral, bad }, total, positive }) => {
  return (
    <ul className={css.feedbackValues}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
};

export default Feedback;
