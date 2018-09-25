import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Icon from '../react'

const colorStory = storiesOf('appearance', module).addDecorator(
  themeDecorator(addons)
)
Object.keys(Icon.colors).forEach(color =>
  colorStory.add(color, _ => <Icon color={color} id={Icon.ids.check} />)
)

const sizeStory = storiesOf('size', module).addDecorator(themeDecorator(addons))
Object.keys(Icon.sizes).forEach(size =>
  sizeStory.add(size, _ => (
    <Icon color={Icon.colors.white} size={size} id={Icon.ids.check} />
  ))
)

const idStory = storiesOf('id', module).addDecorator(themeDecorator(addons))
Object.keys(Icon.ids).forEach(id =>
  idStory.add(id, _ => (
    <Icon color={Icon.colors.white} size={Icon.sizes.large} id={id} />
  ))
)

const styleStory = storiesOf('style', module)
  .addDecorator(themeDecorator(addons))
  .add('css prop', _ => (
    <Icon
      css={{ '> svg': { fill: 'yellow' } }}
      id={Icon.ids.check}
      size={Icon.sizes.large}
    />
  ))
