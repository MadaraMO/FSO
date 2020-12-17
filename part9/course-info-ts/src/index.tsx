import React from "react";
import ReactDOM from "react-dom";

const Header: React.FC<{ name: string }> = ({ name }) => <h1> {name}</h1>;

const Part: React.FC<{ name: string; exercises: number }> = ({
  name,
  exercises,
}) => (
  <p>
    {name} {exercises}
  </p>
);

interface CoursePart {
  name: string;
  exerciseCount: number;
}

const Content: React.FC<{ parts: CoursePart[] }> = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part name={part.name} exercises={part.exerciseCount} key={part.name} />
    ))}
  </>
);

const Total: React.FC<{ parts: CoursePart[] }> = ({ parts }) => {
  const total = parts.reduce((tot, arr) => tot + arr.exerciseCount, 0);

  return <h4> Number of exercises: {total}</h4>;
};

const App: React.FC = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
    },
  ];

  return (
    <div>
      <Header name={courseName} />
      <Content parts={courseParts} />
      <Total parts={courseParts}/>
    </div> 
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
