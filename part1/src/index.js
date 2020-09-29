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

const Statistic = ({text, value}) => (
  <>
  <p>{text} {value}</p>
  </>
)

const Statistics = ({good, bad, neutral}) => {
   const total = good + bad + neutral
   const average = (good - bad) / total
   const positive = (good / total) * 100 + '%'

   return (
       <>
  <Statistic text='Good:' value={good}/>
  <Statistic text='Bad:' value={bad}/>
  <Statistic text='Neutral:' value={neutral}/>
  <Statistic text='All:' value={total}/>
  <Statistic text='Average:' value={average}/>
  <Statistic text='Positive:' value={positive}/>
  </>
   )

}
 


// const Good = ({good, counter}) => (
//   <>
//     <p>Good: {good} {counter}</p>
//   </>
// )

// const Bad = ({bad, counter}) => (
//   <>
//   <p>Bad: {bad} {counter}</p>
//   </>
// )

// const Neutral = ({neutral, counter}) => (
//   <>
//  <p>Neutral: {neutral} {counter}</p>
//   </>
// )

// const All = ({countAll, counter}) => (
 
//   <>
//  <p>All: {countAll} {counter}</p>
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


 





  return (
    
    <>
      <Headline title={feedback} />
      <Button handleClick={increaseGood} text='Good' />
      <Button handleClick={increaseBad} text='Bad' />
      <Button handleClick={increaseNeutral} text='Neutral' />
      <Headline title={statistics} />
      <Statistics good={good} bad={bad} neutral={neutral}/>
      {/* <Bad counter={bad} />
      <Neutral counter={neutral} />
      <All counter={countAll} /> */}
      {/* <Average />
      <Positive />  */}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))





