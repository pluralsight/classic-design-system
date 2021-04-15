import {
  colorsBlue,
  colorsTextIcon,
  type,
  layout,
} from '@pluralsight/ps-design-system-core'
import { AsideLayout } from '@pluralsight/ps-design-system-layout'
import React from 'react'

const Example = (props) => {
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

const BlueBox = (props) => (
  <React.Fragment>
    <div className="bluebox" {...props} />
  </React.Fragment>
)

export default Example
