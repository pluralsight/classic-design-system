import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

function createNodeMock(element) {
  if (element.type === 'div') {
    return { style: {} }
  }
  return null
}

initStoryshots({
  configPath: path.resolve(__dirname, '..', '..', '..', '.storybook'),
  test: snapshotWithOptions({
    createNodeMock
  })
})
