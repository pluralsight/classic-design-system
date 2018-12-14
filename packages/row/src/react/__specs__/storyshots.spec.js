import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

const createNodeMock = el => document.createElement('div')

initStoryshots({
  test: snapshotWithOptions({ createNodeMock })
})
