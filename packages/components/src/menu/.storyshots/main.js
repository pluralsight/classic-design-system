module.exports = {
  addons: ['@pluralsight/ps-design-system-storybook-preset'],
  stories: ['../react/**/*.story.@(js|ts|tsx)'],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript'
  },
}
