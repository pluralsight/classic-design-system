import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock('@pluralsight/ps-design-system-util', () => ({
  ...jest.requireActual('@pluralsight/ps-design-system-util'),
  uniqueId: jest.fn().mockImplementation(prefix => prefix + 'unique-id')
}))

const createNodeMock = () => document.createElement('div')

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  framework: 'react',
  test: snapshotWithOptions({ createNodeMock })
})
