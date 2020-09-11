module.exports = {
  addons: [
    {
      name: '@pluralsight/ps-design-system-storybook-preset',
      options: {}
    }
  ],
  stories: ['../src/**/*.story.@(js|ts|tsx)'],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript'
  }
}
