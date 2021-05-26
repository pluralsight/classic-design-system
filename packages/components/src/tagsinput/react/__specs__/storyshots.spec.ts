import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock('../../../util', () => {
  const actual = jest.requireActual('../../../util')
  const mockUniqueId = (prefix: string) => `${prefix}unique-id`

  return {
    ...actual,
    uniqueId: jest.fn().mockImplementation(mockUniqueId),
    useUniqueId: jest.fn().mockImplementation(mockUniqueId)
  }
})

initStoryshots({
  configPath: path.resolve(__dirname, '../../.storyshots'),
  framework: 'react',
  test: snapshotWithOptions(() => ({ createNodeMock }))
})

function createNodeMock(el) {
  return document.createElement(el?.type || 'div')
}
