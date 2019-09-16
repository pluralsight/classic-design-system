import React from 'react'

import core from '@pluralsight/ps-design-system-core'
import Button from '@pluralsight/ps-design-system-button/react.js'
import Tooltip from '@pluralsight/ps-design-system-tooltip/react.js'

import * as components from '@pluralsight/ps-design-system-position/react.js'

import { Head } from '../../src/ui/index.js'

export default function PositionExample(props) {
  return (
    <ul className="positions">
      <Head />

      {Object.keys(components).map(key => {
        const Position = components[key]
        const name = `<${Position.displayName} />`

        return (
          <li className="position" key={key}>
            <div className="box">
              <Position show={<Tooltip>{name}</Tooltip>}>
                <Button>Button</Button>
              </Position>
            </div>
          </li>
        )
      })}

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
}
