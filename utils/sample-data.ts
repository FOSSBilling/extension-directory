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
    version: 'dev-master',
    license: 'GPLv3',
    iconURL: 'https://fossbilling.org/logo.png'
  },
]