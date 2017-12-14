import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'
import React from 'react'

function createNodeMock(element) {
  return {}
}

// mocks for react-sizeme's use of findDOMNode and DOM element methods
// makes snapshots less helpful, but at least they run
jest.mock('react-dom', () => ({
  findDOMNode: () => ({
    appendChild: _ => {},
    nodeType: 1,
    ownerDocument: { body: { contains: _ => false } }
  })
}))

initStoryshots({
  test: snapshotWithOptions({
    createNodeMock
  })
})
