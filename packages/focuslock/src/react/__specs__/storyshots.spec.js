import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock('@pluralsight/ps-design-system-storybook-addon-center')

const createNodeMock = el => document.createElement('div')

initStoryshots({
  test: snapshotWithOptions({ createNodeMock })
})
