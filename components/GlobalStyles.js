import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,300&display=swap");
        body {
          font-family: "Open Sans", sans-serif;
          box-sizing: border-box !important;

        }
        b,
        strong {
          font-weight: 600;
        }
      `}
    />
  </>
);

export default GlobalStyles;