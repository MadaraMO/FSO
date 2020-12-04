
import React from 'react';

import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import Section from '../design/Section'

const Joke = styled('div')(
    css({
        bg: 'aquamarine',
        color: 'orchid'
    })
)

const Anecdote = ({ anecdote }) => {

    return (
        <Section type='column' align='center'>

            <h2> Author: {anecdote.author} </h2>
            <Joke>{anecdote.content}</Joke>
            <p>has {anecdote.votes} votes</p>
            <p>Info: <a href={anecdote.info}>{anecdote.info}</a></p>
        </Section>
    )
}

export default Anecdote;