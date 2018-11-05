import React from 'react'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import StarRating from '..'

const valueStory = storiesOf('value', module)
Array.from([null, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]).forEach(value =>
  valueStory.add(`value ${value}`, _ => <StarRating value={value} />)
)

storiesOf('onClick', module)
  .add('onClick', _ => <StarRating value={4.5} onClick={action('clicked')} />)
  .add('!onClick', _ => <StarRating value={4.5} />)
