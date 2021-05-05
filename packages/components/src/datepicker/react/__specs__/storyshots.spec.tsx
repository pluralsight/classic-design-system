import path from 'path'
import initStoryshots from '@storybook/addon-storyshots'

jest.mock(
  '../../../util',
  () =>
    ({
      ...jest.requireActual('../../../util'),
      useUniqueId: jest.fn().mockImplementation(prefix => prefix + 'unique-id')
    } as typeof jest)
)

initStoryshots({
  configPath: path.resolve(__dirname, '../../../../.storybook'),
  framework: 'react'
})
