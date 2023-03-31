# FOSSBilling extension directory
This is the FOSSBilling extension directory. It is a collection of extensions for FOSSBilling. It is still under ongoing development, but we have a few extensions available for download right now.

You can find the extension directory at [https://extensions.fossbilling.org](https://extensions.fossbilling.org).

## How to install an extension
### Automatically (recommended)
1. Log into your FOSSBilling admin panel
2. Go to the Extensions page
3. Click on the "Install" button next to the extension you want to install

### Manually
1. Download the extension archive from the extension directory
2. Create a folder named the ID of the extension in the `modules` folder of your FOSSBilling installation
3. Extract the archive there
4. Go to the Extensions page in your FOSSBilling admin panel and enable the extension

## How to submit an extension
Currently, the backend doesn't rely on a database, so you can't submit extensions through the website. You can submit extensions by creating a pull request on GitHub. We keep a list of extensions in the `data/data.ts` file. You can add your extension to the list by adding a new Extension object to the array.

## How to contribute
If you want to contribute to the extension directory, you can do so by creating a pull request on GitHub. You can also create an issue if you have any questions or suggestions.

You also might want to join our [Discord server](https://fossbilling.org/discord) if you want to get in touch with us.

### Running a local development server
Running the extension directory locally is fairly easy.

#### Install the dependencies
```bash
npm i
```

#### Start the development server
```bash
npm run dev
```

Most of your changes will be reflected instantly without needing to restart the development server.

## License
Each module is licensed under the terms set by the author. Please see the `LICENSE` file in each module for more information.
The extension directory website is licensed under the Apache 2.0 license. See the `LICENSE` file for more information.
