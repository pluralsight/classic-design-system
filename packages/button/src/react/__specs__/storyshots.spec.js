import path from 'path'
import initStoryshots from '@storybook/addon-storyshots'

jest.mock('@pluralsight/ps-design-system-storybook-addon-center')

initStoryshots({
  configPath: path.resolve(__dirname, '..', '..', '..', '.storybook')
})
