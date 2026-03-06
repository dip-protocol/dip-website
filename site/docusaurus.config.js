// @ts-check

const config = {

  title: 'Decision Integrity Protocol',
  tagline: 'Verifiable Decision Systems',

  url: 'https://dip-protocol.github.io',
  baseUrl: '/dip-website/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  favicon: 'img/favicon.ico',

  organizationName: 'dip-protocol',
  projectName: 'dip-website',

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    navbar: {
      title: 'DIP Documentation',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/dip-protocol',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  }),
};

module.exports = config;