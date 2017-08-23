import classnames from 'classnames'
import core from '@pluralsight/ps-design-system-core'

import { Chrome, Code, Content, Heading, P } from '../../src/ui'

const increments = [
  { width: 4, label: 'Tiny', varName: 'psLayoutSpacingTiny' },
  { width: 8, label: 'X-Small', varName: 'psLayoutSpacingXSmall' },
  { width: 12, label: 'Small', varName: 'psLayoutSpacingSmall' },
  { width: 16, label: 'Medium', varName: 'psLayoutSpacingMedium' },
  { width: 24, label: 'Large', varName: 'psLayoutSpacingLarge' },
  { width: 40, label: 'X-Large', varName: 'psLayoutSpacingXLarge' },
  { width: 56, label: 'XX-Large', varName: 'psLayoutSpacingXXLarge' }
]

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

const Parent = props =>
  <div className="parent">
    {props.children}
    <style jsx>{`
      .parent {
        display: flex;
        flex-wrap: wrap;
        margin: calc(-0.5 * ${core.layout.spacingLarge})
          calc(-0.5 * ${core.layout.spacingLarge});
      }
    `}</style>
  </div>

const dimension = side =>
  side === 'left' || side === 'right' ? 'width' : 'height'

const renderSingleLine = (props, side, i) => {
  const className = classnames({
    line: true,
    lineSingleSide: props.sides !== 'all',
    ['line' + capitalize(side)]: true
  })

  return (
    <div
      style={{ [dimension(side)]: props.width }}
      key={i}
      className={className}
    >
      <style jsx>{`
        .line {
          position: absolute;
          border-style: dashed;
          border-color: #FF00CE;
          border-width: 0;
        }
        .lineSingleSide {
          background: #8FC4E9;
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

const renderAllLines = props =>
  ['top', 'right', 'bottom', 'left'].map(renderSingleLine.bind(this, props))

const renderLines = props =>
  props.sides === 'all'
    ? renderAllLines(props)
    : renderSingleLine(props, props.sides)

const renderBorder = props =>
  props.sides === 'all'
    ? <div style={{ borderWidth: props.width }} className="border">
        <style jsx>{`
          .border {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            border-style: solid;
            border-color: #8FC4E9;
            border-width: 0;
          }
        `}</style>
      </div>
    : null

const renderLabel = props =>
  props.label
    ? <div className="label">
        {`${props.width}px - ${props.label}`}
        <style jsx>{`

      .label {
        margin-top: ${core.layout.spacingTiny};
        font-size: ${core.type.fontSizeXSmall};
        font-weight: ${core.type.fontWeightBook};
        line-height: ${core.type.lineHeightTight};
      }
`}</style>
      </div>
    : null

const Example = props =>
  <div className="root">
    <div className="box">
      {renderBorder(props)}
      {renderLines(props)}
    </div>
    {renderLabel(props)}
    <style jsx>{`
      .root {
        margin: calc(${core.layout.spacingLarge} / 2);
      }
      .box {
        position: relative;
        height: 150px;
        width: 150px;
        background: #C6E0F2;
      }
    `}</style>
  </div>

const Spacing = {
  Parent,
  Example
}

const SpacingIncrements = props =>
  <div>
    <div className="example">
      <Spacing.Parent>
        {increments.map((x, i) =>
          <Spacing.Example
            key={i}
            width={x.width}
            label={x.label}
            sides="all"
          />
        )}
      </Spacing.Parent>
    </div>
    <Code language="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector { margin-top: var(--psLayoutSpacingLarge); }`}</Code>
    <style jsx>{`
      .example {
        margin: ${core.layout.spacingLarge};
      }
    `}</style>
  </div>

const incrementExamples = [
  { side: 'top', attrName: 'margin-top' },
  { side: 'right', attrName: 'margin-right' },
  { side: 'bottom', attrName: 'margin-bottom' },
  { side: 'left', attrName: 'margin-left' }
]

const IndividualSpacing = props =>
  <div>
    <div className="example">
      <Spacing.Parent>
        {incrementExamples.map((x, i) =>
          <Spacing.Example key={i} width={24} sides={x.side} />
        )}
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

export default _ =>
  <Chrome>
    <Content>
      <Heading size="xxLarge"><h1>Spacing</h1></Heading>

      <Heading size="large"><h2>Spacing increments</h2></Heading>
      <P>
        Spacing can be applied using margin or padding. There are 7 available
        spacing sizes. Both margin and padding share the same predefined scale.
      </P>
      <SpacingIncrements />

      <Heading size="large"><h2>Individual spacing</h2></Heading>
      <P>
        Individual spacing can be applied to a single side of an element. Both
        margin and padding share the same predefined scale. The same 7 sizes are
        available.
      </P>
      <IndividualSpacing />
    </Content>
  </Chrome>
