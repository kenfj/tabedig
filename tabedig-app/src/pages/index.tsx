import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about" passHref>
        <a href="_">About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
