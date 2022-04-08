import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/globals.css"></link>
      </Head>
      <title>The best e-commerce</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
