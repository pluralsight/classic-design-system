import {
  colorsBlue,
  colorsTextIcon,
  type,
  layout,
} from '@pluralsight/ps-design-system-core'
import { EqualColumnLayout } from '@pluralsight/ps-design-system-layout'
import React from 'react'

const Example = (props) => {
  return (
    <React.Fragment>
      <EqualColumnLayout count={EqualColumnLayout.counts.two}>
        <BlueBox>A</BlueBox>
        <BlueBox>B</BlueBox>
      </EqualColumnLayout>

      <br />

      <EqualColumnLayout count={EqualColumnLayout.counts.four}>
        <BlueBox>C</BlueBox>
        <BlueBox>D</BlueBox>
        <BlueBox>E</BlueBox>
        <BlueBox>F</BlueBox>
      </EqualColumnLayout>

      <br />

      <EqualColumnLayout count={EqualColumnLayout.counts.three}>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <BlueBox>G</BlueBox>
          </li>
          <li>
            <BlueBox>H</BlueBox>
          </li>
          <li>
            <BlueBox>I</BlueBox>
          </li>
        </ul>
      </EqualColumnLayout>
    </React.Fragment>
  )
}

const BlueBox = (props) => (
  <React.Fragment>
    <div className="bluebox" {...props} />
  </React.Fragment>
)

export default Example
