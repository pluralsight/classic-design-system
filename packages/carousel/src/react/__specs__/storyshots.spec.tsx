import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock('../../js/utils', () => ({
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  ...(jest.requireActual('../../js/utils') as Record<string, unknown>),
  uniqueId: jest
    .fn()
    .mockImplementation((prefix = '') => prefix + 'mock_unique_id')
}))

const createNodeMock = () => document.createElement('div')

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  // @ts-ignore: required for storyshots but not in storyshot typings
  test: snapshotWithOptions({ createNodeMock }),
  framework: 'react'
})
