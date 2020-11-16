import { storiesOf } from '@storybook/react'
import React from 'react'

import NavUser from '..'

storiesOf('NavUser', module).add('states', () => (
  <Grid>
    <NavUser src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg" />

    <NavUser
      src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg"
      name="Jake Trent"
    />

    <NavUser
      src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg"
      name="Jake Trent"
      meta="Accenture"
    />

    <NavUser
      src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg"
      name="Jake Trent"
      meta="Accenture"
      href="https://jaketrent.com"
    />

    <NavUser
      src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg"
      name="Jake Trent Name That is Long"
      meta="Accenture Company Name That is Long"
      onClick={() => alert('clicked')}
    />
  </Grid>
))

const Grid: React.FC = props => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gap: '32px',
        justifyItems: 'center'
      }}
      {...props}
    />
  )
}
