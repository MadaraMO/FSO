import styled from '@emotion/styled'
import { css } from '@styled-system/css'


const Section = styled('section')(
    ({ type, justify, align, p }) => css({
        display: 'flex',
        flexDirection: type,
        justifyContent: justify,
        alignItems: align,
        p: p,
    })
)

export default Section