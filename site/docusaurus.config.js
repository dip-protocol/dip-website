// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Decision Integrity Protocol',
  tagline: 'Verifiable Decision Infrastructure',
  favicon: 'img/favicon.ico',

  url: 'https://dip-protocol.github.io',
  baseUrl: '/dip-website/',

  organizationName: 'dip-protocol',
  projectName: 'dip-website',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
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
      title: 'DIP',
      logo: {
        alt: 'DIP Logo',
        src: 'img/dip-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/why-dip-matters',
          label: 'Why DIP',
          position: 'left',
        },
        {
          to: '/docs/market-opportunity',
          label: 'Market',
          position: 'left',
        },
        {
          to: '/docs/roadmap',
          label: 'Roadmap',
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
          title: 'Docs',
          items: [
            {
              label: 'Why DIP Matters',
              to: '/docs/why-dip-matters',
            },
            {
              label: 'Market Opportunity',
              to: '/docs/market-opportunity',
            },
            {
              label: 'Roadmap',
              to: '/docs/roadmap',
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