import { storiesOf } from '@storybook/react'
import React from 'react'

import InfoState from '..'

Object.values(InfoState.Illustration.names).forEach(name => {
  storiesOf('InfoState/illustrations', module).add(name, _ => (
    <InfoState
      heading={<InfoState.Heading>{name}</InfoState.Heading>}
      illustration={<InfoState.Illustration name={name} />}
    />
  ))
})
