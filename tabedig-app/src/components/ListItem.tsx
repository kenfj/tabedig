import Link from 'next/link'
import React from 'react'
import { User } from '../interfaces'

type Props = {
  data: User
}

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`} passHref>
    <a href="_">
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
