import { storiesOf } from '@storybook/react'

import React from 'react'

import * as core from '@pluralsight/ps-design-system-core'

import Tooltip from '../index.js'

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingXLarge }}>{storyFn()}</div>
)

const appearanceStory = storiesOf('appearance', module).addDecorator(
  PaddingDecorator
)
Object.keys(Tooltip.appearances).forEach(app =>
  appearanceStory.add(app, _ => <Tooltip appearance={app}>Some text</Tooltip>)
)

const tailPositionStory = storiesOf('tailPosition', module).addDecorator(
  PaddingDecorator
)
Object.keys(Tooltip.appearances).forEach(appearance =>
  Object.keys(Tooltip.tailPositions).forEach(tailPosition =>
    tailPositionStory.add(`${appearance} ${tailPosition}`, _ => (
      <Tooltip appearance={appearance} tailPosition={tailPosition}>
        Some text
      </Tooltip>
    ))
  )
)

const closeStory = storiesOf('onClose', module).addDecorator(PaddingDecorator)
Object.keys(Tooltip.appearances).forEach(appearance =>
  closeStory.add(appearance, _ => (
    <Tooltip appearance={appearance} onClose={_ => {}}>
      Consectetur adipisicing elit, sed do ab eiusmod tempor incididunt ut
    </Tooltip>
  ))
)
closeStory.add('short text', _ => <Tooltip onClose={_ => {}}>Short</Tooltip>)
closeStory.add('tailPosition topRight', _ => (
  <Tooltip tailPosition={Tooltip.tailPositions.topRight} onClose={_ => {}}>
    Consectetur adipisicing elit, sed do ab eiusmod tempor incididunt ut
  </Tooltip>
))
