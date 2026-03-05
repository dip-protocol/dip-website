// @ts-check

const config = {
  title: 'Decision Integrity Protocol',
  tagline: 'Deterministic and cryptographically verifiable decision artifacts',
  favicon: 'img/favicon.ico',

  url: 'https://dip-protocol.github.io',
  baseUrl: '/dip-website/',

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
          routeBasePath: 'docs',
          editUrl:
            'https://github.com/dip-protocol/dip-website/tree/main/site/',
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
      logo: {
        alt: 'DIP Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/intro',
          label: 'Documentation',
          position: 'left',
        },
        {
          href: 'https://github.com/dip-protocol/dip-spec',
          label: 'Specification',
          position: 'left',
        },
        {
          href: 'https://github.com/dip-protocol/dip-cli',
          label: 'CLI',
          position: 'left',
        },
        {
          href: 'https://github.com/dip-protocol/dip-registry',
          label: 'Registry',
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
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Protocol',
              to: '/docs/protocol',
            },
            {
              label: 'Architecture',
              to: '/docs/architecture',
            },
          ],
        },
        {
          title: 'Repositories',
          items: [
            {
              label: 'DIP Specification',
              href: 'https://github.com/dip-protocol/dip-spec',
            },
            {
              label: 'DIP CLI',
              href: 'https://github.com/dip-protocol/dip-cli',
            },
          ],
        },
        {
          title: 'Community',
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