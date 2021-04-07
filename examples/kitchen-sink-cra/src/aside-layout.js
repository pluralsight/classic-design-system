import {
  colorsBlue,
  colorsTextIcon,
  type,
  layout,
} from '@pluralsight/ps-design-system-core'
import { AsideLayout } from '@pluralsight/ps-design-system-layout'
import React from 'react'

const Example: React.FC = (props) => {
  return (
    <React.Fragment>
      <div>
        <AsideLayout
          aside={
            <AsideLayout.Aside>
              <BlueBox>A</BlueBox>
            </AsideLayout.Aside>
          }
          main={
            <AsideLayout.Main>
              <BlueBox>B</BlueBox>
            </AsideLayout.Main>
          }
        />
      </div>

      <br />

      <div>
        <AsideLayout
          aside={
            <AsideLayout.Aside>
              <BlueBox>C</BlueBox>
            </AsideLayout.Aside>
          }
          asidePosition={AsideLayout.asidePositions.last}
          main={
            <AsideLayout.Main>
              <BlueBox>D</BlueBox>
            </AsideLayout.Main>
          }
        />
      </div>
    </React.Fragment>
  )
}

const BlueBox: React.FC = (props) => (
  <React.Fragment>
    <div className="bluebox" {...props} />

    <style jsx>{`
      .bluebox {
        align-items: center;
        background: ${colorsBlue[6]};
        color: ${colorsTextIcon.highOnDark};
        display: flex;
        font-weight: ${type.fontWeightBold};
        height: ${layout.spacingLarge};
        justify-content: center;
      }
    `}</style>
  </React.Fragment>
)

export default Example
