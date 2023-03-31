import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { IBM_Plex_Sans } from 'next/font/google';

const PlexSans = IBM_Plex_Sans({ weight: "400" });

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'FOSSBilling Extensions' }: Props) => (
  <div className={PlexSans.className}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="container mx-auto">
      {children}
      <footer className="mt-auto bg-gray-100 py-4">
        <div className="container mx-auto">
        </div>
      </footer>
    </div>
  </div>
)

export default Layout
