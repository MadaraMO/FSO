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
          {props.part}
        </p>
      </div>
    )
  }

  const Content = () => {
    return (
      <div>
        <Part part={parts} />
        {/* <Part part={parts[1].name} exercises={parts[1].exercises} />
        <Part part={parts[2].name} exercises={parts[2].exercises} /> */}
      </div>
    )
  }

  const Total = () => {
    return (
      <div>
        <p>Number of exercises {parts[0].exercises} + {parts[1].exercises} + {parts[2].exercises}</p>
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
