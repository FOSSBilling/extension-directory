import React from 'react'
import Link from 'next/link'

import { Extension } from '../interfaces'

type Props = {
  data: Extension
}

const ExtensionCard = ({ data }: Props) => (
  <div>
    <Link href={`/extension/${data.id}`} className="block bg-zinc-800 max-w-sm p-6 border border-zinc-700 rounded-lg shadow hover:bg-zinc-700">
      <h5 className="mb-2 text-white text-2xl font-bold tracking-tight">{ data.name }</h5>
      <p className="font-normal text-zinc-400">{ data.description }</p>

      <hr className='h-px my-4 border-0 bg-zinc-600'/>
      
      <div className="font-medium text-white col-span-2">
        <p>{ data.author.name }</p>
        <p className="text-sm text-zinc-400">{ data.license }</p>
      </div>
    </Link>
  </div>
)

export default ExtensionCard