import React from 'react'

import { Extension } from '../interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

type Props = {
  item: Extension
}

const ExtensionOverview = ({ item }: Props) => (
  <div className="flex bg-white w-full flex-1 flex-col items-center justify-center px-20">
    <div className="grid grid-cols-5 gap-10 my-6">
      <div className="col-span-4">
        Markdown will go here.
      </div>
      
      <div>  
        <div className="mb-4">
          <h2 className="mb-1 text-lg font-semibold text-gray-700">Works with</h2>
            <ul className="max-w-md space-y-1 text-gray-600 list-none list-inside">
                <li>
                    FOSSBilling v0.1 and above
                </li>
            </ul>
        </div>

        <div className="mb-4">
          <h2 className="mb-1 text-lg font-semibold text-gray-700">Extension Details</h2>
          <ul className="max-w-md space-y-1 text-gray-600 list-none list-inside text-sm">
            <li>
              <FontAwesomeIcon icon={ faGithub } className="w-5 h-4" /> <a href="https://github.com/FOSSBilling/example-module" target="_blank" className="text-blue-600 hover:text-blue-700 hover:underline">FOSSBilling/example-module</a>
            </li>
            <li>
              <FontAwesomeIcon icon={ faGlobe } className="w-5 h-4" /> <a href="https://fossbilling.org" target="_blank" className="text-blue-600 hover:text-blue-700 hover:underline">https://fossbilling.org</a>
            </li>
            <li>
              <FontAwesomeIcon icon={ faScaleBalanced } className="w-5 h-4" /> {item.license}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default ExtensionOverview