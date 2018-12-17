import path from 'path'
import initStoryshots from '@storybook/addon-storyshots'

jest.mock('@pluralsight/ps-design-system-storybook-addon-center')
jest.mock('@pluralsight/ps-design-system-storybook-addon-theme')

initStoryshots({
  configPath: path.resolve(__dirname, '..', '..', '..', '.storybook')
})
