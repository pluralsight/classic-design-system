import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

const createNodeMock = () => document.createElement('div')

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  framework: 'react',

  // @ts-ignore: storyshots tests require it, but it's not in storyshots typings
  test: snapshotWithOptions({ createNodeMock })
})
