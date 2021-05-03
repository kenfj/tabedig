import { Box, Link } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title?: string
}

const siteTitle = "Tabedig"

const Layout = ({ children, title }: Props) => (
  <Box pt={8}>
    <Head>
      <title>{title} | {siteTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡️</text></svg>" />
    </Head>

    <header>
      <Box pl={8}>
        <nav>
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
          {/* {" | "}
          <NextLink href="/users" passHref>
            <Link>Users List</Link>
          </NextLink> */}
          {" | "}
          <NextLink href="/about" passHref>
            <Link>About</Link>
          </NextLink>
        </nav>
      </Box>
    </header>

    <main>
      {children}
    </main>

    <footer>
      <Box mt={8}>
        <hr />
      </Box>
    </footer>
  </Box>
)

export default Layout
