import React from 'react'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import StarRating from '..'

const VALUES = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, null, undefined]

const interactive = storiesOf('StarRating / interactive', module)
const nonInteractive = storiesOf('StarRating / not interactive', module)

VALUES.forEach(value => {
  interactive.add(`${value}`, _ => (
    <StarRating onChange={action('value changed')} value={value} />
  ))
  nonInteractive.add(`${value}`, _ => <StarRating value={value} />)
})
