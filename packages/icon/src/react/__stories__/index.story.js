import { css } from 'glamor'
import React from 'react'
import { storiesOf } from '@storybook/react'

import Icon from '..'

const styles = {
  grid: css({
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'
  }),
  gridItem: css({
    height: '24px',
    width: '24px'
  }),
  name: css({
    height: '24px',
    lineHeight: '24px',
    paddingLeft: '8px'
  })
}
const Grid = props => <div {...props} {...styles.grid} />

const GridItem = props => <div {...props} {...styles.gridItem} />

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
idStory.add('all ids', () => (
  <Grid>
    {Object.values(Icon.ids).map(id => (
      <GridItem key={`item-${id}`}>
        <Icon color={Icon.colors.white} id={id} />
      </GridItem>
    ))}
  </Grid>
))
Object.values(Icon.ids).forEach(id =>
  idStory.add(id, _ => (
    <Icon color={Icon.colors.white} size={Icon.sizes.large} id={id} />
  ))
)

storiesOf('custom props', module).add('aria-label', () => (
  <Icon color={Icon.colors.white} id={Icon.ids.check} aria-label="completed" />
))
