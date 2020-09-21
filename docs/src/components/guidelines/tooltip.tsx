import Button from '@pluralsight/ps-design-system-button'
import { BookmarkIcon } from '@pluralsight/ps-design-system-icon'
import Tooltip from '@pluralsight/ps-design-system-tooltip'
import React from 'react'

interface TooltipGuidelineProps {
  appearance: boolean
}

export const TooltipGuideline: React.FC<TooltipGuidelineProps> = props => {
  return (
    <div>
      <Button appearance={Button.appearances.flat} icon={<BookmarkIcon />} />

      <div
        style={{
          position: 'relative',
          top: 12,
          left: -2
        }}
      >
        <Tooltip
          appearance={props.appearance}
          tailPosition={Tooltip.tailPositions.topLeft}
        >
          {props.children}
        </Tooltip>
      </div>
    </div>
  )
}
