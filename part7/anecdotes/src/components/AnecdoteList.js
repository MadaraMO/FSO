import React from 'react'
import { Link } from 'react-router-dom'

import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import Section from '../design/section'

const List = styled('div')(
    css({
        listStyleType: 'none',
    }))
    

const AnecdoteList = ({ anecdotes }) => {

    return (
        <Section type='column' align='center'>
            <h2>Anecdotes</h2>
            <List>
                {anecdotes.map(anecdote =>
                    <li key={anecdote.id} >
                        <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
                    </li>
                )}
            </List>
        </Section>
    )
}

export default AnecdoteList