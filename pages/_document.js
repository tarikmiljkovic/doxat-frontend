import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Doxat</title>

          <meta name="description" content="Doxat Arhitektonski Studio" />
          <meta name="author" content="Tarik Miljkovic" />

          <meta property="og:url" content="https://doxat.ba" />
          <meta property="og:site_name" content="Doxat Arhitektonski Studio" />
          <meta
            name="keywords"
            content="arhitekta sarajevo arhitecture arhitektura doxat bih bosnia building construction village city facade"
          />

          {/* <meta property="og:locale" content="bs_BA" /> */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Doxat Arhitektonski Studio" />
          <meta name="twitter:card" content="Doxat Arhitektonski Studio" />
          <meta name="twitter:title" content="Doxat Arhitektonski Studio" />

          <meta property="og:title" content="Doxat Arhitektonski Studio" />
          <meta property="og:site_name" content="Doxat Arhitektonski Studio" />
          <meta
            property="og:description"
            content="Doxat Arhitektonski Studio"
          />
          <meta property="og:image" content="../public/logo.png" />
          <meta property="og:url" content="http://doxat.ba" />

          <link rel="icon" href="favicon.ico" />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="favicons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="favicons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="favicons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="favicons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="favicons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="favicons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="favicons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="favicons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="favicons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="favicons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="favicons/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="favicons/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
