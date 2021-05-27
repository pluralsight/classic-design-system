import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock('../src/util', () => ({
  ...jest.requireActual('../src/util'),
  useUniqueId: jest.fn().mockImplementation(prefix => prefix + 'unique-id')
}))

function createNodeMock(el) {
  return document.createElement('div')
}

initStoryshots({
  configPath: path.resolve(__dirname, '../.storybook'),
  framework: 'react',
  test: snapshotWithOptions({ createNodeMock })
})
