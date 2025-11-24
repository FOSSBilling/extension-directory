import { Extension } from "interfaces";
import { findAuthorByID } from "./author";

/** Dummy extension data. We probably should migrate to a database as these get bigger. */
// Get the release datetime from the GitHub API: https://api.github.com/repos/org/repo/releases
export const extensionData: Extension[] = [
  {
    id: "Example",
    type: "mod",
    name: "Example",
    description: "An example module for developers to get started.",
    version: "0.0.4",
    download_url: "https://github.com/FOSSBilling/example-module/releases/download/0.0.5/Example.zip",
    releases: [
      {
        tag: "0.0.5",
        date: "2024-02-12T06:36:38+00:00",
        download_url:
          "https://github.com/FOSSBilling/example-module/releases/download/0.0.5/Example.zip",
        changelog_url:
          "https://github.com/FOSSBilling/example-module/releases/tag/0.0.5",
        min_fossbilling_version: "0.6",
      },
      {
        tag: "0.0.4",
        date: "2023-09-25T07:36:29Z",
        download_url:
          "https://github.com/FOSSBilling/example-module/releases/download/0.0.4/Example.zip",
        changelog_url:
          "https://github.com/FOSSBilling/example-module/releases/tag/0.0.4",
        min_fossbilling_version: "0.5",
      },
      {
        tag: "0.0.3",
        date: "2023-06-13T14:11:11Z",
        download_url:
          "https://github.com/FOSSBilling/example-module/releases/download/0.0.3/Example.zip",
        changelog_url:
          "https://github.com/FOSSBilling/example-module/releases/tag/0.0.3",
        min_fossbilling_version: "0.5",
      },
      {
        tag: "0.0.2",
        date: "2023-05-01T08:05:02Z",
        download_url:
          "https://github.com/FOSSBilling/example-module/releases/download/0.0.2/Example.zip",
        changelog_url:
          "https://github.com/FOSSBilling/example-module/releases/tag/0.0.2",
        min_fossbilling_version: "0.1",
      },
      {
        tag: "0.0.1",
        date: "2023-03-31T08:21:28Z",
        download_url:
          "https://github.com/FOSSBilling/example-module/releases/download/0.0.1/Example.zip",
        changelog_url:
          "https://github.com/FOSSBilling/example-module/releases/tag/0.0.1",
        min_fossbilling_version: "0.1",
      },
    ],
    author: findAuthorByID("fossbilling"),
    license: {
      name: "Apache 2.0",
      URL: "https://www.apache.org/licenses/LICENSE-2.0",
    },
    source: {
      type: "github",
      repo: "FOSSBilling/example-module",
    },
    icon_url: "https://raw.githubusercontent.com/FOSSBilling/example-module/main/src/icon.svg",
    website: "https://fossbilling.org",
    readme: 
    `# Example module README file

This module provides a starting point for the developers on creating their FOSSBilling module.
    
Explore the files and comments in the code to understand the structure of the module better. See the social links on [our website](https://fossbilling.org) if you need further information. This module has its own [GitHub repository](https://github.com/FOSSBilling/example-module) where you can submit issues and pull requests.
    
In general, we use modules to extend the functionality of FOSSBilling.
    
All modules can communicate with the other modules using their API endpoints.
    
## Technical requirements about modules
    
## Required
    
 - Module folder has to contain a **manifest.json** file to describe itself. The module engine will look for this file to find information about your extension.
    
## Optional
    
 - **README.md** - A file which generally is used to hold a getting started guide or installation instructions for your module.
 - **html_admin** - A folder holding front-end templates (\`*.html.twig files\`) for the administrator panel.
 - **html_client** - A folder holding front-end templates (\`*.html.twig files\`) for the client / guest area.
    
### Controller folder
    
 - **Admin.php** - Defines the module's routes and navigation items for the administrator panel.
 - **Client.php** - Used to define the module's routes for the client / guest area.

### Api folder
    
 - **Admin.php** - Administrator API, only authorized administrators will be able to call these endpoints.
 - **Client.php** - Client API, only logged in clients will be able to call these endpoints.
 - **Guest.php** - Guest API, no authorization is needed for these endpoints. Don't provide confidential data over these endpoints. Anybody over the internet will be able to access these information, including bots.
    
## Tips
    
We recommend hosting your extensions on a public [GitHub](https://github.com) repository.
    
### Automated compatibility checking
    
As FOSSBilling evolves and matures, its internal functionality changes, which can create compatibility issues between your module and FOSSBilling.
To help developers catch these issues early on, we've designed a workflow that enables you to perform a PHPStan analysis of your module with both the latest FOSSBilling release and its preview builds.
While PHPStan cannot perform live tests, it's a useful tool to verify that your module doesn't reference missing functions, use incorrect types, or have other common low-level issues.
    
#### Setup
    
More in-depth instructions are planned. For now, check out the required files:
    
 - [php-ci.yml](https://github.com/FOSSBilling/example-module/blob/main/.github/workflows/php-ci.yml)
 - [phpstan.neon](https://github.com/FOSSBilling/example-module/blob/main/phpstan.neon)
    
## Licensing
    
This extension is open source software and is released under the Apache v2.0 license. See [LICENSE](LICENSE) for the full license terms.
    
This product includes the following third party work:
    
 - Open Source Iconography by [Pictogrammers](https://pictogrammers.com/) licensed under the [Pictogrammers Free License](https://pictogrammers.com/docs/general/license/).`,
  },
  /*{
    id: "Serviceproxmox",
    type: "mod",
    name: "Proxmox",
    description: "Provision Proxmox VMs using the Proxmox API",
    author: findAuthorByID("fossbilling"),
    version: "0.0.4",
    download_url:
      "https://github.com/FOSSBilling/Proxmox/releases/download/0.0.4/Serviceproxmox.zip",
    releases: [
      {
        tag: "0.0.5",
        date: "2023-06-13T14:21:19Z",
        download_url:
          "https://github.com/FOSSBilling/Proxmox/releases/download/0.0.5/Serviceproxmox.zip",
        changelog_url:
          "https://github.com/FOSSBilling/Proxmox/releases/tag/0.0.5",
        min_fossbilling_version: "0.5",
      },
      {
        tag: "0.0.4",
        date: "2023-03-18T16:58:22Z",
        download_url:
          "https://github.com/FOSSBilling/Proxmox/releases/download/0.0.4/Serviceproxmox.zip",
        changelog_url:
          "https://github.com/FOSSBilling/Proxmox/releases/tag/0.0.4",
        min_fossbilling_version: "0.1",
      },
      {
        tag: "0.0.3",
        date: "2022-12-16T18:11:08Z",
        download_url:
          "https://github.com/FOSSBilling/Proxmox/releases/download/0.0.3/Serviceproxmox.zip",
        changelog_url:
          "https://github.com/FOSSBilling/Proxmox/releases/tag/0.0.3",
        min_fossbilling_version: "0.1",
      },
      {
        tag: "0.0.2",
        date: "2022-12-07T21:20:38Z",
        download_url:
          "https://github.com/FOSSBilling/Proxmox/releases/download/0.0.2/Serviceproxmox.zip",
        changelog_url:
          "https://github.com/FOSSBilling/Proxmox/releases/tag/0.0.2",
        min_fossbilling_version: "0.1",
      },
      {
        tag: "0.0.1",
        date: "2022-11-26T16:10:34Z",
        download_url:
          "https://github.com/FOSSBilling/Proxmox/releases/download/0.0.1/Serviceproxmox.zip",
        changelog_url:
          "https://github.com/FOSSBilling/Proxmox/releases/tag/0.0.1",
        min_fossbilling_version: "0.1",
      },
    ],
    license: {
      name: "GNU General Public License v3.0",
      URL: "https://www.gnu.org/licenses/gpl-3.0.html",
    },
    source: {
      type: "github",
      repo: "FOSSBilling/Proxmox",
    },
    icon_url:
      "https://raw.githubusercontent.com/FOSSBilling/Proxmox/main/icon.svg",
    website: "https://fossbilling.org",
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
This module is licensed under the GNU General Public License v3.0. See the LICENSE file for more information.`,
  },*/
  {
    id: "Mollie",
    type: "payment-gateway",
    name: "Mollie",
    description: "Mollie extension for FOSSBilling",
    author: findAuthorByID("fossbilling"),
    license: {
      name: "Apache 2.0",
      URL: "https://www.apache.org/licenses/LICENSE-2.0",
    },
    source: {
      type: "github",
      repo: "FOSSBilling/Mollie",
    },
    version: "0.0.5",
    download_url:
      "https://github.com/FOSSBilling/Mollie/releases/download/0.0.5/Mollie.zip",
    releases: [
      {
        tag: "0.0.5",
        date: "2025-09-09T15:18:04Z",
        download_url:
          "https://github.com/FOSSBilling/Mollie/releases/download/0.0.5/Mollie.zip",
        changelog_url:
          "https://github.com/FOSSBilling/Mollie/releases/tag/0.0.5",
        min_fossbilling_version: "0.5",
      },
      {
        tag: "0.0.4",
        date: "2025-02-14T14:17:49Z",
        download_url:
          "https://github.com/FOSSBilling/Mollie/releases/download/0.0.4/Mollie.zip",
        changelog_url:
          "https://github.com/FOSSBilling/Mollie/releases/tag/0.0.4",
        min_fossbilling_version: "0.5",
      },
      {
        tag: "0.0.3",
        date: "2023-06-13T14:17:49Z",
        download_url:
          "https://github.com/FOSSBilling/Mollie/releases/download/0.0.3/Mollie.zip",
        changelog_url:
          "https://github.com/FOSSBilling/Mollie/releases/tag/0.0.3",
        min_fossbilling_version: "0.5",
      },
      {
        tag: "0.0.2",
        date: "2023-05-08T20:14:07Z",
        download_url:
          "https://github.com/FOSSBilling/Mollie/releases/download/0.0.2/Mollie.zip",
        changelog_url:
          "https://github.com/FOSSBilling/Mollie/releases/tag/0.0.2",
        min_fossbilling_version: "0.1",
      },
      {
        tag: "0.0.1",
        date: "2023-05-08T17:16:01Z",
        download_url:
          "https://github.com/FOSSBilling/Mollie/releases/download/0.0.1/Mollie.zip",
        changelog_url:
          "https://github.com/FOSSBilling/Mollie/releases/tag/0.0.1",
        min_fossbilling_version: "0.1",
      },
    ],
    icon_url:
      "https://raw.githubusercontent.com/FOSSBilling/Mollie/main/src/Mollie.png",
    website: "https://fossbilling.org",
    readme: `![Molllie for FOSSBilling](https://user-images.githubusercontent.com/35808275/236844335-8085c37f-ea5f-4e6a-9712-8c5bea7ebcaf.png)
  # Mollie for FOSSBilling
  
  
  Quickly and easily integrate [Mollie](https://mollie.com) into your [FOSSBilling](https://fossbilling.org) instance using this extension.
  
  > **Warning**
  > This extension, like FOSSBilling itself is under active development but is currently very much beta software. This means that there may be stability or security issues and it is not yet recommended for use in active production environments!
  
  ## Installation
  ### Extension directory
  The easiest way to install this extension is by using the [FOSSBilling extension directory](https://extensions.fossbilling.org/extension/Mollie).
  
  ### Manual installation
  1. Download the latest release from the [extension directory](https://extensions.fossbilling.org/extension/Mollie)
  2. Create a new folder named \`Mollie\` in the \`/library/Payment/Adapter\` directory of your FOSSBilling installation
  3. Extract the archive you've downloaded in the first step into the new directory
  4. Go to the "Payment gateways" page in your admin panel (under the "System" menu in the navigation bar) and find Mollie in the "New payment gateway" tab
  5. Click the cog icon next to Mollie to install and configure Mollie
  
  ## Contributing
  We love our contributors! Feel free to create a pull request if you want to help out.
  
  Not a developer? No problem! You can also help us by [reporting bugs, creating feature requests](https://github.com/FOSSBilling/mollie/issues/new/choose) or by donating to the project over [GitHub sponsors](https://github.com/sponsors/FOSSBilling) or [Open Collective](https://opencollective.com/fossbilling).
  
  ## Licensing
  This extension is licensed under the Apache 2.0 license. See the [LICENSE](LICENSE) file for more information.
  
  ## Disclaimer
  This extension is not affiliated with Mollie B.V. in any way. Mollie is a registered trademark of Mollie B.V. The "official" word refers exclusively to the fact that this extension is the only one that is officially supported by the FOSSBilling team. It does not imply any endorsement by Mollie B.V.`,
  },
  {
    id: "Bitcart",
    type: "payment-gateway",
    name: "Bitcart",
    description: "Bitcart extension for FOSSBilling",
    author: findAuthorByID("bitcart"),
    license: {
      name: "MIT",
      URL: "https://github.com/bitcart/bitcart-fossbilling/blob/master/LICENSE",
    },
    source: {
      type: "github",
      repo: "bitcart/bitcart-fossbilling",
    },
    version: "1.1.0",
    download_url:
      "https://github.com/bitcart/bitcart-fossbilling/releases/download/1.1.0/Bitcart.zip",
    releases: [
      {
        tag: "1.1.0",
        date: "2023-06-15T19:22:52Z",
        download_url:
          "https://github.com/bitcart/bitcart-fossbilling/releases/download/1.1.0/Bitcart.zip",
        changelog_url:
          "https://github.com/bitcart/bitcart-fossbilling/releases/tag/1.1.0",
        min_fossbilling_version: "0.5",
      },
      {
        tag: "1.0.0",
        date: "2023-05-15T19:22:52Z",
        download_url:
          "https://github.com/bitcart/bitcart-fossbilling/releases/download/1.0.0/BitcartCC.zip",
        changelog_url:
          "https://github.com/bitcart/bitcart-fossbilling/releases/tag/1.0.0",
        min_fossbilling_version: "0.1",
      },
    ],
    icon_url:
      "https://raw.githubusercontent.com/bitcart/bitcart-fossbilling/master/Bitcart/Bitcart.png",
    website: "https://bitcart.ai",
    readme: `# Bitcart plugin for FOSSBilling

  For BoxBilling or FOSSBilling versions less than 0.5.0, you will need to use an [older version](https://github.com/bitcart/bitcart-fossbilling/tree/9aeb99cd3a59545113c2f5416d7ed63f00b149eb) of this payment gateway.
  Please keep in mind BoxBilling is unmaintained and both BoxBilling and outdated version FOSSBilling may suffer from security vulnerabilities. Additionally, no support will be provided for either.
  
  ## Integration Requirements
  
  This version requires the following:
  
  * A working and up-to-date FOSSBilling instance
  * Running Bitcart instance: [deployment guide](https://docs.bitcart.ai/deployment)
  
  ## Installing the Plugin
  
  ### Extension directory
  
  The easiest way to install this extension is by using the [FOSSBilling extension directory](https://extensions.fossbilling.org/extension/Bitcart).
  
  ### Manual installation
  
  1. Download the latest release from the [extension directory](https://extensions.fossbilling.org/extension/Bitcart)
  2. Create a new folder named \`Bitcart\` in the \`/library/Payment/Adapter\` directory of your FOSSBilling installation
  3. Extract the archive you've downloaded in the first step into the new directory
  4. Go to the "Payment gateways" page in your admin panel (under the "System" menu in the navigation bar) and find Bitcart in the "New payment gateway" tab
  5. Click the cog icon next to Bitcart to install and configure Bitcart
  
  ## Plugin Configuration
  
  After you have enabled the Bitcart plugin, the configuration steps are:
  
  1. Enter your admin panel URL (for example, https://admin.bitcart.ai) without slashes. If deployed via configurator, you should use https://bitcart.yourdomain.com/admin
  2. Enter your merchants API URL (for example, https://api.bitcart.ai) without slashes. If deployed via configurator, you should use https://bitcart.yourdomain.com/api
  3. Enter your store ID (click on id field in Bitcart's admin panel to copy id)
  
  Enjoy!`,
  },
  {
    id: "UddoktaPay",
    type: "payment-gateway",
    name: "UddoktaPay",
    description: "UddoktaPay extension for FOSSBilling",
    author: findAuthorByID("uddoktapay"),
    license: {
      name: "MIT",
      URL: "https://github.com/UddoktaPay/FOSSBilling/blob/master/LICENSE",
    },
    source: {
      type: "github",
      repo: "UddoktaPay/FOSSBilling",
    },
    version: "1.0.1",
    download_url:
      "https://github.com/UddoktaPay/FOSSBilling/releases/download/1.0.1/UddoktaPay.zip",
    releases: [
      {
        tag: "1.0.1",
        date: "2024-12-12T15:01:14Z",
        download_url:
          "https://github.com/UddoktaPay/FOSSBilling/releases/download/1.0.1/UddoktaPay.zip",
        changelog_url:
          "https://github.com/UddoktaPay/FOSSBilling/releases/tag/1.0.1",
        min_fossbilling_version: "0.5",
      },
      {
        tag: "1.0.0",
        date: "2023-07-29T11:44:14Z",
        download_url:
          "https://github.com/UddoktaPay/FOSSBilling/releases/download/1.0.0/UddoktaPay.zip",
        changelog_url:
          "https://github.com/UddoktaPay/FOSSBilling/releases/tag/1.0.0",
        min_fossbilling_version: "0.5",
      },
    ],
    icon_url:
      "https://raw.githubusercontent.com/UddoktaPay/FOSSBilling/master/UddoktaPay/UddoktaPay.png",
    website: "https://uddoktapay.com",
    readme: `# UddoktaPay plugin for FOSSBilling

  ## Installing the Plugin
  
  ### Extension directory
  
  The easiest way to install this extension is by using the [FOSSBilling extension directory](https://extensions.fossbilling.org/extension/UddoktaPay).
  
  ### Manual installation
  
  1. Download the latest release from the [extension directory](https://extensions.fossbilling.org/extension/UddoktaPay)
  2. Create a new folder named \`UddoktaPay\` in the \`/library/Payment/Adapter\` directory of your FOSSBilling installation
  3. Extract the archive you've downloaded in the first step into the new directory
  4. Go to the "Payment gateways" page in your admin panel (under the "System" menu in the navigation bar) and find UddoktaPay in the "New payment gateway" tab
  5. Click the cog icon next to UddoktaPay to install and configure UddoktaPay
  
  Enjoy!`,
  },
  {
    id: "Razorpay",
    type: "payment-gateway",
    name: "Razorpay",
    description: "Razorpay extension for FOSSBilling",
    author: findAuthorByID("albinvar"),
    license: {
      name: "Apache 2.0",
      URL: "https://github.com/albinvar/Razorpay-FOSSBilling/blob/1.x-prod/LICENSE",
    },
    source: {
      type: "github",
      repo: "albinvar/Razorpay-FOSSBilling",
    },
    version: "0.1.0",
    download_url:
      "https://github.com/albinvar/Razorpay-FOSSBilling/releases/download/v0.1.0/Razorpay.zip",
    releases: [
      {
        tag: "0.1.0",
        date: "2023-09-24T21:03:30Z",
        download_url:
          "https://github.com/albinvar/Razorpay-FOSSBilling/releases/download/v0.1.0/Razorpay.zip",
        changelog_url:
          "https://github.com/albinvar/Razorpay-FOSSBilling/releases/tag/v0.1.0",
        min_fossbilling_version: "0.5",
      },
    ],
    icon_url:
      "https://raw.githubusercontent.com/albinvar/assets/main/fossbilling/razorpay-glyph-cropped.svg",
    website: "https://razorpay.com",
    readme: `![Molllie for FOSSBilling](https://raw.githubusercontent.com/albinvar/assets/main/fossbilling/rzp-foss-banner.png)

  # Razorpay Integration for FOSSBilling

  Provide your [FOSSBilling](https://fossbilling.org) customers with a variety of payment options, including Credit/Debit cards, Netbanking, UPI, Wallets, and more through [Razorpay](https://razorpay.com).

  > **Disclaimer**: This module is not officially affiliated with [FOSSBilling](https://fossbilling.org) or [Razorpay](https://razorpay.com). Please refer to their respective documentation for detailed information on FOSSBilling and Razorpay.

  ## Installation

### 1). Extension directory

The easiest way to install this extension is by using the [FOSSBilling extension directory](https://extensions.fossbilling.org/extension/Razorpay).

### 2). Manual installation
1. Download the latest release from the [extension directory](https://extensions.fossbilling.org/extension/Razorpay)
2. Create a new folder named **Razorpay** in the **/library/Payment/Adapter** directory of your FOSSBilling installation
3. Extract the archive you've downloaded in the first step into the new directory
4. Go to the "**Payment gateways**" page in your admin panel (under the "System" menu in the navigation bar) and find Razorpay in the "**New payment gateway**" tab
5. Click the *cog icon* next to Razorpay to install and configure Razorpay


## Configuration
1. **Access Razorpay Settings:** In your FOSSBilling admin panel, find "**Razorpay**" under "**Payment gateways.**"
2. **Enter API Credentials:** Input your Razorpay \`API Key\` and \`API Secret\`. You can obtain these from your Razorpay panel.
3. **Configure Preferences:** Customize settings like currency and payment methods as needed.
4. **Save Changes:** Remember to update your configuration.
5. **Test Transactions (Optional):** Test your gateway integration through a payment process.
6. **Go Live:** Switch to live mode to start accepting real payments.

## Usage
Once you've installed and configured the module, you can start using Razorpay as a payment gateway in your FOSSBilling setup. Customers will now see Razorpay as an option during the payment process based on the configuration you have set.

## Contributing
We welcome contributions to enhance and improve this integration module. If you'd like to contribute, please follow these steps:

### Fork the repository.
Create a new branch for your feature or bugfix: \`git checkout -b feature-name\`.
Make your changes and commit them with a clear and concise commit message.
Push your branch to your fork: \`git push origin feature-name\` and create a [pull request](https://github.com/albinvar/Razorpay-FOSSBilling/pulls).

## License
This FOSSBilling Razorpay Payment Gateway Integration module is open-source software licensed under the [Apache License 2.0](https://github.com/albinvar/Razorpay-FOSSBilling/blob/1.x-prod/LICENSE).

For support or questions, feel free to contact me at albinvar@pm.me
  `,
  },
  {
    id: "BTCPay",
    type: "payment-gateway",
    name: "BTCPay",
    description: "BTCPay extension for FOSSBilling",
    author: findAuthorByID("christiangabs"),
    license: {
      name: "Apache License 2.0",
      URL: "https://github.com/ChristianGabs/btcpay-fossbilling/blob/main/LICENSE",
    },
    source: {
      type: "github",
      repo: "ChristianGabs/btcpay-fossbilling",
    },
    version: "0.1.5",
    download_url:
        "https://github.com/ChristianGabs/btcpay-fossbilling/releases/download/0.1.5/BTCPay-FOSSBilling-0.1.5.zip",
    releases: [
      {
        tag: "0.1.5",
        date: "2024-06-25T18:56:00Z",
        download_url:
            "https://github.com/ChristianGabs/btcpay-fossbilling/releases/download/0.1.5/BTCPay-FOSSBilling-0.1.5.zip",
        changelog_url:
            "https://github.com/ChristianGabs/btcpay-fossbilling/releases/download/0.1.5",
        min_fossbilling_version: "0.6",
      },
      {
        tag: "0.1.4",
        date: "2024-06-14T16:13:00Z",
        download_url:
            "https://github.com/ChristianGabs/btcpay-fossbilling/releases/download/0.1.4/BTCPay-FOSSBilling-0.1.4.zip",
        changelog_url:
            "https://github.com/ChristianGabs/btcpay-fossbilling/releases/download/0.1.4",
        min_fossbilling_version: "0.6",
      },
      {
        tag: "0.1.3",
        date: "2024-06-12T20:54:00Z",
        download_url:
            "https://github.com/ChristianGabs/btcpay-fossbilling/releases/download/0.1.3/BTCPay-FOSSBilling-0.1.3.zip",
        changelog_url:
            "https://github.com/ChristianGabs/btcpay-fossbilling/releases/download/0.1.3",
        min_fossbilling_version: "0.6",
      },
    ],
    icon_url:
        "https://raw.githubusercontent.com/ChristianGabs/btcpay-fossbilling/main/src/btcpaylogo.png",
    website: "https://github.com/ChristianGabs/btcpay-fossbilling",
    readme: ` # BTCPay plugin for FOSSBilling
  For FOSSBilling versions > 0.6.0
  
  ## Integration Requirements
  
  This version requires the following:
  
  * A working and up-to-date FOSSBilling instance
  * Running BTCPay instance: [deployment guide](https://docs.btcpayserver.org/Deployment/)
  
  ## Installing the Plugin
  ### 1). Extension directory

  The easiest way to install this extension is by using the [FOSSBilling extension directory](https://extensions.fossbilling.org/extension/BTCPay).

  ### 2). Manual installation
  
  1. Download the latest release from the [releases](https://github.com/ChristianGabs/btcpay-fossbilling/releases/latest)
  2. Create a new folder named \`BTCPay\` in the \`/library/Payment/Adapter\` directory of your FOSSBilling installation
  3. Extract the archive you've downloaded in the first step into the new directory
  4. Go to the "Payment gateways" page in your admin panel (under the "System" menu in the navigation bar) and find BTCPay in the "New payment gateway" tab
  5. Click the cog icon next to BTCPay to install and configure BTCPay
  
  ## Plugin Configuration
  
  After you have enabled the BTCPay plugin, the configuration steps are:
  
  1. Enter your Host URL (for example, https://pay.example.com) without slashes.
  2. Enter your API Key [Account > Manager Account > Api Keys] Permissions : [btcpay.store.canviewinvoices, btcpay.store.cancreateinvoice]
  3. Enter your Store id  (Settings > General > Store Id)
  4. Enter your IPN Webhook Secret Key  (Settings > Webhook > Create Webhook) [Events : A payment has been settled, An invoice has expired, An invoice has been settled, An invoice became invalid] 
  5. Tax Included
  6. Speed Policy Options [High,Medium,Low, Low Medium : speed]

  ## Debugging Webhook Callbacks

  ***Enable Debugging:***

  - Open ***config.php*** and set  \`\`\`debug => true\`\`\`

  - *Remember to revert this setting to false once you have finished debugging.*

  ***View Callback Responses***

  - You can find the responses from callbacks in the log files located at FossBilling **/data/log/event/event-date.log**.

  ***Example of debugging callbacks***
  
  - \`\`\`[BTCPay] validation has failed. HTTP_BTCPAY_SIG : "" IPN Secret : "********" \`\`\`
  - *In this scenario, your IPN Secret is incorrect.*
  
  ## License
  This FOSSBilling BTCPay Payment Gateway Integration module is open-source software licensed under the [Apache License 2.0](LICENSE).`,
  },
  {
    id: "PAYEER",
    type: "payment-gateway",
    name: "PAYEER",
    description: "PAYEER extension for FOSSBilling",
    author: findAuthorByID("neto737"),
    license: {
      name: "MIT",
      URL: "https://github.com/neto737/PAYEER-FOSSBilling/blob/main/LICENSE",
    },
    source: {
      type: "github",
      repo: "neto737/PAYEER-FOSSBilling",
    },
    version: "0.1.1",
    download_url:
        "https://github.com/neto737/PAYEER-FOSSBilling/releases/download/0.1.1/PAYEER-v0.1.1.zip",
    releases: [
      {
        tag: "0.1.1",
        date: "2024-06-22T22:07:28Z",
        download_url:
            "https://github.com/neto737/PAYEER-FOSSBilling/releases/download/0.1.1/PAYEER-v0.1.1.zip",
        changelog_url:
            "https://github.com/neto737/PAYEER-FOSSBilling/releases/tag/0.1.1",
        min_fossbilling_version: "0.6",
      },
      {
        tag: "0.1.0",
        date: "2024-06-21T22:41:54Z",
        download_url:
            "https://github.com/neto737/PAYEER-FOSSBilling/releases/download/0.1.0/PAYEER.zip",
        changelog_url:
            "https://github.com/neto737/PAYEER-FOSSBilling/releases/tag/0.1.0",
        min_fossbilling_version: "0.6",
      },
    ],
    icon_url:
        "https://raw.githubusercontent.com/neto737/PAYEER-FOSSBilling/main/payeer-logo.png",
    website: "https://payeer.com/",
    readme: ` # PAYEER for FOSSBilling
  Quickly and easily integrate [PAYEER](https://payeer.com) into your [FOSSBilling](https://fossbilling.org) instance using this extension.

  ## Installing the Plugin
  ### 1). Extension directory

  The easiest way to install this extension is by using the [FOSSBilling extension directory](https://extensions.fossbilling.org/extension/PAYEER).

  ### 2). Manual installation
  
  1. Download the latest release from the [releases](https://github.com/neto737/PAYEER-FOSSBilling/releases/latest)
  2. Create a new folder named \`PAYEER\` in the \`/library/Payment/Adapter\` directory of your FOSSBilling installation
  3. Extract the archive you've downloaded in the first step into the new directory
  4. Go to the "Payment gateways" page in your admin panel (under the "System" menu in the navigation bar) and find PAYEER in the "New payment gateway" tab
  5. Click the cog icon next to PAYEER to install and configure PAYEER

  ## Licensing
  This extension is licensed under the MIT license. See the [LICENSE](LICENSE) file for more information.

  ## Disclaimer
  This extension is not affiliated with PAYEER Limited. in any way. PAYEER is a registered trademark of PAYEER Limited.
  `,
  },
  {
    id: "Xendit",
    type: "payment-gateway",
    name: "Xendit",
    description: "Xendit extension for FOSSBilling",
    author: findAuthorByID("fzfr"),
    license: {
      name: "Apache 2.0",
      URL: "https://github.com/FZFR/Xendit-FOSSBilling/blob/main/LICENSE",
    },
    source: {
      type: "github",
      repo: "FZFR/Xendit-FOSSBilling",
    },
    version: "1.0.0",
    download_url:
      "https://github.com/FZFR/Xendit-FOSSBilling/releases/download/v1.0.0/Xendit.zip",
    releases: [
      {
        tag: "1.0.0",
        date: "2024-08-01T04:57:00Z",
        download_url:
          "https://github.com/FZFR/Xendit-FOSSBilling/releases/download/v1.0.0/Xendit.zip",
        changelog_url:
          "https://github.com/FZFR/Xendit-FOSSBilling/releases/tag/v1.0.0",
        min_fossbilling_version: "0.6",
      },
    ],
    icon_url:
      "https://raw.githubusercontent.com/FZFR/Xendit-FOSSBilling/main/src/Xendit.png",
    website: "https://github.com/FZFR/Xendit-FOSSBilling",
    readme: `![Xendit for FOSSBilling](https://cdn.fazza.fr/REDACTED/img/xendit-foss-banner.jpg)
  # Xendit for FOSSBilling

  ## Overview
  Provide your [FOSSBilling](https://fossbilling.org) customers with a variety of payment options, including Credit/Debit cards, Bank Transfer, E-Wallets, and more through [Xendit](https://www.xendit.co).

  > **Note**
  > Warning This extension, like FOSSBilling itself is under active development but is currently very much beta software. This means that there may be stability or security issues and it is not yet recommended for use in active production environments!

  ## Installation

  ### 1). Extension directory  
  The easiest way to install this extension is by using the [FOSSBilling extension directory](https://extensions.fossbilling.org/extension/Xendit).
  ### 2). Manual installation
  1. Download the latest release from the [GitHub repository](https://github.com/FZFR/Xendit-FOSSBilling/releases)
  2. Create a new folder named **Xendit** in the **/library/Payment/Adapter** directory of your FOSSBilling installation
  3. Extract the archive you've downloaded in the first step into the new directory
  4. Go to the "**Payment gateways**" page in your admin panel (under the "System" menu in the navigation bar) and find Xendit in the "**New payment gateway**" tab
  5. Click the *cog icon* next to Xendit to install and configure Xendit

  ## Configuration
  1. Access Xendit Settings: In your FOSSBilling admin panel, find "**Xendit**" under "**Payment gateways.**"
  2. Enter API Credentials: Input your Xendit \`API Key\` and \`Webhook Verification Token\`. You can obtain these from your Xendit dashboard.
  3. Configure Preferences: Customize settings like sandbox mode and logging as needed.
  4. Save Changes: Remember to update your configuration.
  5. Test Transactions: It's recommended to test your gateway integration through a payment process in sandbox mode before going live.
  6. Go Live: Switch to live mode to start accepting real payments once testing is complete.


  ### Webhook Configuration

  To set up webhooks:

  1. Log in to your Xendit dashboard.
  2. Navigate to Settings > Webhooks.
  3. Add a new webhook with the following URL:
    \`https://your-fossbilling-domain.com/ipn.php?gateway_id=payment_gateway_id\`
    (Replace \`your-fossbilling-domain.com\` with your actual domain and \`payment_gateway_id\` with the ID assigned by FOSSBilling)
  4. Ensure the Webhook Verification Token in your Xendit settings matches the one in your FOSSBilling configuration.



  ## Usage
  Once installed and configured, Xendit will appear as a payment option during the checkout process. The module handles various payment statuses including successful payments, pending transactions, and failed attempts.

  ## Troubleshooting

  - Check the logs at \`library/Payment/Adapter/Xendit/logs/xendit.log\` for detailed information on transactions and errors.
  - Ensure your server's IP is whitelisted in Xendit's settings if you're experiencing connection issues.
  - Verify that the API keys and Webhook Verification Tokens are correctly entered in the FOSSBilling configuration.
  - If you encounter timezone-related issues, check your php.ini configuration or server settings.

  ## Features

  - [x] Using Xendit Payment Link (https://docs.xendit.co/payment-link)
  - [x] Automatic invoice status update to 'paid' upon successful payment
  - [x] Activate service automatically after payment confirmation
  - [x] Comprehensive handling of various payment statuses (PAID, EXPIRED, PENDING, FAILED)
  - [x] Detailed transaction logging for easy tracking and debugging


  ## Contributing
  We welcome contributions to enhance and improve this integration module. If you'd like to contribute, please follow these steps:

  1. Fork the repository.
  2. Create a new branch for your feature or bugfix: \`git checkout -b feature-name\`.
  3. Make your changes and commit them with a clear and concise commit message.
  4. Push your branch to your fork: \`git push origin feature-name\` and create a [pull request](https://github.com/FZFR/Xendit-FOSSBilling/pulls).

  ## License
  This FOSSBilling Xendit Payment Gateway Integration module is open-source software licensed under the [Apache License 2.0](LICENSE).

  > *Note*: This module is not officially affiliated with [FOSSBilling](https://fossbilling.org) or [Xendit](https://www.xendit.co). Please refer to their respective documentation for detailed information on FOSSBilling and Xendit.


  ## Support

  For issues related to this adapter, please open an issue.

  For Xendit-specific issues, please contact Xendit support.`,
  },
  {
    id: "Netim",
    type: "domain-registrar",
    name: "Netim",
    description: "Netim registrar extension for FOSSBilling",
    author: findAuthorByID("netim"),
    license: {
      name: "GPL-3.0 license",
      URL: "https://github.com/netim-com/fossbilling-registrar-module/blob/main/LICENSE",
    },
    source: {
      type: "github",
      repo: "netim-com/fossbilling-registrar-module",
    },
    version: "1.0.0",
    download_url:
      "https://github.com/netim-com/fossbilling-registrar-module",
    releases: [
      {
        tag: "1.0.0",
        date: "2023-07-12T04:57:00Z",
        download_url:
          "https://github.com/netim-com/fossbilling-registrar-module",
        changelog_url:
          "https://github.com/netim-com/fossbilling-registrar-module/commits/main/",
        min_fossbilling_version: "0.6",
      },
    ],
    icon_url:
      "https://avatars.githubusercontent.com/u/117817448?v=4",
    website: "https://netim.com",
    readme: `# Netim for FOSSBilling

  ## About the registrar module
  This module is the implementation of the domain name registrar extension for Netim in FOSSBilling application.
  To learn more about FOSSBilling, see https://fossbilling.org/
    
  This module is licensed under the GNU General Public License v3.0. See the LICENSE file for more information.
    
  Online documentation: https://support.netim.com/en/docs/fossbilling
    
  Technical Support: modules-support@netim.com
    
  ## Installation
    
  ### 1). Extension directory  
  Unfortunately, as FossBilling is still under development, it is not possible to install a registrar from the directory extension. Only manual installation is available.
  ### 2). Manual installation
  1. Download the latest release from [our official website](https://support.netim.com/en/docs/fossbilling/download-and-installation)
  2. Extract the archive in your FOSSBilling installation directory
  3. Ensure that the module is present in the following directory: /library/Registrar/Adapter/Netim/
    
  ## Features
    
  __Domain Management__
  - [X] Domain Registration
  - [X] Domain Transfer
  - [X] Domain Renewal
  - [X] Domain Registrar Lock
  - [X] Domain Whois privacy
  - [X] Support for AuthInfo Code (Domain Authorization Code)
  - [X] Faster availability check by Netim
  
  __Contact Management__
  - [X] Update of contact information
  - [X] Full support of Latin character set (LATIN1 / LATIN-EXTA / LATIN-EXTB character sets)
    
  __DNS Nameserver Management__
  - [X] Nameserver changes
    
  ## Testing
  Our reseller service provides an OT&E platform so that all tests can be done before going live in production
    
  ## About NETIM
  NETIM is an ICANN accredited registrar created in 2004.
    
  It is a worldwide registrar with more than 1000 tlds available and a large network of accreditation.
  In a highly competitive and fast-growing market, the NETIM values are transparency, honesty in ethics with a clear pricing policy and a quality based-service rewarded on TrustPilot. 
    
  Website: https://www.netim.com
    
  Technical Support:support@netim.com
    
  Sales Support:sales@netim.com`,
},
{
    id: "FaucetPay",
    type: "payment-gateway",
    name: "FaucetPay",
    description: "FaucetPay extension for FOSSBilling",
    author: findAuthorByID("neto737"),
    license: {
      name: "MIT",
      URL: "https://github.com/neto737/FaucetPay-FOSSBilling/blob/main/LICENSE",
    },
    source: {
      type: "github",
      repo: "neto737/FaucetPay-FOSSBilling",
    },
    version: "0.1.0",
    download_url:
        "https://github.com/neto737/FaucetPay-FOSSBilling/releases/download/0.1.0/FaucetPay-v0.1.0.zip",
    releases: [
      {
        tag: "0.1.0",
        date: "2024-11-23T01:37:45Z",
        download_url:
            "https://github.com/neto737/FaucetPay-FOSSBilling/releases/download/0.1.0/FaucetPay-v0.1.0.zip",
        changelog_url:
            "https://github.com/neto737/FaucetPay-FOSSBilling/releases/tag/0.1.0",
        min_fossbilling_version: "0.6",
      },
    ],
    icon_url:
        "https://raw.githubusercontent.com/neto737/FaucetPay-FOSSBilling/main/faucetpay-logo.png",
    website: "https://faucetpay.io/",
    readme: ` # FaucetPay for FOSSBilling
  Quickly and easily integrate [FaucetPay](https://faucetpay.io) into your [FOSSBilling](https://fossbilling.org) instance using this extension.

  ## Installing the Plugin
  ### 1). Extension directory

  The easiest way to install this extension is by using the [FOSSBilling extension directory](https://extensions.fossbilling.org/extension/FaucetPay).

  ### 2). Manual installation
  
  1. Download the latest release from the [releases](https://github.com/neto737/FaucetPay-FOSSBilling/releases/latest)
  2. Create a new folder named \`FaucetPay\` in the \`/library/Payment/Adapter\` directory of your FOSSBilling installation
  3. Extract the archive you've downloaded in the first step into the new directory
  4. Go to the "Payment gateways" page in your admin panel (under the "System" menu in the navigation bar) and find FaucetPay in the "New payment gateway" tab
  5. Click the cog icon next to FaucetPay to install and configure FaucetPay

  ## Licensing
  This extension is licensed under the MIT license. See the [LICENSE](LICENSE) file for more information.

  ## Disclaimer
  This extension is not affiliated with Basilisk Entertainment S.R.L in any way. FaucetPay is a registered trademark of Basilisk Entertainment S.R.L.
  `,
  },
  {
  id: "OpenProvider",
  type: "domain-registrar",
  name: "OpenProvider",
  description: "OpenProvider registrar extension for FOSSBilling",
  author: findAuthorByID("devife"),
  license: {
    name: "Apache 2.0",
    URL: "https://github.com/Devife/fossbilling-registrar-openprovider/blob/main/LICENSE",
  },
  source: {
    type: "github",
    repo: "Devife/fossbilling-registrar-openprovider",
  },
  version: "0.0.1",
  download_url:
    "https://github.com/Devife/fossbilling-registrar-openprovider/archive/refs/tags/0.0.1.zip",
  releases: [
    {
      tag: "0.0.1",
      date: "2024-12-05T10:00:00Z",
      download_url:
        "https://github.com/Devife/fossbilling-registrar-openprovider/archive/refs/tags/0.0.1.zip",
      changelog_url:
        "https://github.com/Devife/fossbilling-registrar-openprovider/commits/main/",
      min_fossbilling_version: "0.6",
    },
  ],
  icon_url:
    "https://avatars.githubusercontent.com/u/8396328?v=4",
  website: "https://devife.com",
  readme: `# OpenProvider Integration for FOSSBilling

This module integrates the OpenProvider domain registrar with FOSSBilling, enabling users to manage domain registration, transfer, and renewal directly from their FOSSBilling platform.

---

## Features

- **Domain Registration**: Register new domains using OpenProvider's API.
- **Domain Transfer**: Transfer existing domains to OpenProvider from FOSSBilling.
- **Domain Management**: Update DNS, WHOIS, and other settings directly.
- **Renewals**: Automate domain renewals through OpenProvider.

---

## Requirements

- **FOSSBilling**: Make sure you have FOSSBilling installed and properly configured.
- **OpenProvider Account**: An active account with OpenProvider is required to use their API.

---

## Installation

1. Clone this repository and copy the files to the root of your FOSSBilling installation:
   \`\`\`bash
   git clone https://github.com/Devife/fossbilling-registrar-openprovider.git
   \`\`\`
1. Navigate to the FOSSBilling admin panel.

1. Go to System > Domain registration > New domain registrar and enable the OpenProvider module.

1. Refresh the page, go to the Registrars tab and edit the OpenProvider settings

1. Enter your OpenProvider API credentials:
   - API URL: Live https://api.openprovider.eu (Sandbox http://api.sandbox.openprovider.nl:8480)
   - Username
   - Password
1. Save your configuration.

## Usage

1. Add OpenProvider as your registrar for specific TLDs in FOSSBilling.

1. Clients can register, transfer, or renew domains through your billing system, and the integration will communicate with OpenProvider's API to process requests.

1. Monitor and manage domain actions directly from your FOSSBilling admin panel.

## Troubleshooting

- Connection Issues: Ensure your server can connect to the OpenProvider API endpoint.
- API Errors: Double-check your credentials and ensure your OpenProvider account has sufficient privileges.
- PHP Errors: Verify if your PHP version is supported by FOSSBilling.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
1. Create a new branch (feature/your-feature).
1. Commit your changes.
1. Open a pull request with a detailed description.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

1. OpenProvider for their robust API.
1. FOSSBilling for their open-source billing platform.`,
},
{
  id: "Nominet",
  type: "domain-registrar",
  name: "Nominet",
  description: "Nominet EPP registrar extension for FOSSBilling - .uk domain registration",
  author: findAuthorByID("axyn"),
  license: {
    name: "Apache 2.0",
    URL: "https://github.com/AXYN-UK/nominet-fossbilling/blob/main/LICENSE",
  },
  source: {
    type: "github",
    repo: "AXYN-UK/nominet-fossbilling",
  },
  version: "1.0.0",
  download_url:
    "https://github.com/AXYN-UK/nominet-fossbilling/releases/download/v1.0.0/Nominet.php",
  releases: [
    {
      tag: "1.0.0",
      date: "2025-11-16T12:00:00Z",
      download_url:
        "https://github.com/AXYN-UK/nominet-fossbilling/releases/download/v1.0.0/Nominet.php",
      changelog_url:
        "https://github.com/AXYN-UK/nominet-fossbilling/releases/tag/v1.0.0",
      min_fossbilling_version: "0.6",
    },
  ],
  icon_url:
    "https://raw.githubusercontent.com/AXYN-UK/nominet-fossbilling/main/.github/nominet-icon.png",
  website: "https://www.axyn.co.uk",
  readme: `# Nominet EPP Registrar for FOSSBilling

Nominet EPP domain registrar adapter for FOSSBilling, enabling registration and management of .uk domains via Nominet's EPP interface.

## Features

- ✅ Domain availability checking
- ✅ Domain registration (.uk, .co.uk, .org.uk, .me.uk, .net.uk, .ltd.uk, .plc.uk, .sch.uk)
- ✅ Domain transfer
- ✅ Domain renewal
- ✅ Nameserver management
- ✅ Contact creation and modification
- ✅ EPP code retrieval
- ✅ Test mode support (Nominet testbed)

## Requirements

- FOSSBilling 0.6.0 or later
- PHP OpenSSL extension
- Nominet registrar account with EPP credentials
- Valid Nominet IPS Tag

## Installation

### Manual Installation

1. Download the latest release from the [GitHub repository](https://github.com/AXYN-UK/nominet-fossbilling/releases)
2. Extract the \`Nominet.php\` file to your FOSSBilling installation directory: \`/library/Registrar/Adapter/Nominet.php\`
3. Log in to your FOSSBilling admin panel
4. Navigate to **System → Domain registration → New domain registrar**
5. Find **Nominet** in the list and click the settings icon
6. Enter your configuration:
   - **Nominet Tag (IPS Tag)**: Your Nominet IPS Tag
   - **Password**: Your Nominet EPP password
   - **Test mode**: Select "Yes" for testbed, "No" for production

### Supported TLDs

- .uk
- .co.uk
- .org.uk
- .me.uk
- .net.uk
- .ltd.uk
- .plc.uk
- .sch.uk

## Getting Nominet Credentials

To use this extension, you need to be a registered Nominet registrar:

1. **Become a Nominet Registrar**: Visit [Nominet's registrar page](https://registrars.nominet.uk/uk-namespace/registration-and-domain-management/new-registrars/becoming-a-uk-namespace-registrar/)
2. **Get your IPS Tag**: Your unique Nominet identifier
3. **Generate EPP credentials**: Through Nominet's Online Services portal
4. **Test in OT&E**: Use the testbed environment before going live

## EPP Protocol

This adapter uses the Extensible Provisioning Protocol (EPP) as specified by:
- [RFC 5730](https://tools.ietf.org/html/rfc5730) - EPP base protocol
- [RFC 5731](https://tools.ietf.org/html/rfc5731) - EPP domain mapping
- [RFC 5733](https://tools.ietf.org/html/rfc5733) - EPP contact mapping

Connection details:
- **Production**: epp.nominet.uk:700 (SSL/TLS)
- **Testbed**: testbed-epp.nominet.uk:700 (SSL/TLS)

## Troubleshooting

### Connection Issues

If you see "Failed to connect to EPP server" errors:

1. **Check OpenSSL**: Ensure PHP has the OpenSSL extension enabled
2. **Verify credentials**: Double-check your IPS Tag and password in FOSSBilling
3. **Test connectivity**: EPP servers don't respond to ping/nslookup - this is normal
4. **Firewall**: Ensure outbound connections to port 700 are allowed
5. **Test mode**: Try enabling test mode to use the testbed environment

### EPP Errors

Check FOSSBilling logs for detailed EPP error messages:
- Application logs: \`/data/log/application/\`

Common EPP result codes:
- \`1000\`: Command completed successfully
- \`2001\`: Command syntax error
- \`2201\`: Authorization error
- \`2302\`: Object exists
- \`2303\`: Object does not exist

## License

Copyright 2025 AXYN

Licensed under the Apache License, Version 2.0. See the [LICENSE](https://github.com/AXYN-UK/nominet-fossbilling/blob/main/LICENSE) file for details.

## Support

- **Documentation**: [Nominet Registrar Resources](https://registrars.nominet.uk/)
- **EPP Guide**: [Nominet EPP Documentation](https://registrars.nominet.uk/uk-namespace/registration-and-domain-management/registration-systems/epp/)
- **Issues**: [GitHub Issues](https://github.com/AXYN-UK/nominet-fossbilling/issues)
- **Website**: [AXYN](https://www.axyn.co.uk)

## Acknowledgments

- Nominet for providing EPP access to .uk domain registration
- FOSSBilling for the open-source billing platform`,
},
{
  id: "TwoFactorAuth",
  type: "mod",
  name: "Two-Factor Authentication",
  description: "Add TOTP-based two-factor authentication (2FA) to enhance account security. Works with Google Authenticator, Authy, and other authenticator apps.",
  author: findAuthorByID("axyn"),
  license: {
    name: "Apache 2.0",
    URL: "https://github.com/AXYN-UK/2fa-fossbilling/blob/main/LICENSE",
  },
  source: {
    type: "github",
    repo: "AXYN-UK/2fa-fossbilling",
  },
  version: "1.0.0",
  download_url:
    "https://github.com/AXYN-UK/2fa-fossbilling/releases/download/v1.0.0/TwoFactorAuth.php",
  releases: [
    {
      tag: "1.0.0",
      date: "2025-11-16T15:57:00Z",
      download_url:
        "https://github.com/AXYN-UK/2fa-fossbilling/releases/download/v1.0.0/TwoFactorAuth.php",
      changelog_url:
        "https://github.com/AXYN-UK/2fa-fossbilling/releases/tag/v1.0.0",
      min_fossbilling_version: "0.6",
    },
  ],
  icon_url:
    "https://raw.githubusercontent.com/AXYN-UK/2fa-fossbilling/main/.github/2fa-icon.png",
  website: "https://www.axyn.co.uk",
  readme: `# Two-Factor Authentication Extension for FOSSBilling

Add TOTP (Time-based One-Time Password) authentication to FOSSBilling to protect client accounts with an additional layer of security.

## Features

✅ **TOTP Authentication** - Industry-standard RFC 6238 compliant time-based codes
✅ **Universal Compatibility** - Works with Google Authenticator, Authy, Microsoft Authenticator, and more
✅ **QR Code Setup** - Quick enrollment by scanning QR codes
✅ **Backup Codes** - 10 one-time recovery codes for account access
✅ **Client Self-Service** - Clients can enable/disable 2FA independently
✅ **Admin Controls** - View statistics and force-disable for account recovery
✅ **No External Dependencies** - Pure PHP implementation, no additional libraries required
✅ **Secure** - Timing-safe verification, bcrypt-hashed backup codes

## Requirements

- FOSSBilling 0.6.0 or later
- PHP 7.4 or later
- PHP extensions: json, hash (standard)

## Installation

### Automatic (Admin Panel)

1. Download the extension from the FOSSBilling extension directory
2. Log in to your FOSSBilling admin panel
3. Navigate to **Extensions → Extensions**
4. Find "Two-Factor Authentication" and click **Install**
5. Activate the extension

### Manual Installation

1. Download the latest release files from [GitHub releases](https://github.com/AXYN-UK/2fa-fossbilling/releases):
   - \`TwoFactorAuth.php\`
   - \`Api_Client.php\`
   - \`Api_Admin.php\`

2. Upload to your FOSSBilling installation:
   - \`TwoFactorAuth.php\` → \`/library/Box/Mod/Twofactorauth/Service.php\`
   - \`Api_Client.php\` → \`/library/Box/Mod/Twofactorauth/Api/Client.php\`
   - \`Api_Admin.php\` → \`/library/Box/Mod/Twofactorauth/Api/Admin.php\`

3. Go to **Extensions → Extensions** in admin panel
4. Activate "Two-Factor Authentication"

## Client Usage

### Enabling 2FA

1. Log in to your client account
2. Install an authenticator app on your phone:
   - [Google Authenticator](https://support.google.com/accounts/answer/1066447) (iOS/Android)
   - [Authy](https://authy.com/) (iOS/Android/Desktop)
   - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app) (iOS/Android)

3. Call the API endpoint to generate QR code:
   \`\`\`
   POST /api/client/twofactorauth/enable
   \`\`\`

4. Scan the QR code with your authenticator app
5. Enter the 6-digit code to activate:
   \`\`\`
   POST /api/client/twofactorauth/activate
   {"code": "123456"}
   \`\`\`

6. **Save your backup codes** - they're shown only once!

### Logging In with 2FA

After enabling 2FA, logins require an additional step:
1. Enter username and password as normal
2. When prompted, enter the 6-digit code from your authenticator app
3. Or use a backup code if you don't have access to your device

### Disabling 2FA

\`\`\`
POST /api/client/twofactorauth/disable
{"code": "123456"}
\`\`\`

## Admin API

### Get Client 2FA Status

\`\`\`
POST /api/admin/twofactorauth/client_status
{"client_id": 123}
\`\`\`

Returns:
- \`enabled\`: Boolean
- \`backup_codes_remaining\`: Number

### View Platform Statistics

\`\`\`
POST /api/admin/twofactorauth/get_stats
\`\`\`

Returns:
- \`total_clients\`: Total registered clients
- \`clients_with_2fa\`: Clients with 2FA enabled
- \`adoption_percentage\`: Percentage of clients using 2FA

### Emergency 2FA Removal

\`\`\`
POST /api/admin/twofactorauth/force_disable
{"client_id": 123}
\`\`\`

⚠️ **Use with caution** - This bypasses all security checks and is logged.

### List Clients with 2FA

\`\`\`
POST /api/admin/twofactorauth/list_clients
{
  "page": 1,
  "per_page": 25,
  "filter": "enabled"
}
\`\`\`

## How It Works

This extension implements the **TOTP (Time-based One-Time Password)** algorithm as specified in [RFC 6238](https://tools.ietf.org/html/rfc6238):

1. **Secret Generation**: A unique 16-character Base32-encoded secret is created for each user
2. **Time Synchronization**: Both server and authenticator app use the current time divided into 30-second windows
3. **Code Generation**: HMAC-SHA1 algorithm generates a 6-digit code from the secret + time window
4. **Verification**: Server accepts codes from current time window ± 30 seconds (90 seconds total) to account for clock drift

### Security Features

- **Timing-Safe Verification**: Uses \`hash_equals()\` to prevent timing attacks
- **Bcrypt Backup Codes**: One-time recovery codes are hashed using bcrypt
- **One-Time Use**: Each backup code is deleted after successful use
- **Admin Logging**: Force-disable actions are logged with admin ID and timestamp

## Troubleshooting

### "Invalid verification code"

**Causes:**
- Server and device time are out of sync (±90 seconds tolerance)
- Code already used (each code valid only once)
- Code manually typed incorrectly

**Solutions:**
- Check server time: \`date\` command
- Verify device time is set to automatic
- Ensure authenticator app is synced
- Try waiting for next code (codes refresh every 30 seconds)

### Lost Access to Authenticator Device

1. Use a backup code (provided during enrollment)
2. Contact administrator for account recovery
3. Admin can use \`force_disable\` API to remove 2FA

### Codes Not Working

- Verify the secret was entered correctly during setup
- Re-enroll by disabling and re-enabling 2FA
- Check system time on both server and client device

## Best Practices

### For Clients

✅ **Save backup codes** in a secure location (password manager)
✅ **Enable 2FA** on all important accounts
✅ **Use a trusted authenticator app** (Google Authenticator, Authy)
⛔ **Never share** your secret key or QR code
⛔ **Don't screenshot** QR codes or backup codes on insecure devices

### For Administrators

✅ **Monitor adoption** with statistics API
✅ **Document recovery** procedures for lost devices
✅ **Log all force-disable** actions for auditing
✅ **Test thoroughly** before production deployment
⛔ **Avoid overusing** force-disable (defeats security purpose)

## Development & Testing

### Running Tests

\`\`\`bash
# Standalone TOTP algorithm test
php /tmp/test_2fa_standalone.php
\`\`\`

### Integration Example

\`\`\`twig
{# In login template #}
{% if needs_2fa %}
  <form method="post" action="{{ 'api/client/twofactorauth/verify'|link }}">
    <input type="text" name="code" placeholder="6-digit code" maxlength="6" autocomplete="one-time-code">
    <button type="submit">Verify</button>
    <p>Or use a <a href="#backup">backup code</a></p>
  </form>
{% endif %}
\`\`\`

## License

Copyright 2025 AXYN

Licensed under the Apache License, Version 2.0. See the [LICENSE](https://github.com/AXYN-UK/2fa-fossbilling/blob/main/LICENSE) file for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/AXYN-UK/2fa-fossbilling/issues)
- **Documentation**: [README.md](https://github.com/AXYN-UK/2fa-fossbilling/blob/main/README.md)
- **Website**: [AXYN](https://www.axyn.co.uk)

## Security Disclosure

If you discover a security vulnerability, please email security@axyn.co.uk with details. Do not create a public GitHub issue.

## Acknowledgments

- RFC 6238 TOTP specification authors
- FOSSBilling for the open-source billing platform
- The security community for best practices`,
},
{
  id: "AmazonPay",
  type: "payment-gateway",
  name: "Amazon Pay",
  description: "Amazon Pay payment gateway for FOSSBilling - Accept payments via Amazon Pay",
  author: findAuthorByID("axyn"),
  license: {
    name: "Apache 2.0",
    URL: "https://github.com/AXYNUK/fossbilling-amazonpay/blob/main/LICENSE",
  },
  source: {
    type: "github",
    repo: "AXYNUK/fossbilling-amazonpay",
  },
  version: "1.0.0",
  download_url:
    "https://github.com/AXYNUK/fossbilling-amazonpay/releases/download/v1.0.0/AmazonPay.zip",
  releases: [
    {
      tag: "1.0.0",
      date: "2025-11-24T12:00:00Z",
      download_url:
        "https://github.com/AXYNUK/fossbilling-amazonpay/releases/download/v1.0.0/AmazonPay.zip",
      changelog_url:
        "https://github.com/AXYNUK/fossbilling-amazonpay/releases/tag/v1.0.0",
      min_fossbilling_version: "0.6",
    },
  ],
  icon_url:
    "https://raw.githubusercontent.com/AXYNUK/fossbilling-amazonpay/main/.github/amazonpay-icon.png",
  website: "https://www.axyn.co.uk",
  readme: `# Amazon Pay Gateway for FOSSBilling

Amazon Pay payment gateway adapter for FOSSBilling, enabling secure payments through Amazon Pay.

## Features

- ✅ One-time payments
- ✅ Recurring billing support
- ✅ Sandbox mode for testing
- ✅ Multi-region support (EU, US, JP)
- ✅ Authorize and capture or authorize only
- ✅ Secure API key management
- ✅ Comprehensive transaction logging

## Requirements

- FOSSBilling 0.6.0 or later
- PHP 8.1 or later
- Composer
- Amazon Pay merchant account
- Amazon Pay API credentials (Public Key ID, Private Key, Merchant ID)

## Installation

### Via FOSSBilling Extension Directory (Recommended)

The easiest way to install this extension is by using the [FOSSBilling extension directory](https://extensions.fossbilling.org/extension/AmazonPay).

### Manual installation

1. Download the latest release from the [GitHub repository](https://github.com/AXYNUK/fossbilling-amazonpay/releases)
2. Create a new folder named \`AmazonPay\` in the \`/library/Payment/Adapter\` directory of your FOSSBilling installation
3. Extract the archive you've downloaded in the first step into the new directory
4. Run \`composer require amzn/amazon-pay-api-sdk-php\` in your FOSSBilling root directory
5. Go to the "Payment gateways" page in your admin panel (under the "System" menu in the navigation bar) and find Amazon Pay in the "New payment gateway" tab
6. Click the cog icon next to Amazon Pay to install and configure

## Configuration

Configure the following fields in the FOSSBilling admin panel:

- **Public Key ID**: Obtain from Amazon Seller Central > Integration Central
- **Private Key (.pem)**: The private key you generated in Seller Central
- **Merchant ID**: Your Amazon Pay merchant ID
- **Region**: Select your region (EU, US, JP)
- **Sandbox Mode**: Enable for testing
- **Payment Action**: Choose Authorize (capture later) or AuthorizeWithCapture (immediate)

## Testing

- Use Amazon Pay sandbox credentials for testing
- Test both one-time and recurring payments
- Check FOSSBilling logs for detailed transaction information

## Documentation

See the \`/docs\` folder for:
- Configuration guide
- Security best practices
- Webhook handling
- Testing procedures

## Support

For issues or questions:
- GitHub: [https://github.com/AXYNUK/fossbilling-amazonpay/issues](https://github.com/AXYNUK/fossbilling-amazonpay/issues)
- Email: support@axyn.co.uk

## License

Apache-2.0

## Disclaimer

This extension is not officially affiliated with Amazon Pay or FOSSBilling. Amazon Pay is a registered trademark of Amazon.com, Inc.`,
},
];
