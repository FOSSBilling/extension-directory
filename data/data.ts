import { Extension } from '../interfaces'

/** Dummy extension data. We probably should migrate to a database as these get bigger. */
export const extensionData: Extension[] = [
  {
    id: 'Serviceproxmox',
    type: 'mod',
    name: 'Proxmox',
    description: 'Provision Proxmox VMs using the Proxmox API',
    author: {
      name: 'Scith & the FOSSBilling Team',
      URL: 'https://fossbilling.org'
    },
    download_url: 'https://github.com/FOSSBilling/Proxmox/releases/download/0.0.4/Serviceproxmox.zip',
    version: '0.0.4',
    license: 'GPLv3',
    icon_url: 'https://raw.githubusercontent.com/FOSSBilling/Proxmox/main/icon.png'
  },
  {
    id: 'example',
    type: 'mod',
    name: 'Example',
    description: 'An example module for developers to get started.',
    author: {
      name: 'FOSSBilling',
      URL: 'https://fossbilling.org'
    },
    download_url: 'https://github.com/FOSSBilling/example-module/releases/download/0.0.1/example.zip',
    version: '0.0.1',
    license: 'Apache-2.0',
    icon_url: 'https://raw.githubusercontent.com/FOSSBilling/example-module/main/icon.svg'
  },
]
