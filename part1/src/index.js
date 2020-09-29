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
  <tr>
  <td>{text}</td>
  <td> {value}</td>
  </tr>
)

const Statistics = ({good, bad, neutral}) => {

  const total = good + bad + neutral
  if(total === 0) {
    return (
      <p>No feedback given</p>
    )
  }
   
   const average = (good - bad) / total
   const positive = (good / total) * 100 + ' %'

   return (
       <table>
           <tbody>
  <Statistic text='Good:' value={good}/>
  <Statistic text='Bad:' value={bad}/>
  <Statistic text='Neutral:' value={neutral}/>
  <Statistic text='All:' value={total}/>
  <Statistic text='Average:' value={average}/>
  <Statistic text='Positive:' value={positive}/>
  </tbody>
  </table>
   )

}
 


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
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))





