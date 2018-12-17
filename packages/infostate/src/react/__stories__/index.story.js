import { storiesOf } from '@storybook/react'
import React from 'react'

import InfoState from '..'

storiesOf('InfoState', module).add('example', _ => (
  <InfoState
    actions={<InfoState.Actions>[ Actions ]</InfoState.Actions>}
    caption={<InfoState.Caption>Caption</InfoState.Caption>}
    heading={<InfoState.Heading>Heading</InfoState.Heading>}
    illustration={<InfoState.Illustration />}
  />
))
