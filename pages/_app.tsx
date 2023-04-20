import type { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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