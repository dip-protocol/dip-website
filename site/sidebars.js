const sidebars = {
  docs: [

    'why-dip-matters',
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
        'protocol/lifecycle'
      ]
    },

    {
      type: 'category',
      label: 'Components',
      items: [
        'cli',
        'registry'
      ]
    },

    {
      type: 'category',
      label: 'Research',
      items: [
        'research/index',
        'research/deterministic-governance',
        'research/decision-artifact-specification',
        'research/transparency-ledger-model',
        'research/decision-integrity-theory',
        'research/verifiable-decision-infrastructure'
      ]
    },

    {
      type: 'category',
      label: 'Whitepaper',
      items: [
        'whitepaper',
        'whitepaper/dip-whitepaper'
      ]
    },

    'architecture'

  ],
};

module.exports = sidebars;