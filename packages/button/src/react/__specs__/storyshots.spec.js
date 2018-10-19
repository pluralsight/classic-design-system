import React from 'react'
import initStoryshots from '@storybook/addon-storyshots'

jest.mock('../../../.storybook/center-decorator.js', () => {
  const CenterDecorator = props => (
    <div data-storybook-center-decorator {...props} />
  )
  return CenterDecorator
})

initStoryshots()
