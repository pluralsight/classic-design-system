import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock('@pluralsight/ps-design-system-storybook-addon-center')

const createNodeMock = el => document.createElement('div')

initStoryshots({
  configPath: path.resolve(__dirname, '..', '..', '..', '.storybook'),
  test: snapshotWithOptions({ createNodeMock })
})
