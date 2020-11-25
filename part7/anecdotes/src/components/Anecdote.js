
import React from 'react';

const Anecdote = ({  anecdote }) => {
 
    // const id = match.params.id
    // const anecdote = anecdotes.find(anecdote => anecdote.id === id)

    return (
        <div>
            <h5> Author: {anecdote.author} </h5>
            <p>{anecdote.content}</p>
            <p>has {anecdote.votes} votes</p>
            <p>Info: <a href={anecdote.info}>{anecdote.info}</a></p>
        </div>
    )
}

export default Anecdote;