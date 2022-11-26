import { Extension } from '../interfaces'

/** Dummy extension data. We probably should migrate to a database as these get bigger. */
export const sampleExtensionData: Extension[] = [
  {
    id: 'Serviceproxmox',
    type: 'mod',
    name: 'Proxmox',
    description: 'Provision Proxmox VMs using the Proxmox API',
    author: {
      name: 'Scith & the FOSSBilling Team',
      URL: 'https://fossbilling.org'
    },
    download_url: 'https://github.com/FOSSBilling/Proxmox/archive/refs/tags/0.0.1.zip',
    version: '0.0.1',
    license: 'GPLv3',
    icon_url: 'https://fossbilling.org/logo.png'
  },
]