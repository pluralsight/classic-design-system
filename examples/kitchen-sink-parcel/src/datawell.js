import DataWell from '@pluralsight/ps-design-system-datawell'
import React from 'react'

function Example() {
  return (
    <div style={{ display: 'flex' }}>
      <DataWell label="Active learners">7.2 Billion</DataWell>
      <DataWell label="Pluralsight ROI">Vast</DataWell>
      <DataWell label="Lives changed" subLabel="Up to 11">
        11/10
      </DataWell>
    </div>
  )
}

export default Example
