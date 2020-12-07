import styled from '@emotion/styled'
import { css } from '@styled-system/css'

const Space = styled('div')(
    ({ padding, px, py }) => css({
        padding: padding,
        paddingX: px,
        paddingY: py,
    })
)
export default Space