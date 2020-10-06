import React from 'react'
import ReactDOM from 'react-dom'



const Header = ({ name }) => (
  <h2> {name} </h2>
)


const Part = ({ part }) => {

  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}



// const Total = ({parts}) => {
// const total = parts.reduce((tot, arr) =>
// tot + arr.exercises, 0)
//   return (
//     <h4> Number of exercises: {total}</h4>
//   )
// }



const Content = ({ parts }) => {
  
  const total = parts.reduce((tot, arr) =>
    tot + arr.exercises, 0)

  return (
    <>
      {
        parts.map(part =>
          <Part part={part} key={part.id} />
        )}
      {/* {parts.map(part => 
      <Total part={part.exercises} key={part.id} />
      )} */}
      <h4> Number of exercises: {total}</h4>

    </>
  )
}


const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
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
      <h1>Web Development Curriculum</h1>
      {courses.map(course =>
        <Course course={course} key={course.id} />
      )}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))