// @ts-check

const config = {

  title: 'Decision Integrity Protocol',
  tagline: 'Deterministic Governance Infrastructure',
  favicon: 'img/favicon.ico',

  url: 'https://deterministicgovernance.org',
  baseUrl: '/',

  organizationName: 'dip-protocol',
  projectName: 'dip-website',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',   // docs become homepage
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Decision Integrity Protocol',
      items: [
        {
          to: '/',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: '/docs/intro',
          label: 'Intro',
          position: 'left',
        },
        {
          href: 'https://github.com/dip-protocol',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },

};

module.exports = config;