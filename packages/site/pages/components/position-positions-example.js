import {
  Above,
  Below,
  LeftOf,
  RightOf
} from '@pluralsight/ps-design-system-position/react'
import core from '@pluralsight/ps-design-system-core'
import Button from '@pluralsight/ps-design-system-button/react'
import React from 'react'
import Tooltip from '@pluralsight/ps-design-system-tooltip/react'

import { Head, withServerProps } from '../../src/ui/index.js'

export default withServerProps(function PositionExample(props) {
  return (
    <ul className="positions">
      <Head />
      {[Above, Below, LeftOf, RightOf].map(Position => (
        <li className="position" key={Position.displayName}>
          <div className="box">
            <Position
              show={<Tooltip>{'<' + Position.displayName + '/>'}</Tooltip>}
            >
              <Button>Button</Button>
            </Position>
          </div>
        </li>
      ))}
      <style jsx>{`
        .positions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: ${core.layout.spacingLarge};
          list-style: none;
          margin: 0;
        }
        .position {
          display: flex;
          justify-content: center;
          text-align: center;
        }
        .box {
          height: 160px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: ${core.colors.bone};
          border-radius: 8px;
        }
      `}</style>
    </ul>
  )
})
