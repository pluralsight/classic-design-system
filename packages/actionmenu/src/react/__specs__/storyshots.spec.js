import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'
import React from 'react'

function createNodeMock(element) {
  return { focus() {} }
}

initStoryshots({
  test: snapshotWithOptions({
    createNodeMock
  })
})
