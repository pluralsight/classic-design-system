import * as path from 'path'
import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  configPath: path.resolve(__dirname, '../../../.storybook'),
  framework: 'react'
})
