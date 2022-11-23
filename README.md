# FOSSBilling extension store
This is the FOSSBilling extension store. It is a collection of extensions for FOSSBilling. It is still under ongoing development, but we have a few extensions available for download right now.

You can find the extension store at [https://extensions.fossbilling.org](https://extensions.fossbilling.org).

## How to install an extension
### Automatically (recommended)
1. Log into your FOSSBilling admin panel
2. Go to the Extensions page
3. Click on the "Install" button next to the extension you want to install

### Manually
1. Download the extension archive from the extension store
2. Create a folder named the ID of the extension in the `bb-modules` folder of your FOSSBilling installation
3. Extract the archive there
4. Go to the Extensions page in your FOSSBilling admin panel and enable the extension

## How to submit an extension
Currently, the backend doesn't rely on a database, so you can't submit extensions through the website. You can submit extensions by creating a pull request on GitHub. We keep a list of extensions in the `utils/sample-data.ts` file. You can add your extension to the list by adding a new Extension object to the array.

## How to contribute
If you want to contribute to the extension store, you can do so by creating a pull request on GitHub. You can also create an issue if you have any questions or suggestions.

You also might want to join our [Discord server](https://fossbilling.org/discord) if you want to get in touch with us.

## License
Each module is licensed under the terms set by the author. Please see the `LICENSE` file in each module for more information.
This extension store is licensed under the Apache 2.0 license. See the `LICENSE` file for more information.