import { storiesOf } from '@storybook/react'
import PropTypes from 'prop-types'
import React from 'react'

import NavUser from '../index.js'

storiesOf('Navuser', module).add('states', _ => (
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

function Grid(props) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gap: '32px',
        justifyItems: 'center'
      }}
    >
      {props.children}
    </div>
  )
}
Grid.propTypes = {
  children: PropTypes.node
}
