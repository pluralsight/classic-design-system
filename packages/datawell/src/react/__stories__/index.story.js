import { css } from 'glamor'
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
  .add('fixed width in row, no spaces', _ => (
    <div
      {...css({
        display: 'flex',
        '& > div': {
          width: '25%'
        }
      })}
    >
      <Datawell label="Dog count" subLabel="All the doggies">
        234,345
      </Datawell>
      <Datawell label="Cat count">123</Datawell>
      <Datawell label="Rafters on the River">1,345/23,235</Datawell>
      <Datawell label="Flotsam">About 3</Datawell>
    </div>
  ))
