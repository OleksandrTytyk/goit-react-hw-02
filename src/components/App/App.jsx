import { useState } from "react";
import "./App.css";
import Description from "../Description/Description.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />

      <Feedback feedback={feedback} />
    </>
  );
}

export default App;
