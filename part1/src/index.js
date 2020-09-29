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

// const All = ({all, counter}) => (
//   <>
//  <p>All: {all} {counter}</p>
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


// const Statistics = ({ statistics }) => (
//   <>
//   </>
// )



const App = () => {
  const feedback = 'Give feedback'
  const statistics = 'Statistics'

  const [count, setCount]  = useState(0)
  const countAll = () => setCount(count + 1)

  const [good, setGood] = useState(0)
  const increaseGood = () => setGood(good + 1)


  const [bad, setBad] = useState(0)
  const increaseBad = () => setBad(bad + 1)

  const [neutral, setNeutral] = useState(0)
  const increaseNeutral = () => setNeutral(neutral + 1)

// console.log(increaseGood)
// console.log(increaseBad)
// console.log(increaseNeutral)
// console.log(countAll)



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
      {/* <All counter={all}/>
      <Average />
      <Positive /> */}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))





