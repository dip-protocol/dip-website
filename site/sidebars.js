const sidebars = {
  docs: [

    {
      type: 'category',
      label: 'Overview',
      items: [
        'intro',
        'why-dip-matters',
        'quickstart'
      ]
    },

    {
      type: 'category',
      label: 'Protocol Specification',
      items: [
        'protocol/protocol-overview',
        'protocol/architecture',
        'protocol/decision-artifact',
        'protocol/cryptography',
        'protocol/lifecycle'
      ]
    },

    {
      type: 'category',
      label: 'Reference Implementations',
      items: [
        'components/cli',
        'components/registry'
      ]
    },

    {
      type: 'category',
      label: 'Research Papers',
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
      label: 'Use Cases',
      items: [
        'use-cases/index',
        'use-cases/ai-governance',
        'use-cases/financial-systems',
        'use-cases/regulatory-compliance'
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

    {
      type: 'category',
      label: 'Project',
      items: [
        'builder',
        'market-opportunity',
        'roadmap'
      ]
    }

  ],
};

module.exports = sidebars;