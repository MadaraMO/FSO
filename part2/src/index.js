import React from 'react'
import ReactDOM from 'react-dom'



const Header = ({ course }) => (
  <h1> {course} </h1>
)


const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
)

const Total = ({ parts }) => { 

  const total = parts.reduce((tot, arr) =>
     tot + arr.exercises, 0)

  return (
<>
  <h4> Number of exercises: {total}</h4>
</>
  )
}



const Content = ({ parts }) => {

  return (
    <>
      {parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} key={part.id} />
      ))}
    </>
  )
}


const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )

}

const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },

        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },

        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]



  return (
  <>
    {courses.map(course =>
      <Course course={course} key={course.id}/>
      )}
      </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))