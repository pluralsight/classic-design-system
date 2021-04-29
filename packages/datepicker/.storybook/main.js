module.exports = {
  addons: ['@pluralsight/ps-design-system-storybook-preset'],
  stories: ['../src/**/*.story.@(js|ts|tsx)'],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript'
  },
}

