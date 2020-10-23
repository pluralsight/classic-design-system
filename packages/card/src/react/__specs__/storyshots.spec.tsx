import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

const createNodeMock = () => document.createElement('div')

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  framework: 'react',
  // @ts-ignore: required for storyshots but missing from storyshots typings
  test: snapshotWithOptions({ createNodeMock })
})
