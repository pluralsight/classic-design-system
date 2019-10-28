import React from 'react'

import core from '@pluralsight/ps-design-system-core'
import Button from '@pluralsight/ps-design-system-button'
import Tooltip from '@pluralsight/ps-design-system-tooltip'

import {
  Above,
  AboveLeft,
  AboveRight,
  BelowLeft,
  BelowRight,
  RightOf,
  LeftOf
} from '@pluralsight/ps-design-system-position'

import { Head } from '../../src/ui/index.js'

const components = [
  Above,
  AboveLeft,
  AboveRight,
  BelowLeft,
  BelowRight,
  RightOf,
  LeftOf
]
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
