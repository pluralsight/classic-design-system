import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

jest.mock('@pluralsight/ps-design-system-storybook-addon-center')
jest.mock('@pluralsight/ps-design-system-storybook-addon-theme')
// jest.mock('@pluralsight/ps-design-system-storybook-addon-theme', () => fn => {
//   return fn()
// })

const createNodeMock = el => document.createElement('div')

initStoryshots({
  framework: 'react',
  test: snapshotWithOptions({ createNodeMock })
})
