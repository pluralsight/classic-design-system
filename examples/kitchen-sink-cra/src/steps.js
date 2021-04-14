import React from 'react'
import Steps from '@pluralsight/ps-design-system-steps'

function Example() {
  return (
    <Steps orientation="vertical">
      <Steps.Step status={Steps.statuses.completed}>Finished</Steps.Step>

      <Steps.Step
        description="An optional description to provide more detail about this step."
        status={Steps.statuses.current}
      >
        In Progress
      </Steps.Step>

      <Steps.Step status={Steps.statuses.incomplete}>Waiting</Steps.Step>
    </Steps>
  )
}

export default Example
