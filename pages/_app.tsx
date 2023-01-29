import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import { GlobalContextProvider } from '../contexts/GlobalContext'
import { useEffect } from 'react'
import { useGlobalContext } from '../contexts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <ThemeProvider attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </GlobalContextProvider>
  )
}
