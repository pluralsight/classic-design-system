import path from 'path'
import initStoryshots from '@storybook/addon-storyshots'

jest.mock('@pluralsight/ps-design-system-util', () => ({
  ...jest.requireActual('@pluralsight/ps-design-system-util'),
  uniqueId: jest.fn().mockImplementation(prefix => prefix + 'unique-id'),
  useUniqueId: jest.fn().mockImplementation(prefix => prefix + 'unique-id')
}))

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  framework: 'react'
})

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
})

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore()
})
