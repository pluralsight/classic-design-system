import { storiesOf } from '@storybook/react'
import React from 'react'

import Datawell from '../index.js'

storiesOf('Datawell', module)
  .add('label/data', _ => <Datawell label="Dog count">123</Datawell>)
  .add('label/data/subLabel', _ => (
    <Datawell label="Dog count" subLabel="All the doggies">
      234,345
    </Datawell>
  ))
  .add('row', _ => (
    <div
      style={{
        display: 'flex'
      }}
    >
      <Datawell label="Dog count" subLabel="All the doggies">
        234,345
      </Datawell>
      <Datawell label="Cat count">123</Datawell>
      <Datawell label="Rafters on the River">12/23</Datawell>
      <Datawell
        label="Flotsam"
        subLabel="The icky stuff that is not cats or dogs, floating in the river"
      >
        About 3
      </Datawell>
    </div>
  ))
