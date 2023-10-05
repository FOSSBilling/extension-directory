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
    download_url: "https://github.com/FOSSBilling/example-module/releases/download/0.0.4/Example.zip",
    releases: [
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
    readme: `# Example module README file

    This module provides a starting point for the developers on creating their FOSSBilling module.
    
    Explore the files and comments in the code to understand the structure of the module better. See the social links on [our website](https://fossbilling.org) if you need further information. This module has its own [GitHub repository](https://github.com/FOSSBilling/example-module) where you can submit issues and pull requests.
    
    In general, we use modules to extend the functionality of FOSSBilling.
    
    All modules can communicate with the other modules using their API endpoints.
    
    ## Technical requirements about modules
    
    ## Required
    
    * Module folder has to contain a **manifest.json** file to describe itself. The module engine will look for this file to find information about your extension.
    
    ## Optional
    
    * **README.md** - A file which generally is used to hold a getting started guide or installation instructions for your module.
    * **html_admin** - A folder holding front-end templates (\`*.html.twig files\`) for the administrator panel.
    * **html_client** - A folder holding front-end templates (\`*.html.twig files\`) for the client / guest area.
    
    ### Controller folder
    
    * **Admin.php** - Defines the module's routes and navigation items for the administrator panel.
    * **Client.php** - Used to define the module's routes for the client / guest area.
    
    ### Api folder
    
    * **Admin.php** - Administrator API, only authorized administrators will be able to call these endpoints.
    * **Client.php** - Client API, only logged in clients will be able to call these endpoints.
    * **Guest.php** - Guest API, no authorization is needed for these endpoints. Don't provide confidential data over these endpoints. Anybody over the internet will be able to access these information, including bots.
    
    ## Tips
    
    We recommend hosting your extensions on a public [GitHub](https://github.com) repository.
    
    ### Automated compatibility checking
    
    As FOSSBilling evolves and matures, its internal functionality changes, which can create compatibility issues between your module and FOSSBilling.
    To help developers catch these issues early on, we've designed a workflow that enables you to perform a PHPStan analysis of your module with both the latest FOSSBilling release and its preview builds.
    While PHPStan cannot perform live tests, it's a useful tool to verify that your module doesn't reference missing functions, use incorrect types, or have other common low-level issues.
    
    #### Setup
    
    More in-depth instructions are planned. For now, check out the required files:
    
    * [php-ci.yml](https://github.com/FOSSBilling/example-module/blob/main/.github/workflows/php-ci.yml)
    * [phpstan.neon](https://github.com/FOSSBilling/example-module/blob/main/phpstan.neon)
    
    ## Licensing
    This extension is open source software and is released under the Apache v2.0 license. See [LICENSE](LICENSE) for the full license terms.
    
    This product includes the following third party work:
    * Open Source Iconography by [Pictogrammers](https://pictogrammers.com/) licensed under the [Pictogrammers Free License](https://pictogrammers.com/docs/general/license/).`,
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
    version: "0.0.2",
    download_url:
      "https://github.com/FOSSBilling/Mollie/releases/download/0.0.2/Mollie.zip",
    releases: [
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
    version: "1.0.0",
    download_url:
      "https://github.com/UddoktaPay/FOSSBilling/releases/download/1.0.0/UddoktaPay.zip",
    releases: [
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
];
