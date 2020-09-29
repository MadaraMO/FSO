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


const Good = ({good, counter}) => (
  <>
    <p>Good: {good} {counter}</p>
  </>
)

const Bad = ({bad, counter}) => (
  <>
  <p>Bad: {bad} {counter}</p>
  </>
)

const Neutral = ({neutral, counter}) => (
  <>
 <p>Neutral: {neutral} {counter}</p>
  </>
)

// const All = ({count, counter}) => (
//   <>
//  <p>All: {count} {counter}</p>
//   </>
// )

// const Average = ({average, counter}) => (
//   <>
//  <p>Average: {average} {counter}</p>
//   </>
// )

// const Positive = ({positive, counter}) => (
//   <>
//  <p>Positive: {positive} {counter}</p>
//   </>
// )




const App = () => {
  const feedback = 'Give feedback'
  const statistics = 'Statistics'


  const [good, setGood] = useState(0)
  const increaseGood = () => setGood(good + 1)

  const [bad, setBad] = useState(0)
  const increaseBad = () => setBad(bad + 1)

  const [neutral, setNeutral] = useState(0)
  const increaseNeutral = () => setNeutral(neutral + 1)


  // const [count, setCount]  = useState(0)
  // const countAll = () => setCount(count + 1)





  return (
    <>
      <Headline title={feedback} />
      <Button handleClick={increaseGood} text='good' />
      <Button handleClick={increaseBad} text='bad' />
      <Button handleClick={increaseNeutral} text='neutral' />
      <Headline title={statistics} />
      <Good counter={good} />
      <Bad counter={bad} />
      <Neutral counter={neutral} />
      {/* <All counter={countAll}/> */}
      {/* <Average />
      <Positive />  */}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))





