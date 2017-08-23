import Button from '@pluralsight/ps-design-system-button/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'

import { storiesOf } from '@storybook/react'
import backgrounds from '@storybook/addon-backgrounds'
import { action } from '@storybook/addon-actions'
import core from '@pluralsight/ps-design-system-core'
import { linkTo } from '@storybook/addon-links'

import Card from '../react'

const bg = backgrounds([
  { name: 'product', value: core.colors.gray06, default: true }
])

const sizeStory = storiesOf('size', module).addDecorator(bg)
Object.keys(Card.sizes).forEach(size =>
  sizeStory.add(size, _ =>
    <Card
      size={size}
      title={`${size} Card`}
      metadata1={['Jim Cooper']}
      image={
        <img src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
    />
  )
)

const actionBarStory = storiesOf('actionBar', module)
  .addDecorator(bg)
  .add('normal', _ =>
    <Card
      actionBar={[
        <Button appearance="flat" icon={<Icon id="bookmark" />} />,
        <Button appearance="flat" icon={<Icon id="more" />} />
      ]}
      title="Multiple actions"
      image={<img src="http://lorempixel.com/output/food-q-c-680-320-8.jpg" />}
    />
  )
  .add('with fullOverlay', _ =>
    <Card
      size="medium"
      title={`Action Bar with fullOverlay`}
      metadata1={['Jim Cooper']}
      actionBar={[
        <Button
          appearance={Button.appearances.flat}
          icon={<Icon id={Icon.ids.more} />}
        />
      ]}
      fullOverlay={<div>Some overlay</div>}
      image={
        <img src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
    />
  )
  .add('actionBarVisible with fullOverlay', _ =>
    <Card
      size="medium"
      title={`Action Bar actionBarVisible with fullOverlay`}
      metadata1={['Jim Cooper']}
      actionBar={[
        <Button
          appearance={Button.appearances.flat}
          icon={<Icon id={Icon.ids.more} />}
        />
      ]}
      actionBarVisible
      fullOverlay={<div>Some overlay</div>}
      image={
        <img src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
    />
  )

const fullOverlayStory = storiesOf('fullOverlay', module)
  .addDecorator(bg)
  .add('with actionBar', _ =>
    <Card
      size="medium"
      title={`With Action Bar`}
      metadata1={['Jim Cooper']}
      actionBar={[
        <Button
          appearance={Button.appearances.flat}
          icon={<Icon id={Icon.ids.more} />}
        />
      ]}
      fullOverlay={<div>Some overlay</div>}
      image={
        <img src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
    />
  )
  .add('fullOverlayVisible with actionBar', _ =>
    <Card
      size="medium"
      title={`Full Overlay fullOverlayVisible with actionBar`}
      metadata1={['Jim Cooper']}
      actionBar={[
        <Button
          appearance={Button.appearances.flat}
          icon={<Icon id={Icon.ids.more} />}
        />
      ]}
      fullOverlay={<div>Some overlay</div>}
      fullOverlayVisible
      image={
        <img src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
    />
  )
