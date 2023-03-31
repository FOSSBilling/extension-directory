import React from 'react'
import Link from 'next/link'

import { Extension } from '../interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

type Props = {
  item: Extension
}

const ExtensionHeader = ({ item }: Props) => (
    <div className="flex bg-neutral-100 w-full flex-1 flex-col items-center justify-center px-20">
    <div className="grid grid-cols-7 gap-10 my-6">
      <div>
        <img src={item.icon_url} alt={`Icon for the ${item.name} extension`} className="h-32" />
      </div>
      <div className="col-span-6">
        <h1 className="text-4xl text-zinc-900 font-bold mb-2">{item.name}</h1>
        <p className="text-zinc-800 mb-4"><Link href="/publisher/" className="font-bold hover:underline">{item.author.name}</Link> (<a href={item.author.URL} className="text-blue-600 hover:text-blue-700 hover:underline" target="_blank">fossbilling.org</a>) | {item.version} | {item.license}</p>
        <p className="text-zinc-800 mb-4">{item.description}</p>

        {/* Download button */}
        <a href={item.download_url} target="_blank" type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
          <FontAwesomeIcon icon={ faDownload } className="w-5 h-5 mr-2 -ml-1" />
          Download
        </a>
      </div>
    </div>
  </div>
)

export default ExtensionHeader