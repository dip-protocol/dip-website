// @ts-check

const config = {

  title: 'Decision Integrity Protocol',
  tagline: 'Deterministic Governance Infrastructure',
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
          to: '/Intro',   // link directly to intro page
          label: 'Documentation',
          position: 'left',
        },
        {
          to: '/research/overview',
          label: 'Research',
          position: 'left',
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
        {
          title: 'Developer Resources',
          items: [
            {
              label: 'GitHub Organization',
              href: 'https://github.com/dip-protocol',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Decision Integrity Protocol`,
    },

  },

};

module.exports = config;