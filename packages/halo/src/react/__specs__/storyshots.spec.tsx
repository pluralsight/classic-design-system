import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import path from 'path'
import React from 'react'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock('../__stories__/focusable', () => (props: HTMLPropsFor<'div'>) => (
  <div {...props} />
))

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  framework: 'react'
})
