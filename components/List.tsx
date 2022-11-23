import * as React from 'react'
import ExtensionCard from './ExtensionCard'
import { Extension } from '../interfaces'

type Props = {
  items: Extension[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ExtensionCard data={item} />
      </li>
    ))}
  </ul>
)

export default List