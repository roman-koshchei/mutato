import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Navbar } from '../components'
import '../styles/global.css'

const MutatoReactApp = ({ Component, pageProps }: AppProps) => <>
  <Head>
    <meta name='description' content="Mutato | mutable react state" />
    <link rel='icon' href='icon.svg' />
    <title>MUTATO | Mutable react state</title>
  </Head>

  <div className='container'>
    <Navbar />

    <Component {...pageProps} />
  </div>
</>

export default MutatoReactApp