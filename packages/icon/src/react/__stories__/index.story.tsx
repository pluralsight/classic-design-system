import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'
import { storiesOf } from '@storybook/react'

import Icon from '../index'
import * as Icons from '../icons/index'

const glamor = glamorDefault || glamorExports

const styles = {
  grid: glamor.css({
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'
  }),
  gridItem: glamor.css({
    height: '24px',
    width: '24px'
  }),
  name: glamor.css({
    height: '24px',
    lineHeight: '24px',
    paddingLeft: '8px'
  })
}

const Grid: React.FC<unknown> = props => <div {...props} {...styles.grid} />

const GridItem: React.FC<unknown> = props => (
  <div {...props} {...styles.gridItem} />
)

const colorStory = storiesOf('appearance', module)
Object.values(Icon.colors).forEach(color =>
  colorStory.add(color, () => <Icons.CheckIcon color={Icon.colors[color]} />)
)

const sizeStory = storiesOf('size', module)
Object.values(Icon.sizes).forEach(size =>
  sizeStory.add(size, () => (
    <Icons.CheckIcon color={Icon.colors.textIconHighOnDark} size={size} />
  ))
)

const idStory = storiesOf('names', module)
idStory.add('all export names', () => (
  <Grid>
    {Object.keys(Icons).map(id => {
      const Comp = Icons[id]
      return (
        <GridItem key={`item-${id}`}>
          <Comp color={Icon.colors.textIconHighOnDark} />
        </GridItem>
      )
    })}
  </Grid>
))
Object.keys(Icons).forEach(id =>
  idStory.add(id, () => {
    const Comp = Icons[id]
    return (
      <Comp color={Icon.colors.textIconHighOnDark} size={Icon.sizes.large} />
    )
  })
)

storiesOf('custom props', module).add('aria-label', () => (
  <Icons.CheckIcon
    color={Icon.colors.textIconHighOnDark}
    aria-label="completed"
  />
))

const SvgAccounticon: React.FC<unknown> = props => (
  <svg aria-label="account icon" viewBox="0 0 24 24" role="img" {...props}>
    <path d="M20 2c1.103 0 2 .898 2 2v16c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2V4c0-1.102.897-2 2-2h16zm-4 18h4.001L20 4h-4v3h-2V4h-4v8H8V4H4v16h4v-3h2v3h4v-8h2v8zM6 13h6v3H6v-3zm6-5h6v3h-6V8z" />
  </svg>
)

storiesOf('custom icon', module).add('aria-label', () => (
  <Icon color={Icon.colors.textIconHighOnDark}>
    <SvgAccounticon />
  </Icon>
))
