import styled from '@emotion/styled'
import { css } from '@styled-system/css'

const Layout = styled('div')(
    css({
        display: 'flex',
        flexDirection: 'column',
        m: 0,
        p: 0,
        bg: 'ghostWhite',
        fontFamily: 'helvetica',
        minHeight: '100vh',
        minWidth: '100vw',
        a: {
            color: 'steelBlue',
            textDecoration: 'none',
            '&:hover': {
                bg: 'aquamarine',
                lineHeight: 0.2,
            }
        },
        h2: {
            textAlign: 'center',
            fontSize: [2, 3, 4],
            color: 'grey',
            textTransform: 'lowercase',
        },
    }))

export default Layout