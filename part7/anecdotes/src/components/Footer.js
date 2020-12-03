import React from 'react'

import styled from '@emotion/styled'
import css from '@styled-system/css'

import Space from '../design/space'
import TextBlock from '../design/textblock'



const FooterBlock = styled('div')(
  css({
    display: 'flex',
    justifyContent: 'center',
    a: {
      color: 'SteelBlue',
      '&: hover': {
        bg: 'Aquamarine',
      },
      textDecoration: 'none',
      lineHeight: 1,
    },
    borderTop: '1px solid rgba(0, 0, 0, .125)',

  })
)


const Footer = () => (
  <>
    <Space padding={80} />
    <FooterBlock>
      <TextBlock size='0.75em'>
        <Space padding={10} />
        Anecdote app for <a href='https://courses.helsinki.fi/fi/tkt21009'>Full Stack -websovelluskehitys</a>.
        See <a href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2019/routed-anecdotes/blob/master/src/App.js</a> for the source code.
      </TextBlock>
    </FooterBlock>
    <Space padding={20} />
  </>
)

export default Footer