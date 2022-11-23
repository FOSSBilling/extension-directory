import * as React from 'react'

import { Extension } from '../interfaces'

type ListDetailProps = {
  item: Extension
}

const ListDetail = ({ item: ext }: ListDetailProps) => (
  <div>
    <h1>Detail for {ext.name} (WIP)</h1>
    <p>ID: {ext.id}</p>
    <p>Author: <a href={ext.author.URL}>{ext.author.name}</a></p>
  </div>
)

export default ListDetail
