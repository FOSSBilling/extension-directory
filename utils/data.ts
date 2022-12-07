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
    download_url: 'https://github.com/FOSSBilling/Proxmox/releases/download/0.0.2/Serviceproxmox.zip',
    version: '0.0.2',
    license: 'GPLv3',
    icon_url: 'https://raw.githubusercontent.com/FOSSBilling/Proxmox/main/icon.png'
  },
]