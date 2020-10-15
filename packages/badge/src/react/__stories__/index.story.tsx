import { ValueOf } from '@pluralsight/ps-design-system-util'
import { storiesOf } from '@storybook/react'

import PropTypes from 'prop-types'
import React from 'react'

import Badge from '..'
import * as vars from '../../vars'

const BadgeStory = ({
  appearance
}: {
  appearance: ValueOf<typeof vars.appearances>
}) => (
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
