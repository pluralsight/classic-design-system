import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import initStoryshots from '@storybook/addon-storyshots'
import * as path from 'path'
import React from 'react'

jest.mock('../__stories__/focusable', () => (props: HTMLPropsFor<'div'>) => (
  <div {...props} />
))

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook-storyshots'),
  framework: 'react'
})
