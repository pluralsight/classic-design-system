import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock('@pluralsight/ps-design-system-storybook-addon-center')
jest.mock('@pluralsight/ps-design-system-storybook-addon-theme')

jest.mock('../../js/utils.js', () => ({
  ...jest.requireActual('../../js/utils.js'),
  uniqueId: jest
    .fn()
    .mockImplementation((prefix = '') => prefix + 'mock_unique_id')
}))

const createNodeMock = el => document.createElement('div')

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  framework: 'react',
  test: snapshotWithOptions({ createNodeMock })
})
