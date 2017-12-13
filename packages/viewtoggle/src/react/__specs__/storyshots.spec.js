import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

function createNodeMock(element) {
  return { offsetLeft: 0, style: {} }
  // if (
  //   element.type === 'button' ||
  //   element.type === 'div' ||
  //   element.type === 'span'
  // ) {
  //   return { style: {} }
  // }
  // return null
}

initStoryshots({
  test: snapshotWithOptions({
    createNodeMock
  })
})
