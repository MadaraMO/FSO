import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },

    {
      name: 'Using props to pass data',
      exercises: 7
    },

    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  const Header = () => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    )
  }

  const Part = (props) => {
    return (
      <div>
        <p>
          {props.part} {props.exercises}
        </p>
      </div>
    )
  }

  const Content = () => {
    return (
      <div>
        <Part part={part1.name} exercises={part1.exercises} />
        <Part part={part2.name} exercises={part2.exercises} />
        <Part part={part3.name} exercises={part3.exercises} />
      </div>
    )
  }

  const Total = () => {
    return (
      <div>
        <p>Number of exercises {part1.exercises} + {part2.exercises} + {part3.exercises}</p>
      </div>
    )

  }
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
