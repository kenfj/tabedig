import { Box, Heading, Link, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/layout'
import NextLink from 'next/link'
import Layout from '../components/Layout'

// http://gimite.hatenablog.com/entry/20110108/1294495863
const maxWidthCenter = {
  w: "100%",
  maxW: "600px",
  ml: "auto",
  mr: "auto",
}

const boxProps = {
  mt: 4,
  p: 8,
  w: "100%",
  shadow: "md",
  borderWidth: "1px",
}

const AboutPage = () => (
  <Layout title="About">
    <VStack spacing={8} {...maxWidthCenter}>
      <Box {...boxProps}>
        <Heading as="h1" mb={4}>About</Heading>
        <Text>食べログで少し気になった部分を掘り返してみました。</Text>
        <Text>&#x1F477; Alpha版 &#x1F6A7;</Text>
      </Box>

      <Box {...boxProps}>
        <Heading as="h1" mb={4}>Technologies</Heading>
        <UnorderedList>
          <ListItem>React</ListItem>
          <ListItem>Next.js</ListItem>
          <ListItem>TypeScript</ListItem>
          <ListItem>Chakra UI</ListItem>
          <ListItem>Google Charts</ListItem>
        </UnorderedList>
      </Box>

      <Box>
        <NextLink href="/" passHref>
          <Link>&#x1f3e0; Go home</Link>
        </NextLink>
      </Box>
    </VStack>
  </Layout>
)

export default AboutPage
