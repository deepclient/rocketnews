import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&family=Work+Sans:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <body className="w-screen h-screen bg-[url('../assets/read_news.jpg')] bg-no-repeat bg-cover">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}