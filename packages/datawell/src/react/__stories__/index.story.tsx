import { storiesOf } from '@storybook/react'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import DataWell from '../index'

const glamor = glamorDefault || glamorExports

storiesOf('DataWell', module)
  .add('label/data', () => <DataWell label="Dog count">123</DataWell>)
  .add('label/data/subLabel', () => (
    <DataWell label="Dog count" subLabel="All the doggies">
      234,345
    </DataWell>
  ))
  .add('row', () => (
    <div
      style={{
        display: 'flex'
      }}
    >
      <DataWell label="Dog count" subLabel="All the doggies">
        234,345
      </DataWell>
      <DataWell label="Cat count">123</DataWell>
      <DataWell label="Rafters on the River">12/23</DataWell>
      <DataWell
        label="Flotsam"
        subLabel="The icky stuff that is not cats or dogs, floating in the river"
      >
        About 3
      </DataWell>
    </div>
  ))
  .add('fixed width in row, no spaces', () => (
    <div
      {...glamor.css({
        display: 'flex',
        '& > div': {
          width: '25%'
        }
      })}
    >
      <DataWell label="Dog count" subLabel="All the doggies">
        234,345
      </DataWell>
      <DataWell label="Cat count">123</DataWell>
      <DataWell label="Rafters on the River">1,345/23,235</DataWell>
      <DataWell label="Flotsam">About 3</DataWell>
    </div>
  ))
