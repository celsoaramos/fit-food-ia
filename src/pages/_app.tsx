import '@/styles/globals.css'

import type { Session } from 'next-auth'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <>
      <Head>
        <title>Desafio Imersão IA</title>
      </Head>
        <div className="w-full h-screen flex justify-center items-center overflow-hidden bg-white relative">
          <div className="flex flex-col justify-center items-center w-full h-screen text-white text-base md:text-l">
            <Component {...pageProps} />
          </div>
        </div>
    </>
  )
}
