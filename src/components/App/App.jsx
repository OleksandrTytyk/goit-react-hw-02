import { useEffect, useState } from "react";
import "./App.css";
import Description from "../Description/Description.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Notification from "../Notification/Notification.jsx";

function App() {
  const feedbackStats = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const stringifiedFeedback = localStorage.getItem("feedbackStats");

    if (!stringifiedFeedback) return feedbackStats;

    const parsedFeedback = JSON.parse(stringifiedFeedback);

    return parsedFeedback;
  });

  useEffect(() => {
    localStorage.setItem("feedbackStats", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
