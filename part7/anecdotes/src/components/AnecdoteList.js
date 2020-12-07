import React from 'react'
import { Link } from 'react-router-dom'

import Section from '../design/Section'


const AnecdoteList = ({ anecdotes }) => {

    return (
        <Section type='column' align='center'>
            <h2>Anecdotes</h2>
            
            <ol>
                {anecdotes.map(anecdote =>
                    <li key={anecdote.id} >
                        <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
                    </li>
                )}
            </ol>
        </Section>
    )
}

export default AnecdoteList