import React from 'react'
import { Link } from 'react-router-dom'

import styled from '@emotion/styled'
import { css } from '@styled-system/css'

const Navigation = styled('div')(
    ({ justify }) => css({
        display: 'flex',
        position: 'fixed',
        bg: '#2F2B2A',
        justifyContent: justify,
        fontFamily: 'helvetica',
        alignItems: 'center',
        minWidth: '100vw',
        height: '50px',
        a: {
            color: 'white',
            p: 2,
            textDecoration: 'none',
            textTransform: 'uppercase',
            '&:hover': {
                color: 'hotpink',
            }
        },

    })
)

const Menu = () => {

    return (
        <Navigation justify='space-around'>
            <Link to='/'>Anecdotes</Link>
            <Link to='/about'>About</Link>
            <Link to='/create'>Create</Link>
        </Navigation>
    )
}



export default Menu