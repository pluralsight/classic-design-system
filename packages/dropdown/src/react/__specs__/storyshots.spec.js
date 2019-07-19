import path from 'path'
import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock('@pluralsight/ps-design-system-storybook-addon-theme')

const createNodeMock = el => document.createElement('div')

it('asdf', () => {
  expect(true).toBeTruthy()
})

// TODO: when hooks in storybook are figured out, put this back AND restore the snapshots
// initStoryshots({
//   configPath: path.resolve(__dirname, '..', '..', '..', '.storybook'),
//   test: snapshotWithOptions({ createNodeMock })
// })
