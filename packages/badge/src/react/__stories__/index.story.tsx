import { ValueOf } from '@pluralsight/ps-design-system-util'
import { storiesOf } from '@storybook/react'

import React from 'react'

import Badge from '../index.js'
import * as vars from '../../vars/index.js'

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

const appearanceStory = storiesOf('appearance', module)
Object.values(Badge.appearances).forEach(appearance =>
  appearanceStory.add(appearance, () => <BadgeStory appearance={appearance} />)
)
