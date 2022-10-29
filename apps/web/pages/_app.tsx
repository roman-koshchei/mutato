import type { AppProps } from 'next/app'
import '../styles/global.css'

const MutatoReactApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default MutatoReactApp