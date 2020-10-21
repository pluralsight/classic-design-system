import path from 'path'
import initStoryshots from '@storybook/addon-storyshots'

jest.mock('../../js/utils.js', () => ({
  ...jest.requireActual('../../js/utils.js'),
  uniqueId: jest
    .fn()
    .mockImplementation((prefix = '') => prefix + 'mock_unique_id')
}))

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  framework: 'react'
})
