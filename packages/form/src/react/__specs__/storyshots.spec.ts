import path from 'path'
import initStoryshots from '@storybook/addon-storyshots'

jest.mock('@pluralsight/ps-design-system-util', () => ({
  ...jest.requireActual('@pluralsight/ps-design-system-util'),
  useUniqueId: jest.fn().mockImplementation(prefix => prefix + 'unique-id')
}))

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  framework: 'react'
})
