import { Meta, Story } from '@storybook/react/types-6-0'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import { DataWell } from '../index'

const glamor = glamorDefault || glamorExports

export default {
  title: 'Components/DataWell',
  component: DataWell
} as Meta

export const Row: Story = () => (
  <div
    style={{
      display: 'flex'
    }}
  >
    <DataWell label="Dog count" subLabel="All the doggies">
      234,345
    </DataWell>
    <DataWell label="Cat count">123</DataWell>
    <DataWell label="Rafters on the River">1,345/23,235</DataWell>
    <DataWell
      label="Flotsam"
      subLabel="The icky stuff that is not cats or dogs, floating in the river"
    >
      About 3
    </DataWell>
  </div>
)

export const FixedWidthRow: Story = () => (
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
    <DataWell
      label="Flotsam"
      subLabel="The icky stuff that is not cats or dogs, floating in the river"
    >
      About 3
    </DataWell>
  </div>
)
