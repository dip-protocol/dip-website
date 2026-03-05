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
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/dip-protocol/dip-website/tree/main/site/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'DIP',
      logo: {
        alt: 'DIP Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/intro',
          label: 'Docs',
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
          ],
        },
        {
          title: 'Community',
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