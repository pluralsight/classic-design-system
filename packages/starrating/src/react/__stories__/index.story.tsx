import React from 'react'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import StarRating from '..'

const VALUES = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, null, undefined]
const ROUNDING_VALUES = [1.7, 2.0, 2.2, 2.4, 2.6, 2.78]

const interactive = storiesOf('StarRating / interactive', module)
const nonInteractive = storiesOf('StarRating / not interactive', module)
const rounding = storiesOf(
  'StarRating / rounding to half integer values',
  module
)

VALUES.forEach(value => {
  interactive.add(`${value}`, () => (
    <StarRating onChange={action('value changed')} value={value} />
  ))
  nonInteractive.add(`${value}`, () => <StarRating value={value} />)
})

ROUNDING_VALUES.forEach(value => {
  rounding.add(`${value}`, () => (
    <StarRating
      onChange={(
        _val: React.Key,
        _evt: React.ChangeEvent<Element> | React.MouseEvent<Element, MouseEvent>
      ) => action('value changed')}
      value={value}
    />
  ))
})
