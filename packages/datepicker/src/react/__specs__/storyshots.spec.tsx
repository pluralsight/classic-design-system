import path from 'path'
import initStoryshots from '@storybook/addon-storyshots'

jest.mock(
  '@pluralsight/ps-design-system-util',
  () =>
    ({
      ...jest.requireActual('@pluralsight/ps-design-system-util')
    } as typeof jest)
)

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  framework: 'react'
})
