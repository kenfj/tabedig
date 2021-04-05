import Head from 'next/head'
import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title?: string
}

const siteTitle = 'Next.js + TypeScript Example'

const Layout = ({ children, title = 'default title' }: Props) => (
  <div className="page">
    <Head>
      <title>{title} | {siteTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header>
      <nav>
        <Link href="/" passHref>
          <a href="_">Home</a>
        </Link>
        {' | '}
        <Link href="/about" passHref>
          <a href="_">About</a>
        </Link>
        {' | '}
        <Link href="/users" passHref>
          <a href="_">Users List</a>
        </Link>
      </nav>
    </header>

    <main>
      {children}
    </main>

    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>

    <style jsx>{`
      .page {
        margin: 30px 50px;
      }
    `}</style>

    <style jsx global>{`
      body {
        background-color: floralwhite;
      }
    `}</style>
  </div>
)

export default Layout
