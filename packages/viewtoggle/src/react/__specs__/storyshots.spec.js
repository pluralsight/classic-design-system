import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

function createNodeMock(element) {
  return { offsetLeft: 0, style: {} }
}

initStoryshots({
  test: snapshotWithOptions({
    createNodeMock
  })
})
