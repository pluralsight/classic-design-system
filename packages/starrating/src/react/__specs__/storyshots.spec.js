import initStoryshots from '@storybook/addon-storyshots'

jest.mock('react-dom', () => {
  return {
    render: () => null,
    unmountComponentAtNode: () => null,
    findDOMNode: () => {
      return {}
    }
  }
})

initStoryshots()
