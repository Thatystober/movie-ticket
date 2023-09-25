import Layout from '@/layouts/RootLayout'
import { AppProps } from 'next/app'
 
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
