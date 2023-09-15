import React, { useState } from "react";
import "./InputSection.css";
import Score from "./Scores";

const InputSection = (props) => {
  const [content, setContent] = useState("");
  const [score, setScore] = useState("");

  function submitHandler(event) {
    if (content.trim() === "") {
      setContent((prev) => "");
      setScore((prev) => "");
      return alert("You should add a text as a content");
    }
    if (score === "") {
      setContent((prev) => "");
      setScore((prev) => "");
      return alert("You should choose an score");
    }
    setContent((prev) => "");
    setScore((prev) => "");
    props.onData({ id: Math.random(), content: content, score: score });
  }
  function scoreLifter(grant) {
    setScore((prev) => grant.current);
  }

  return (
    <div className="container">
      <label>Enter your Feedback:</label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent((prev) => e.target.value)}
      ></input>
      <label>Select your Feedback score:</label>
      <Score onScore={scoreLifter} />
      <button className="submit-btn" type="submit" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};

export default InputSection;
