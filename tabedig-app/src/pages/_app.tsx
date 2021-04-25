import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from 'next/app'

// https://nextjs.org/docs/basic-features/typescript#custom-app
// https://chakra-ui.com/docs/getting-started#nextjs
// https://zenn.dev/catnose99/articles/2169dae14b58b6

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
