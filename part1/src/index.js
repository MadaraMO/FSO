import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Headline = ({ title }) => (
  <>
    <h2>{title}</h2>
  </>
)

const Button = ({ handleClick, text }) => (
  <>
    <button onClick={handleClick}>{text}</button>
  </>
)

const Display = ({ counter }) => (
  <>
    {counter}
  </>
)
const Good = ({counter}) => (
  <>
    <p>Good: {counter}</p>
    <Display />
  </>
)

const Bad = ({counter}) => (
  <>
  <p>Bad: {counter}</p>
  <Display />
  </>
)

const Neutral = ({counter}) => (
  <>
 <p>Neutral: {counter}</p>
  <Display />
  </>
)


// const Statistics = ({ statistics }) => (
//   <>
//     <h2>{statistics}</h2>
//     {/*
   
//    <p>All:{count}</p>
//    <p>Average: {count}</p>
//    <p>Positive: {count}</p> */}
//   </>
// )



const App = () => {
  const feedback = 'Give feedback'
  const statistics = 'Statistics'
  // const [count, setCount]  = useState(0)

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseByOne = () => setGood(good + 1)
  const decreaseByOne = () => setBad(bad - 1)
  const doNothing = () => setNeutral(neutral)




  return (
    <>
      <Headline title={feedback} />
      <Button handleClick={increaseByOne} text='good' />
      <Button handleClick={decreaseByOne} text='bad' />
      <Button handleClick={doNothing} text='neutral' />
      <Headline title={statistics} />
      <Good counter={good} />
      <Bad counter={bad} />
      <Neutral counter={neutral} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))





