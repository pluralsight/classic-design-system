import { storiesOf } from '@storybook/react'

import React from 'react'

import * as core from '../../../core'

import { Tooltip } from '../index'

const PaddingDecorator = (storyFn: () => React.ReactNode) => (
  <div style={{ padding: core.layout.spacingXLarge }}>{storyFn()}</div>
)

const appearanceStory = storiesOf('appearance', module).addDecorator(
  PaddingDecorator
)
Object.values(Tooltip.appearances).forEach(app =>
  appearanceStory.add(app, () => <Tooltip appearance={app}>Some text</Tooltip>)
)

const tailPositionStory = storiesOf('tailPosition', module).addDecorator(
  PaddingDecorator
)
Object.values(Tooltip.appearances).forEach(appearance =>
  Object.values(Tooltip.tailPositions).forEach(tailPosition =>
    tailPositionStory.add(`${appearance} ${tailPosition}`, () => (
      <Tooltip appearance={appearance} tailPosition={tailPosition}>
        Some text
      </Tooltip>
    ))
  )
)

const closeStory = storiesOf('onClose', module).addDecorator(PaddingDecorator)
Object.values(Tooltip.appearances).forEach(appearance =>
  closeStory.add(appearance, () => (
    <Tooltip appearance={appearance} onClose={() => {}}>
      Consectetur adipisicing elit, sed do ab eiusmod tempor incididunt ut
    </Tooltip>
  ))
)
closeStory.add('short text', () => <Tooltip onClose={() => {}}>Short</Tooltip>)
closeStory.add('tailPosition topRight', () => (
  <Tooltip tailPosition={Tooltip.tailPositions.topRight} onClose={() => {}}>
    Consectetur adipisicing elit, sed do ab eiusmod tempor incididunt ut
  </Tooltip>
))
