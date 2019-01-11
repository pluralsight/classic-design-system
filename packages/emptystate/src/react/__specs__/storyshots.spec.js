import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock('@pluralsight/ps-design-system-storybook-addon-center')
jest.mock('@pluralsight/ps-design-system-storybook-addon-theme')

jest.mock('../resize-observer')

const createNodeMock = el => document.createElement('div')

initStoryshots({
  configPath: path.resolve(__dirname, '..', '..', '..', '.storybook'),
  test: snapshotWithOptions({ createNodeMock })
})
