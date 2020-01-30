import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

import React from 'react'

jest.mock('@pluralsight/ps-design-system-storybook-addon-center')
jest.mock('../__stories__/focusable.js', () => props => <div {...props} />)

const createNodeMock = el => document.createElement('div')

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  framework: 'react',
  test: snapshotWithOptions({ createNodeMock })
})
