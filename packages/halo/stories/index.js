import React from 'react'
import { storiesOf } from '@storybook/react'

import Halo from '../react'

const appearanceStory = storiesOf('appearance', module)
Object.keys(Halo.appearances).forEach(app => {
  appearanceStory.add(app, _ => <Halo appearance={app}>something in here</Halo>)
})
