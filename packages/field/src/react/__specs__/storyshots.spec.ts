import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock('@pluralsight/ps-design-system-util', () => {
  const actual = jest.requireActual('@pluralsight/ps-design-system-util')
  const mockUniqueId = (prefix: string) => `${prefix}unique-id`

  return {
    ...actual,
    uniqueId: jest.fn().mockImplementation(mockUniqueId),
    useUniqueId: jest.fn().mockImplementation(mockUniqueId)
  }
})

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  framework: 'react',
  test: snapshotWithOptions(() => ({ createNodeMock }))
})

function createNodeMock(el) {
  return document.createElement(el?.type || 'div')
}
