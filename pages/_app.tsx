import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'

const MyApp = ({Component, pageProps}: AppProps) =>{

  <Head>
    <title>One Roof Market</title>
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400;1,500&display=swap" rel="stylesheet" />
  </Head>

  return <Component {...pageProps} />
}

export default MyApp
