import React, { useEffect, useRef } from "react";
import "./Scores.css";

const Scores = (props) => {
  const score = useRef("");
  function scoreHandler(e) {
    score.current = e.target.innerHTML;
    props.onScore(score);
  }
  useEffect(() => {
    score.current = "";
  }, [props.onScore]);

  return (
    <div className="scores-container">
      <button
        style={{ backgroundColor: score.current === "1" ? "#cc8e35" : null }}
        type="button"
        onClick={scoreHandler}
      >
        1
      </button>
      <button
        style={{ backgroundColor: score.current === "2" ? "#cc8e35" : null }}
        type="button"
        onClick={scoreHandler}
      >
        2
      </button>
      <button
        style={{ backgroundColor: score.current === "3" ? "#cc8e35" : null }}
        type="button"
        onClick={scoreHandler}
      >
        3
      </button>
      <button
        style={{ backgroundColor: score.current === "4" ? "#cc8e35" : null }}
        type="button"
        onClick={scoreHandler}
      >
        4
      </button>
      <button
        style={{ backgroundColor: score.current === "5" ? "#cc8e35" : null }}
        type="button"
        onClick={scoreHandler}
      >
        5
      </button>
    </div>
  );
};

export default Scores;
