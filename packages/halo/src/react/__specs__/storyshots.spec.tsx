import path from 'path'
import React from 'react'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock(
  '../__stories__/focusable',
  () => (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  framework: 'react'
})
