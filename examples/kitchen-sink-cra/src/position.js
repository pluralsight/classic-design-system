import React, { useState } from 'react'

import Button from '@pluralsight/ps-design-system-button'
import Tooltip from '@pluralsight/ps-design-system-tooltip'

import { RightOf } from '@pluralsight/ps-design-system-position'

const Example: React.FC = (props) => {
  const [hovered, setHovered] = useState(false)

  const hide = () => setHovered(false)
  const show = () => setHovered(true)

  return (
    <RightOf
      show={
        <Tooltip tailPosition={Tooltip.tailPositions.leftCenter}>
          Tooltip
        </Tooltip>
      }
      when={hovered}
    >
      <Button
        appearance={Button.appearances.secondary}
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        Hover me
      </Button>
    </RightOf>
  )
}

export default Example
