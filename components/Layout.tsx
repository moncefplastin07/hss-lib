import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'


const Layout = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
    </header>
    <div className="text-center">
      {children}
    </div>
    <footer className="text-center mt-5">
      <hr />
      <span>مرحبا 👋</span>
    </footer>
  </div>
)

export default Layout
