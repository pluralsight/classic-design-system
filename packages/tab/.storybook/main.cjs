module.exports = {
  addons: [
    {
      name: '@pluralsight/ps-design-system-storybook-preset',
      options: { center: false }
    }
  ],
  stories: ['../src/**/*.story.@(js|ts|tsx)'],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript'
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.mjs$/,
      type: 'javascript/auto'
    })
    return config
  }
}
