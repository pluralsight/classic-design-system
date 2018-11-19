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

storiesOf('Badge / appearance', module)
  .add('default', () => <BadgeStory appearance={Badge.appearances.default} />)
  .add('stroke', () => <BadgeStory appearance={Badge.appearances.stroke} />)
