import path from 'path'
import initStoryshots from '@storybook/addon-storyshots'

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
