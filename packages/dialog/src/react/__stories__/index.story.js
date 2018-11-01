import React from 'react'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Button from '@pluralsight/ps-design-system-button/react'
import * as Text from '@pluralsight/ps-design-system-text/react'

import Dialog from '..'

const close = action('close')

const Content = props => (
  <Dialog {...props}>
    <Text.Heading>
      <h1>Wowzers, a Dialog</h1>
    </Text.Heading>
    <Text.P>
      Brownie bear claw liquorice dragée candy canes pastry topping. Chocolate
      cake soufflé sweet roll jelly beans oat cake donut. Wafer chocolate cake
      pastry chocolate bar fruitcake. Cupcake jelly-o croissant lollipop
      liquorice. Tart donut lollipop dragée tootsie roll wafer lemon drops
      cupcake chocolate bar. Powder apple pie cookie lemon drops marzipan
      gummies. Chocolate lemon drops tiramisu. Cotton candy powder oat cake
      toffee cotton candy muffin soufflé marshmallow biscuit.
    </Text.P>
    <div style={{ textAlign: 'right' }}>
      <Button>Primary CTA</Button>
    </div>
  </Dialog>
)

const tailPositionStory = storiesOf('tailPosition', module)
tailPositionStory.add('none', _ => <Content />)

Object.keys(Dialog.tailPositions).forEach(tailPosition =>
  tailPositionStory.add(tailPosition, _ => (
    <Content tailPosition={tailPosition} />
  ))
)

storiesOf('onClose', module).add('with onClose', _ => (
  <Content onClose={close} />
))

storiesOf('modal', module)
  .add('with close button', _ => <Content onClose={close} modal />)
  .add('no close button', _ => (
    <Content disableCloseButton onClose={close} modal />
  ))
  .add('no click underlay', _ => (
    <Content disableCloseOnUnderlayClick onClose={close} modal />
  ))

  .add('no escape key', _ => (
    <Content disableCloseOnEscape onClose={close} modal />
  ))
