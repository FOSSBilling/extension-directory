import { Extension } from '../interfaces'

/** Dummy extension data. We probably should migrate to a database as these get bigger. */
// Get the release datetime from the GitHub API: https://api.github.com/repos/org/repo/releases
export const extensionData: Extension[] = [
  {
    org: 'fossbilling',
    id: 'Example',
    type: 'mod',
    name: 'Example',
    description: 'An example module for developers to get started.',
    version: '0.0.2',
    download_url: 'https://github.com/FOSSBilling/example-module/releases/download/0.0.1/Example.zip',
    releases: [
      {
        tag: '0.0.2',
        date: '2023-05-01T08:05:02Z',
        download_url: 'https://github.com/FOSSBilling/example-module/releases/download/0.0.2/Example.zip',
        changelog_url: 'https://github.com/FOSSBilling/example-module/releases/tag/0.0.2',
        min_fossbilling_version: '0.1'
      },
      {
        tag: '0.0.1',
        date: '2023-03-31T08:21:28Z',
        download_url: 'https://github.com/FOSSBilling/example-module/releases/download/0.0.1/Example.zip',
        changelog_url: 'https://github.com/FOSSBilling/example-module/releases/tag/0.0.1',
        min_fossbilling_version: '0.1'
      }
    ],
    author: {
      name: 'FOSSBilling',
      URL: 'https://fossbilling.org'
    },
    license: {
        name: 'Apache 2.0',
        URL: 'https://www.apache.org/licenses/LICENSE-2.0'
    },
    source: {
        type: 'github',
        repo: 'FOSSBilling/example-module'
    },
    icon_url: 'https://raw.githubusercontent.com/FOSSBilling/example-module/main/icon.svg',
    website: 'https://fossbilling.org',
    readme: `# Example module README file
    
This module provides a starting point for the developers on creating their FOSSBilling module.
    
Explore the files and comments in the code to understand the structure of the module better. See the social links on [our website](https://fossbilling.org) if you need further information. This module has its own [GitHub repository](https://github.com/FOSSBilling/example-module) where you can submit issues and pull requests.
    
In general, we use modules to extend the functionality of FOSSBilling.
    
All modules can communicate with the other modules using their API endpoints.
    
# Technical requirements about modules
    
## Required
    
* Module folder has to contain a **manifest.json** file to describe itself. The module engine will look for this file to find information about your extension.
    
## Optional
    
* **README.md** - file for installation and getting started instructions
* **html_admin** folder - for admin area templates, to store custom *.html.twig files
* **html_client** folder - for client area templates, to store custom *.html.twig files
    
### Controller folder
    
* **Admin.php** - if the module has install/uninstall functions or an admin area interface\
* **Client.php** - if the module has a client area interface
    
### Api folder
    
* **Admin.php** - Administrator API, only authorized administrators will be able to call these endpoints.
* **Client.php** - Client API, only logged in clients will be able to call these endpoints.
* **Guest.php** - Guest API, no authorization is needed for these endpoints. Don't provide confidential data over these endpoints. Anybody over the internet will be able to access these information, including bots.
    
## Tips
    
We recommend hosting your extensions on a public [GitHub](https://github.com) repository.`
  },
  {
    org: 'fossbilling',
    id: 'Serviceproxmox',
    type: 'mod',
    name: 'Proxmox',
    description: 'Provision Proxmox VMs using the Proxmox API',
    author: {
      name: 'Scith & the FOSSBilling Team',
      URL: 'https://fossbilling.org'
    },
    version: '0.0.4',
    download_url: 'https://github.com/FOSSBilling/Proxmox/releases/download/0.0.4/Serviceproxmox.zip',
    releases: [
      {
        tag: '0.0.4',
        date: '2023-03-18T16:58:22Z',
        download_url: 'https://github.com/FOSSBilling/Proxmox/releases/download/0.0.4/Serviceproxmox.zip',
        changelog_url: 'https://github.com/FOSSBilling/Proxmox/releases/tag/0.0.4',
        min_fossbilling_version: '0.1'
      },
      {
        tag: '0.0.3',
        date: '2022-12-16T18:11:08Z',
        download_url: 'https://github.com/FOSSBilling/Proxmox/releases/download/0.0.3/Serviceproxmox.zip',
        changelog_url: 'https://github.com/FOSSBilling/Proxmox/releases/tag/0.0.3',
        min_fossbilling_version: '0.1'
      },
      {
        tag: '0.0.2',
        date: '2022-12-07T21:20:38Z',
        download_url: 'https://github.com/FOSSBilling/Proxmox/releases/download/0.0.2/Serviceproxmox.zip',
        changelog_url: 'https://github.com/FOSSBilling/Proxmox/releases/tag/0.0.2',
        min_fossbilling_version: '0.1'
      },
      {
        tag: '0.0.1',
        date: '2022-11-26T16:10:34Z',
        download_url: 'https://github.com/FOSSBilling/Proxmox/releases/download/0.0.1/Serviceproxmox.zip',
        changelog_url: 'https://github.com/FOSSBilling/Proxmox/releases/tag/0.0.1',
        min_fossbilling_version: '0.1'
      },
    ],
    license: {
        name: 'GNU General Public License v3.0',
        URL: 'https://www.gnu.org/licenses/gpl-3.0.html'
    },
    source: {
      type: 'github',
      repo: 'FOSSBilling/Proxmox'
    },
    icon_url: 'https://raw.githubusercontent.com/FOSSBilling/Proxmox/main/icon.svg',
    website: 'https://fossbilling.org',
    readme: `# Proxmox module for FOSSBilling
Initial Proxmox support for FOSSBilling. This module is still in development and not ready for production use. Based on [previous work](https://github.com/scith/BoxBilling_Proxmox) by [Scith](https://github.com/scith).
    
![Screenshot](https://user-images.githubusercontent.com/35808275/199820039-d917c48c-b42f-42c6-8b4e-0f1e36bd7357.png)
    
## Features
- Manage pools of Proxmox servers (orders can be allocated to servers automatically based on their capacity)
- Provision LXC containers
- Provision QEMU KVM machines
- Clients can use an online console, start, shutdown and reboot their VMs (not working right now)
    
## Installation
- Copy the "Serviceproxmox" folder in *modules*
- Add new Proxmox servers
- Add new Proxmox products with the correct VM settings setup
    
## Licensing
This module is licensed under the GNU General Public License v3.0. See the LICENSE file for more information.`
  },
]
