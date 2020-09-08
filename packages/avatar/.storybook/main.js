module.exports = {
  addons: [
    // '@pluralsight/ps-design-system-storybook-addon-center',
    // '@pluralsight/ps-design-system-storybook-addon-theme'
  ],
  stories: ['../src/**/*.story.@(js|tsx)'],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {}
  }
}
