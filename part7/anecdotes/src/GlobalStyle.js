import { Global, css } from '@emotion/react'

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