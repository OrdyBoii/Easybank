import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(
      ctx
    );
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-gb">
        <Head>
          <meta
            name="robots"
            content="index, follow"
          />
          <meta
            name="keywords"
            content="Test, Easybank, React, Nextjs, Github, Frontend Mentor"
          />
          <link
            rel="shortcut icon"
            href="/favicon.ico"
            type="image/x-icon"
          />
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
