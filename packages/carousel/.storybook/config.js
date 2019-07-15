import addons from '@storybook/addons'
import { addDecorator, configure } from '@storybook/react'

import * as glamor from 'glamor'
import React from 'react'

import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

const StoryWrapper = props => (
  <div
    {...glamor.css({
      margin: '20px',
      maxWidth: '1600px',
      minWidth: '500px'
    })}
    data-testid="story-wrapper"
    {...props}
  />
)

addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
addDecorator(themeDecorator(addons))

function loadStory() {
  require('../src/react/__stories__/index.story.js')
}

configure(loadStory, module)
