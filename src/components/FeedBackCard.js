import React from "react";
import "./FeedBackCard.css";
const FeedBackCard = (props) => {
  function deleteFunction() {
    props.onCard(props.information);
  }
  return (
    <div className="feedback-Card">
      <p className="feedback-content">{props.information.content}</p>
      <p className="feedback-score">{props.information.score}</p>
      <span
        className="material-symbols-outlined feedback-close"
        onClick={deleteFunction}
      >
        close
      </span>
    </div>
  );
};

export default FeedBackCard;
