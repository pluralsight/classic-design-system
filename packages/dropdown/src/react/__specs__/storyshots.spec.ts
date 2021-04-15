import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

const createNodeMock = () => {
  document.createElement('div')
}

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook-storyshots'),
  framework: 'react',
  test: snapshotWithOptions({ createNodeMock })
})

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
})

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore()
})
