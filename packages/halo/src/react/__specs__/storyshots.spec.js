import initStoryshots from '@storybook/addon-storyshots'

jest.mock('@pluralsight/ps-design-system-storybook-addon-center')

jest.mock('../../../stories/focused', () => {
  const React = require('react')
  return props => <React.Fragment {...props} />
})

initStoryshots()
