import { storiesOf } from '@storybook/react'

import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import core from '@pluralsight/ps-design-system-core'
import Tooltip from '@pluralsight/ps-design-system-tooltip/react.js'

import * as positionFns from '../../js/index.js'
import * as positionComponents from '../index.js'

const Box = React.forwardRef((props, forwardedRef) => {
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const className = css({
    alignItems: 'center',
    border: `4px dashed ${core.colors.pink}`,
    color: core.colors.pink,
    display: 'flex',
    fontSize: core.type.fontSizeMedium,
    fontWeight: core.type.fontWeightBold,
    height: '200px',
    justifyContent: 'center',
    textAlign: 'center',
    width: '200px'
  })

  return <div className={className} ref={ref} {...props} />
})

const MockToolip = React.forwardRef((props, forwardedRef) => {
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return (
    <Tooltip ref={ref} {...props}>
      The tip
    </Tooltip>
  )
})

const basicStories = storiesOf('Components | Position / basic')
Object.values(positionComponents).forEach(Comp => {
  const { displayName } = Comp
  const name = `<${Comp.displayName} />`

  basicStories.add(displayName, () => (
    <Comp show={<MockToolip />}>
      <Box>{name}</Box>
    </Comp>
  ))
})

const targetStories = storiesOf('Components | Position / custom target')
Object.values(positionComponents).forEach(Comp => {
  function TargetStory(props) {
    const customRef = React.useRef()

    return (
      <Comp show={<MockToolip />} target={customRef}>
        <Box>
          <div ref={customRef} style={{ border: '1px solid yellow' }}>
            {name}
          </div>
        </Box>
      </Comp>
    )
  }
  const { displayName } = Comp
  const name = `<${Comp.displayName} />`

  targetStories.add(displayName, () => <TargetStory />)
})

storiesOf('Components | Position / portals').add('test.skip inNode', () => {
  const { Below } = positionComponents

  function InNodeStory() {
    const portal = React.useRef()
    const [node, setNode] = React.useState(portal.current)

    React.useEffect(() => {
      setNode(portal.current)
    }, [portal])

    return (
      <React.Fragment>
        <div
          style={{
            position: 'relative',
            top: '-200px',
            left: '-100px',
            border: `1px dashed ${core.colors.orange}`,
            height: '300px',
            width: '300px'
          }}
        >
          <Below show={<Tooltip>The tip</Tooltip>} inNode={node}>
            <Box>Below box stuck in relative space</Box>
          </Below>
        </div>

        <div ref={portal} />
      </React.Fragment>
    )
  }

  return <InNodeStory />
})

const jsStory = storiesOf('Utilities | Position / position fns', module)
Object.keys(positionFns).forEach(pos =>
  jsStory.add(pos, _ => <JsStory positionType={pos} />)
)

function JsStory({ positionType, ...rest }) {
  const TAIL_POSITION_MAP = {
    above: Tooltip.tailPositions.bottomCenter,
    aboveLeft: Tooltip.tailPositions.bottomLeft,
    aboveRight: Tooltip.tailPositions.bottomRight,
    rightOf: null,
    below: Tooltip.tailPositions.topCenter,
    belowLeft: Tooltip.tailPositions.topLeft,
    belowRight: Tooltip.tailPositions.topRight,
    leftOf: null
  }
  const tailPosition = TAIL_POSITION_MAP[positionType]

  const boxRef = React.useRef()
  const tooltipRef = React.useRef()

  const [styles, setStyles] = React.useState({ position: 'absolute' })

  React.useEffect(() => {
    const { current: box } = boxRef
    const { current: tooltip } = tooltipRef

    if (!box || !tooltip) return

    const fn = positionFns[positionType]
    const nextStyles = fn(box).styleFor(tooltip)

    setStyles(nextStyles)
  }, [positionType])

  return (
    <div>
      <Box ref={boxRef}>{positionType}</Box>

      <Tooltip ref={tooltipRef} style={styles} tailPosition={tailPosition}>
        The tip
      </Tooltip>
    </div>
  )
}

JsStory.propTypes = {
  positionType: PropTypes.oneOf(Object.keys(positionFns)).isRequired
}
