import { storiesOf } from '@storybook/react'

import PropTypes from 'prop-types'
import React from 'react'

import Badge from '..'

const BadgeStory = ({ appearance }) => (
  <div style={{ display: 'grid', gridGap: 10 }}>
    {Object.values(Badge.colors).map((color, i) => (
      <div key={i}>
        <Badge appearance={appearance} color={color}>
          {appearance} {color}
        </Badge>
      </div>
    ))}
  </div>
)

BadgeStory.propTypes = {
  appearance: PropTypes.string.isRequired
}

const appearanceStory = storiesOf('appearance', module)
Object.values(Badge.appearances).forEach(appearance =>
  appearanceStory.add(appearance, () => <BadgeStory appearance={appearance} />)
)
