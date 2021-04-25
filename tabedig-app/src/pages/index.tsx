import { Heading, Link, Text } from '@chakra-ui/layout'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home">
    <Heading as='h1' size='2xl' m='5'>Hello Next.js 👋</Heading>
    <Text fontSize='xl'>
      <Link href="/about" color='teal.500'>About</Link>
    </Text>
  </Layout>
)

export default IndexPage
