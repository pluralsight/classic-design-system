import initStoryshots from '@storybook/addon-storyshots'
import * as path from 'path'
import React from 'react'

jest.mock(
  '../__stories__/focusable',
  () => (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  framework: 'react'
})
