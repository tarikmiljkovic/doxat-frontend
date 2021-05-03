import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400,600;700&display=swap");
        body {
          font-family: "Open Sans", sans-serif;
          box-sizing: border-box;
        }
        b, strong {
          font-weight: 600;
        }
      `}
    />
  </>
);

export default GlobalStyles;