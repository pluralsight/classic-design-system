import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock('../../js/utils', () => {
  const original = jest.requireActual('../../js/utils.ts')
  const uniqueId = jest
    .fn()
    .mockImplementation((prefix = '') => `${prefix}mock_unique_id`)

  return { ...original, uniqueId }
})

const createNodeMock = () => document.createElement('div')

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  test: snapshotWithOptions(() => ({ createNodeMock })),
  framework: 'react'
})
