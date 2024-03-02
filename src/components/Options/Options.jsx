import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={css.optionsBtn}>
      <button
        onClick={() => {
          updateFeedback("good");
        }}
        className={css.goodBtn}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
        className={css.neutralBtn}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
        className={css.badBtn}
      >
        Bad
      </button>
      {totalFeedback > 0 ? (
        <button onClick={resetFeedback} className={css.resetBtn}>
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default Options;
