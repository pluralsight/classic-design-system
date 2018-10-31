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
  test: snapshotWithOptions({
    createNodeMock
  })
})
