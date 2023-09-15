import "./AverageScoreSection.css";
const AverageScoreSection = (props) => {
  return (
    <div className="container average">The average score is {props.ave}</div>
  );
};

export default AverageScoreSection;
