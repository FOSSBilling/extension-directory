# FOSSBilling Extensions

The FOSSBilling Extensions site is the official directory for extensions that can be discovered and installed by FOSSBilling users.

Visit the directory at [extensions.fossbilling.org](https://extensions.fossbilling.org).

## About the Directory

The directory helps FOSSBilling users find compatible modules, themes, payment gateways, server managers, domain registrars, hooks, and translations.

Only extensions that can be auto-installed from within FOSSBilling are listed at this time. Other community extensions may still be available through the FOSSBilling documentation, GitHub, or individual maintainers.

## Installing Extensions

The recommended way to install an extension is from your FOSSBilling admin panel:

1. Log in to your FOSSBilling admin panel.
2. Open the Extensions page.
3. Find the extension you want to install.
4. Click Install.

Extensions can also be installed manually by downloading an archive, extracting it into the correct FOSSBilling extension folder, and enabling it from the admin panel.

## Submitting Extensions

Extension submission is currently paused while self-service submission and management are being prepared.

If you maintain an extension and would like it to be listed, please open an issue in this repository with a link to the extension and any relevant installation details.

## Badges

The FOSSBilling API provides badges that extension authors can use in README files or project pages.

Examples:

```text
https://api.fossbilling.net/extensions/v1/Example/badges/version
https://api.fossbilling.net/extensions/v1/Example/badges/min_fossbilling_version
https://api.fossbilling.net/extensions/v1/Example/badges/license
```

Badge colors can be customized with a `?color=` query parameter.

## Contributing

Issues and pull requests are welcome. Useful contributions include bug reports, accessibility improvements, UI fixes, documentation updates, and improvements to extension metadata handling.

For broader discussion, join the FOSSBilling community on [Discord](https://fossbilling.org/discord).

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site uses Cloudflare D1 for extension data, so some pages require a populated local D1 database or a Wrangler-powered local environment to fully match production.

## License

The extension directory website is licensed under the GNU Affero General Public License Version 3. See [LICENSE](./LICENSE) for details.

Individual extensions are licensed by their respective authors.
