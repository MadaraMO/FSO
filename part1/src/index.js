import React, { useState } from 'react'
import ReactDOM from 'react-dom'


 const Header = ({feedback}) => (
  <>
  <h1>{feedback}</h1>
  </>
 )
 
 const Button = ({handleClick, text}) => (
   <>
   <button onClick={handleClick}>{text}</button>
   </>
 )

 const Statistics = ({statistics, count}) => (
   <>
   <h2>{statistics}</h2>
 {/* <p>Good: {count}</p>
   <p>Bad: {count}</p>
   <p>Neutral: {count}</p>
   <p>All:{count}</p>
   <p>Average: {count}</p>
   <p>Positive: {count}</p> */}
   </>
 )
  
 

const App = () => {
  const feedback = 'Give feedback'
  const statistics = 'Statistics' 
  // const [count, setCount]  = useState(0)

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // const increaseByOne = () => setGood(good + 1)
  // const decreaseByOne = () => setBad(bad - 1)
  // const doNothing = () => setNeutral(neutral)

  


  return (
    <>
        <Header feedback={feedback}/>
        <Button handleClick={increaseByOne} text='good'/>
        <Button handleClick={decreaseByOne} text='bad'/>
        <Button handleClick={doNothing} text='neutral'/>
        <Statistics statistics={statistics} 
        // count={}
        />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))





