import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

function createNodeMock(element) {
  return { offsetLeft: 0, style: {} }
}

initStoryshots({
  configPath: path.resolve(__dirname, '..', '..', '..', '.storybook'),
  test: snapshotWithOptions({
    createNodeMock
  })
})
