import { EqualColumnLayout } from '@pluralsight/ps-design-system-layout/react'
import core from '@pluralsight/ps-design-system-core'
import React, { Component } from 'react'

const boxStyle = {
  color: core.colors.white,
  background: core.colors.blue,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100px'
}
const BlueBox = props => <div style={boxStyle}>{props.children}</div>

const FullWidth = props => (
  <div style={{ ...boxStyle, marginBottom: core.layout.spacingLarge }}>
    {props.children}
  </div>
)

export default props => (
  <div>
    <h1>Layout Nesting Example</h1>

    <h2>Exhibit 1776</h2>
    <div>
      <EqualColumnLayout count={EqualColumnLayout.counts.two}>
        <EqualColumnLayout count={EqualColumnLayout.counts.two}>
          <BlueBox>A</BlueBox>
          <EqualColumnLayout count={EqualColumnLayout.counts.two}>
            <BlueBox>B</BlueBox>
            <BlueBox>C</BlueBox>
          </EqualColumnLayout>
        </EqualColumnLayout>
        <EqualColumnLayout count={EqualColumnLayout.counts.two}>
          <BlueBox>D</BlueBox>
          <EqualColumnLayout count={EqualColumnLayout.counts.two}>
            <BlueBox>E</BlueBox>
            <BlueBox>F</BlueBox>
          </EqualColumnLayout>
        </EqualColumnLayout>
      </EqualColumnLayout>
    </div>

    <br />
    <br />
    <br />

    <h2>Exhibit 1812</h2>
    <div>
      <EqualColumnLayout count={EqualColumnLayout.counts.two}>
        <div>
          <FullWidth>A</FullWidth>
          <EqualColumnLayout count={EqualColumnLayout.counts.two}>
            <BlueBox>B</BlueBox>
            <BlueBox>C</BlueBox>
          </EqualColumnLayout>
        </div>
        <div>
          <FullWidth>D</FullWidth>
          <EqualColumnLayout count={EqualColumnLayout.counts.two}>
            <BlueBox>E</BlueBox>
            <BlueBox>F</BlueBox>
          </EqualColumnLayout>
        </div>
      </EqualColumnLayout>
    </div>
  </div>
)
