import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../../components/Layout'
import List from '../../components/List'
import { User } from '../../interfaces'
import { sampleUserData } from '../../utils/sample-data'

type Props = {
  items: User[]
}

const UsersIndexPage = ({ items }: Props) => (
  <Layout title="Users List">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/" passHref>
        <a href="_">Go home</a>
      </Link>
    </p>
  </Layout>
)

export default UsersIndexPage

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData
  return { props: { items } }
}
