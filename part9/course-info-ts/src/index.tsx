import React from "react";
import ReactDOM from "react-dom";
import { CoursePart } from "./types";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Header: React.FC<{ name: string }> = ({ name }) => <h1> {name}</h1>;

const Part: React.FC<{ parts: CoursePart }> = ({ parts }) => {
  switch (parts.name) {
    case "Fundamentals":
      return (
        <div>
          <h2> {parts.name} </h2>
          <p>Exercises: {parts.exerciseCount}</p>
          <p>Description: {parts.description}</p>
        </div>
      );

    case "Using props to pass data":
      return (
        <div>
          <h2> {parts.name} </h2>
          <p>Exercises: {parts.exerciseCount}</p>
          <p>Group project count: {parts.groupProjectCount}</p>
        </div>
      );
    case "Deeper type usage":
      return (
        <div>
          <h2> {parts.name} </h2>
          <p>Exercises: {parts.exerciseCount}</p>
          <p>Description: {parts.description}</p>
          <p>Submission link: {parts.exerciseSubmissionLink}</p>
        </div>
      );
    case "This is the real deal":
      return (
        <div>
          <h2> {parts.name} </h2>
          <p>Exercises: {parts.exerciseCount}</p>
          <p>Description: {parts.description}</p>
          <p>Submission link: {parts.exerciseSubmissionLink}</p>
        </div>
      );
    default:
      return assertNever(parts);
  }
};

const Content: React.FC<{ parts: CoursePart[] }> = ({ parts }) => (
  <>
    {parts.map((part: CoursePart) => (
      <Part parts={part} key={part.name} />
    ))}
  </>
);

const Total: React.FC<{ parts: CoursePart[] }> = ({ parts }) => {
  const total = parts.reduce((tot, arr) => tot + arr.exerciseCount, 0);

  return <h4> Number of exercises: {total}</h4>;
};

const App: React.FC = () => {
  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    },
    {
      name: "This is the real deal",
      exerciseCount: 98,
      description: "Fire walk with me",
      exerciseSubmissionLink:
        "https://en.wikipedia.org/wiki/Twin_Peaks:_Fire_Walk_with_Me",
    },
  ];

  return (
    <div>
      <Header name={courseName} />
      <Content parts={courseParts} />
      <Total parts={courseParts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
