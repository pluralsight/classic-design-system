import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

const createNodeMock = (_el: React.ReactElement) =>
  document.createElement('div')

initStoryshots({
  configPath: path.resolve(__dirname, '../../.storyshots'),
  framework: 'react',
  test: snapshotWithOptions(() => ({ createNodeMock }))
})
