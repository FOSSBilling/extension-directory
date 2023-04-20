import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'FOSSBilling Extensions' }: Props) => (
  <div className="bg-slate-50 p-6 sm:p-10 h-max">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className="mx-48">
        {children}
    </div>
  </div>
)

export default Layout