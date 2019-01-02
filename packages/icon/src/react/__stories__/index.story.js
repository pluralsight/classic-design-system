import React from 'react'
import { storiesOf } from '@storybook/react'

import Icon from '../../../dist/react'

const colorStory = storiesOf('appearance', module)
Object.values(Icon.colors).forEach(color =>
  colorStory.add(color, _ => <Icon color={color} id={Icon.ids.check} />)
)

const sizeStory = storiesOf('size', module)
Object.values(Icon.sizes).forEach(size =>
  sizeStory.add(size, _ => (
    <Icon color={Icon.colors.white} size={size} id={Icon.ids.check} />
  ))
)

const idStory = storiesOf('id', module)
Object.values(Icon.ids).forEach(id =>
  idStory.add(id, _ => (
    <Icon color={Icon.colors.white} size={Icon.sizes.large} id={id} />
  ))
)
