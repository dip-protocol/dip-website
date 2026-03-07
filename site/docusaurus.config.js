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
          to: '/intro',
          label: 'Documentation',
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
          title: 'Documentation',
          items: [
            {
              label: 'Intro',
              to: '/intro',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
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