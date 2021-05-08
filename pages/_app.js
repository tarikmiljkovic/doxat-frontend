import "../styles/globals.css";

import { ThemeProvider } from "emotion-theming";
import GlobalStyles from "../components/GlobalStyles";
import { SiteProvider } from '../contexts/SiteContext'
// import { redirect } from "next/dist/next-server/server/api-utils";

const theme = {
  colors: {
    primary: "#333",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SiteProvider>
          <Component {...pageProps} />
        </SiteProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
