import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

initStoryshots({
  configPath: path.resolve(__dirname, '../../../../.storybook'),
  framework: 'react',
  test: snapshotWithOptions(() => ({ createNodeMock }))
})

function createNodeMock(el) {
  return document.createElement(el?.type || 'div')
}
