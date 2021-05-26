module.exports = {
  addons: ['@pluralsight/ps-design-system-storybook-preset'],
  stories: ['../menu-keys/**/*.story.@(js|ts|tsx)'],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript'
  },
}
