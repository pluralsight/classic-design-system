import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

const createNodeMock = () => document.createElement('div')

initStoryshots({
  configPath: path.resolve(__dirname, '../../../../.storybook'),
  test: snapshotWithOptions(() => ({ createNodeMock })),
  framework: 'react'
})
