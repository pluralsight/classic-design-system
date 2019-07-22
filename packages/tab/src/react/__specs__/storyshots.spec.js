import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock('@pluralsight/ps-design-system-storybook-addon-theme')

const createNodeMock = el => document.createElement('div')

initStoryshots({
  framework: 'react',
  test: snapshotWithOptions({ createNodeMock })
})
