// @ts-check

const config = {
  title: 'Decision Integrity Protocol',
  tagline: 'Deterministic Governance and Verifiable Decision Systems',
  favicon: 'img/favicon.ico',

  url: 'https://deterministicgovernance.org',
  baseUrl: '/',

  organizationName: 'dip-protocol',
  projectName: 'dip-website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Decision Integrity Protocol',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/dip-protocol',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Research',
            items: [
              {
                label: 'DIP Research Papers',
                to: '/research/overview',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Decision Integrity Protocol`,
      },
    }),
};

module.exports = config;