import path from 'path'
import React from 'react'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock('../__stories__/focusable', () => props => <div {...props} />)

const createNodeMock = () => document.createElement('div')

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  framework: 'react',
  test: snapshotWithOptions({ createNodeMock })
})
