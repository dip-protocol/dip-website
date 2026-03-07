const sidebars = {

  docsSidebar: [
    {
      type: 'doc',
      id: 'Intro',
      label: 'Introduction',
    },

    {
      type: 'doc',
      id: 'Architecture',
      label: 'Architecture',
    },

    {
      type: 'category',
      label: 'Research',
      items: [
        'research/overview',
        'research/dip-001',
      ],
    },

    {
      type: 'doc',
      id: 'QuickStart',
      label: 'Quick Start',
    },
  ],

};

module.exports = sidebars;