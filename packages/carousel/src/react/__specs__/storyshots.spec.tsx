import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock('../../js/utils', () => ({
  ...(jest.requireActual('../../js/utils') as Record<string, unknown>),
  uniqueId: jest
    .fn()
    .mockImplementation((prefix = '') => prefix + 'mock_unique_id')
}))

const createNodeMock = () => document.createElement('div')

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  // @ts-ignore
  test: snapshotWithOptions({ createNodeMock }),
  framework: 'react'
})
