export const extensions: Extension[] = [
  // ... autres extensions existantes
  {
    id: "wp-integration",
    type: "mod",
    name: "WordPress Integration",
    description: "Integrates FOSSBilling with WordPress using RabbitMQ",
    version: "1.0.0",
    download_url: "https://github.com/Hamza-180/fossbilling-wp-integration/releases/download/v1.0.0/fossbilling-wp-integration-v1.0.0.zip",
    releases: [
      {
        tag: "1.0.0",
        date: "2024-08-07T00:00:00Z",
        download_url: "https://github.com/Hamza-180/fossbilling-wp-integration/releases/download/v1.0.0/fossbilling-wp-integration-v1.0.0.zip",
        changelog_url: "https://github.com/Hamza-180/fossbilling-wp-integration/releases/tag/v1.0.0",
        min_fossbilling_version: "0.6",
      },
    ],
    author: {
      name: "Hamza",
      url: "https://github.com/Hamza-180"
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0"
    },
    source: {
      type: "github",
      repo: "Hamza-180/fossbilling-wp-integration"
    },
    icon_url: "https://your-website.com/path/to/icon.png",
    website: "https://github.com/Hamza-180/fossbilling-wp-integration",
    readme: `
      # WordPress Integration for FOSSBilling
      
      This module integrates WordPress with FOSSBilling, allowing seamless management of billing through your WordPress site.
      
      ## Installation
      
      1. Download the latest release from the [GitHub repository](https://github.com/Hamza-180/fossbilling-wp-integration/releases).
      2. Upload the ZIP file through your WordPress admin panel under Plugins > Add New > Upload Plugin.
      3. Activate the plugin from the Plugins page.
      
      ## Configuration
      
      After activation, navigate to the FOSSBilling settings in your WordPress admin panel to configure the integration.
      
      ## Features
      
      - Seamless integration with FOSSBilling
      - Easy configuration through the WordPress admin panel
      - Automatic updates and notifications
      
      ## License
      
      This extension is licensed under the Apache 2.0 license. See the [LICENSE](LICENSE) file for more information.
    `,
  },
];
