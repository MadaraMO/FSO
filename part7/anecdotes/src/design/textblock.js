import styled from '@emotion/styled'
import { css } from '@styled-system/css'

const TextBlock = styled('div')(
    ({ size, align }) => css({
        fontSize: size,
        textAlign: align,
    })
)

export default TextBlock