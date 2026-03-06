const sidebars = {
  tutorialSidebar: [

    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro'
      ],
    },

    {
      type: 'category',
      label: 'Protocol',
      items: [
        'protocol/architecture',
        'protocol/decision-artifact',
        'protocol/cryptography',
      ],
    },

    {
      type: 'category',
      label: 'Components',
      items: [
        'components/cli',
        'components/registry',
        'components/verifier',
      ],
    },

    {
      type: 'category',
      label: 'Research',
      items: [
        'research/deterministic-governance',
        'research/decision-artifact-specification'
      ],
    },

    {
      type: 'category',
      label: 'Whitepaper',
      items: [
        'whitepaper/dip-whitepaper'
      ],
    },

  ],
};

module.exports = sidebars;