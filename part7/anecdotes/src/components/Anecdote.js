
import React from 'react';

const Anecdote = ({  anecdote }) => {

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