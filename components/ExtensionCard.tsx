import React from 'react'
import Link from 'next/link'

import { Extension } from '../interfaces'

type Props = {
  data: Extension
}

const ExtensionCard = ({ data }: Props) => (
  (<a href={`/extension/${data.id}`}
      className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
    >
      <h3 className="text-2xl font-bold">{data.name}</h3>
      <p className="mt-4 text-xl">
      {data.description}
      </p>
      <hr className='mt-2 mb-2'/>
      <p className='text-center text-gray-800 hover:text-gray-800'>{data.version} - {data.license}<br />{data.author.name}</p>
    </a>)
)

export default ExtensionCard