import { Global, css } from '@emotion/react'

// ar styled arī var?

export default function GlobalStyle({ children }) {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
        `}
      />
      {children}
    </>
  )
}