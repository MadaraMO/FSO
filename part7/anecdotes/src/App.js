import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route
  // useParams,
  // useRouteMatch
} from 'react-router-dom'
import Menu from './components/Menu'
import AnecdoteList from './components/AnecdoteList'
import Anecdote from './components/Anecdote'
import About from './components/About'
import CreateNew from './components/CreateNew'
import Footer from './components/Footer'


const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])
  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`a new anecdote ${anecdote.content} created!`)
    setTimeout(() => setNotification(''), 10000)
  }


// AR useRouteMatch MAN NESANĀCA, TĀPĒC NOŠPIKOJU

  // const match = useRouteMatch()
  // const anecdote = match
  //   ? anecdotes.find(anecdote => anecdote.id === match.params.id)
  //   : null


  return (
    <div>
      <h1>Software anecdotes</h1>
      <Router>
        <Menu />
        <p>{notification}</p>
        <Switch>
          <Route path="/" exact render={() => <AnecdoteList anecdotes={anecdotes} />} />
          <Route path="/anecdotes/:id" render={({ match }) => <Anecdote match={match} anecdotes={anecdotes} />} />
          <Route path="/create" render={({ history }) => <CreateNew history={history} addNew={addNew} />} />
          <Route path="/about" render={() => <About />} />
        </Switch>
      </Router>
      <Footer />
    </div >
  )
}

export default App;
