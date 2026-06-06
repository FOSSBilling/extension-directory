import type { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';

import '../styles/globals.css'
import '../styles/github-markdown.css'

export default function ExtensionStore({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}