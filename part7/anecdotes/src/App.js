import React, { useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Menu from './components/Menu'
import AnecdoteList from './components/AnecdoteList'
import Anecdote from './components/Anecdote'
import About from './components/About'
import CreateNew from './components/CreateNew'
import Footer from './components/Footer'

import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import Layout from './design/Layout'
import GlobalStyle from './GlobalStyle'


const Title = styled.h1(
  css({
    fontSize: [4, 5, 6],
    color: 'dimGrey',
    py: 5,
    display: 'flex',
    justifyContent: 'center',
    textTransform: 'uppercase',
    boxShadow: '0 1px 4px rgba(0, 0, 0, .125)',
  }))


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
  const match = useRouteMatch('/anecdotes/:id')

  const anecdote = match
    ? anecdotes.find(a => a.id === match.params.id)
    : null

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`a new anecdote ${anecdote.content} created!`)
    setTimeout(() => setNotification(''), 10000)
  }

  return (

    <GlobalStyle>
      <Layout >
        <Menu />
        <Title>Software anecdotes</Title>
        <p>{notification}</p>
        <Switch>
          <Route exact path="/" >
            <AnecdoteList anecdotes={anecdotes} />
          </Route>
          <Route path="/anecdotes/:id" >
            <Anecdote anecdote={anecdote} />
          </Route>
          <Route path="/create" >
            <CreateNew addNew={addNew} />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
        </Switch>
        <Footer />
      </Layout >
    </GlobalStyle>

  )
}

export default App;