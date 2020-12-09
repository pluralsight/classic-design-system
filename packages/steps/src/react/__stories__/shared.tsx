import { ValueOf } from '@pluralsight/ps-design-system-util'
import React from 'react'

import { statuses } from '../../vars'

interface StoryStep {
  description: string
  status: ValueOf<typeof statuses>
  title: string
}
export function useStoryData() {
  const description =
    'An optional description to provide more detail about this step.'

  const [steps, setSteps] = React.useState<StoryStep[]>([
    {
      description,
      title: 'Select type',
      status: statuses.completed
    },
    {
      description,
      title: 'Select template',
      status: statuses.current
    },
    {
      description,
      title: 'Add details',
      status: statuses.incomplete
    },
    {
      description,
      title: 'Select goals',
      status: statuses.incomplete
    },
    {
      description,
      title: 'Review',
      status: statuses.incomplete
    }
  ])

  const selectStep = React.useCallback(
    (nextStep: StoryStep) => {
      const curIndex = steps.indexOf(nextStep)
      if (curIndex < 0) return

      setSteps(prev =>
        prev.map((s, i) => {
          const status =
            i === curIndex
              ? 'current'
              : i < curIndex
              ? 'completed'
              : 'incomplete'

          return { ...s, status }
        })
      )
    },
    [steps]
  )

  return { steps, selectStep }
}
