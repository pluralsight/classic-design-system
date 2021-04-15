import VerticalTabs from '@pluralsight/ps-design-system-verticaltabs'
import React from 'react'

function Example() {
  return (
    <VerticalTabs>
      <VerticalTabs.Tier1
        header={
          <VerticalTabs.Tier1.Header href="#">
            Tier 1 link
          </VerticalTabs.Tier1.Header>
        }
      />

      <VerticalTabs.Tier2
        header={
          <VerticalTabs.Tier2.Header href="#">
            Tier 2 link
          </VerticalTabs.Tier2.Header>
        }
      />
    </VerticalTabs>
  )
}

export default Example
