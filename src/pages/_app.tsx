import Head from 'next/head';
// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { InitTheme } from '../styles/Theme';
import ResetCss from '../styles/ResetCss';
import Header from 'src/components/GGHeader';
import Footer from 'src/components/GGFooter';

const App = ({ Component, pageProps }: AppProps) => {
  
  return (
    <>
      <Head>
        <title>GeeGee</title>
        <meta name="description" content="GeeGee plaform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/sgx1eot.css"></link>
      </Head>
      <ThemeProvider theme={InitTheme}>
        <ResetCss theme={InitTheme()} />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
};

export default App;
