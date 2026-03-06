const sidebars = {
  docs: [
    'intro',
    'quickstart',

    {
      type: 'category',
      label: 'Protocol',
      items: [
        'protocol',
        'protocol/architecture',
        'protocol/decision-artifact',
        'protocol/cryptography',
        'protocol/lifecycle',
      ],
    },

    {
      type: 'category',
      label: 'Components',
      items: [
        'cli',
        'registry',
      ],
    },

    {
      type: 'category',
      label: 'Research',
      items: [
        'research/index',
        'research/decision-integrity-theory',
        'research/deterministic-governance',
        'research/transparency-ledger-model',
        'research/decision-artifact-specification',
      ],
    },

    {
      type: 'category',
      label: 'Whitepaper',
      items: [
        'whitepaper/dip-whitepaper',
      ],
    },
  ],
};

module.exports = sidebars;