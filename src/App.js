import React, { useState, useEffect } from "react";
import InputSection from "./components/InputSection";
import FeedBackSection from "./components/FeedBackSection";
import AverageScoreSection from "./components/AverageScoreSection";
function App() {
  const INITIAL_FEEDBACKS = [
    { id: 1, content: "The App is greate.", score: "5" },
    { id: 2, content: "The support section works well.", score: "4" },
  ];
  const [feedbacks, setFeedbacks] = useState(INITIAL_FEEDBACKS);
  const [average, setAverage] = useState(0);
  function dataHandler(data) {
    setFeedbacks((prev) => [data, ...prev]);
  }
  function FeedBacktoApp(item) {
    setFeedbacks((prev) => prev.filter((num) => num !== item));
  }
  useEffect(() => {
    let sum = 0;
    if (feedbacks.length !== 0) {
      for (let i = 0; i < feedbacks.length; i++) {
        sum = sum + +feedbacks[i].score;
      }
      setAverage((prev) => (sum / feedbacks.length).toFixed(1));
    } else {
      setAverage((prev) => "-");
    }
  }, [feedbacks]);
  return (
    <React.Fragment>
      <InputSection onData={dataHandler} />
      <AverageScoreSection ave={average} />
      {feedbacks.length > 0 && (
        <FeedBackSection data={feedbacks} onDelete={FeedBacktoApp} />
      )}
    </React.Fragment>
  );
}

export default App;
