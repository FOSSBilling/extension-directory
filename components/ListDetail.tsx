import * as React from 'react'

import { Extension } from '../interfaces'

type ListDetailProps = {
  item: Extension
}

const ListDetail = ({ item: ext }: ListDetailProps) => (
  <div className="bg-white p-4 rounded shadow">
    <h1 className="text-3xl font-bold mb-2">Details for {ext.name}</h1>
    <p>{ext.description}</p>
    <p><strong>Icon:</strong><img src={ext.icon_url} alt={`${ext.name} logo`} width="64" height="64" /></p>
    <p><strong>ID:</strong> {ext.id}</p>
    <p><strong>Author:</strong> <a href={ext.author.URL} className="text-blue-500 hover:underline">{ext.author.name}</a></p>
    <p><strong>Version:</strong> {ext.version}</p>
    <p><strong>License:</strong> {ext.license}</p>
    <p><strong>Download URL:</strong> <a href={ext.download_url} className="text-blue-500 hover:underline">{ext.download_url}</a></p>
  </div>
)

export default ListDetail
