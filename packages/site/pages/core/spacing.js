import core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'
import React from 'react'

import {
  Chrome,
  Code,
  Content,
  P,
  PageHeading,
  SectionHeading
} from '../../src/ui/index.js'

const increments = [
  { width: 4, label: 'XX-Small', varName: 'psLayoutSpacingXXSmall' },
  { width: 8, label: 'X-Small', varName: 'psLayoutSpacingXSmall' },
  { width: 12, label: 'Small', varName: 'psLayoutSpacingSmall' },
  { width: 16, label: 'Medium', varName: 'psLayoutSpacingMedium' },
  { width: 24, label: 'Large', varName: 'psLayoutSpacingLarge' },
  { width: 48, label: 'X-Large', varName: 'psLayoutSpacingXLarge' },
  { width: 64, label: 'XX-Large', varName: 'psLayoutSpacingXXLarge' }
]

const capitalize = str => str && str.charAt(0).toUpperCase() + str.slice(1)

const Parent = props => (
  <div className="parent">
    {props.children}
    <style jsx>{`
      .parent {
        display: flex;
        flex-wrap: wrap;
        margin: calc(${core.layout.spacingLarge} / -2);
      }
    `}</style>
  </div>
)
Parent.propTypes = {
  children: PropTypes.node
}

const dimension = side =>
  side === 'left' || side === 'right' ? 'width' : 'height'

function SingleLine(props) {
  const className = `line line${capitalize(props.side)}${
    props.sides !== 'all' ? ' lineSingleSide' : ''
  }`

  return (
    <div style={{ [dimension(props.side)]: props.width }} className={className}>
      <style jsx>{`
        .line {
          position: absolute;
          border-style: dashed;
          border-color: #ff00ce;
          border-width: 0;
        }
        .lineSingleSide {
          background: #8fc4e9;
        }
        .lineTop {
          top: 0;
          left: 0;
          width: 100%;
          border-bottom-width: 1px;
        }
        .lineRight {
          top: 0;
          right: 0;
          height: 100%;
          border-left-width: 1px;
        }
        .lineBottom {
          bottom: 0;
          left: 0;
          width: 100%;
          border-top-width: 1px;
        }
        .lineLeft {
          top: 0;
          left: 0;
          height: 100%;
          border-right-width: 1px;
        }
      `}</style>
    </div>
  )
}
SingleLine.propTypes = {
  side: PropTypes.string,
  sides: PropTypes.string,
  width: PropTypes.number
}

function AllLines(props) {
  return ['top', 'right', 'bottom', 'left'].map(side => (
    <SingleLine {...props} key={side} side={side} />
  ))
}

function Lines(props) {
  return props.sides === 'all' ? (
    <AllLines {...props} />
  ) : (
    <SingleLine {...props} />
  )
}
Lines.propTypes = {
  sides: PropTypes.string
}

function Border(props) {
  return props.sides === 'all' ? (
    <div style={{ borderWidth: props.width }} className="border">
      <style jsx>{`
        .border {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          border-style: solid;
          border-color: #8fc4e9;
          border-width: 0;
        }
      `}</style>
    </div>
  ) : null
}
Border.propTypes = {
  sides: PropTypes.string,
  width: PropTypes.number
}

function Label(props) {
  return props.label ? (
    <div className="label">
      {`${props.width}px - ${props.label}`}
      <style jsx>{`
        .label {
          margin-top: ${core.layout.spacingXSmall};
          font-size: ${core.type.fontSizeXSmall};
          font-weight: ${core.type.fontWeightBook};
          line-height: ${core.type.lineHeightTight};
        }
      `}</style>
    </div>
  ) : null
}
Label.propTypes = {
  label: PropTypes.string,
  width: PropTypes.number
}

function Var(props) {
  return props.varName ? (
    <code className="varName">
      {props.varName}
      <style jsx>{`
        .varName {
          margin-top: ${core.layout.spacingSmall};
          font-size: ${core.type.fontSizeXSmall};
          color: ${core.colors.pink};
        }
      `}</style>
    </code>
  ) : null
}
Var.propTypes = {
  varName: PropTypes.string
}

const Example = props => (
  <div className="root">
    <div className="box">
      <Border {...props} />
      <Lines {...props} />
    </div>
    <Label {...props} />
    <Var {...props} />
    <style jsx>{`
      .root {
        margin: calc(${core.layout.spacingLarge} / 2);
      }
      .box {
        position: relative;
        height: 150px;
        width: 150px;
        background: #c6e0f2;
      }
    `}</style>
  </div>
)

const Spacing = {
  Parent,
  Example
}

const SpacingIncrements = props => (
  <div>
    <div className="example">
      <Spacing.Parent>
        {increments.map((x, i) => (
          <Spacing.Example
            key={i}
            width={x.width}
            label={x.label}
            varName={x.varName}
            sides="all"
          />
        ))}
      </Spacing.Parent>
    </div>
    <Code language="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector { margin-top: var(--psLayoutSpacingLarge); }`}</Code>
    <style jsx>{`
      .example {
        margin: ${core.layout.spacingLarge} 0;
      }
    `}</style>
  </div>
)

const incrementExamples = [
  { side: 'top', attrName: 'margin-top' },
  { side: 'right', attrName: 'margin-right' },
  { side: 'bottom', attrName: 'margin-bottom' },
  { side: 'left', attrName: 'margin-left' }
]

const IndividualSpacing = props => (
  <div>
    <div className="example">
      <Spacing.Parent>
        {incrementExamples.map((x, i) => (
          <Spacing.Example key={i} width={24} side={x.side} />
        ))}
      </Spacing.Parent>
    </div>
    <Code language="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector { margin-top: var(--psLayoutSpacingLarge); }`}</Code>
    <style jsx>{`
      .example {
        margin-bottom: ${core.layout.spacingLarge};
      }
    `}</style>
  </div>
)

export default _ => (
  <Chrome>
    <Content>
      <PageHeading>Spacing</PageHeading>

      <SectionHeading>Spacing increments</SectionHeading>
      <P>
        Spacing can be applied using margin or padding. There are 7 available
        spacing sizes. Both margin and padding share the same predefined scale.
      </P>
      <SpacingIncrements />

      <SectionHeading>Individual spacing</SectionHeading>
      <P>
        Individual spacing can be applied to a single side of an element. Both
        margin and padding share the same predefined scale. The same 7 sizes are
        available.
      </P>
      <IndividualSpacing />
    </Content>
  </Chrome>
)
