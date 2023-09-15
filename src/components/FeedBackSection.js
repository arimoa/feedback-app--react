import React from "react";
import FeedBackCard from "./FeedBackCard";

const FeedBackSection = (props) => {
  function cardToFeedBack(item) {
    props.onDelete(item);
  }
  return (
    <div className="container">
      {props.data.map((feedback) => (
        <FeedBackCard
          key={feedback.id}
          information={feedback}
          onCard={cardToFeedBack}
        />
      ))}
    </div>
  );
};

export default FeedBackSection;
