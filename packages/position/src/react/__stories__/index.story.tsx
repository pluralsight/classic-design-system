import { storiesOf } from '@storybook/react'

import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { InfoIcon } from '@pluralsight/ps-design-system-icon'
import * as core from '@pluralsight/ps-design-system-core'
import Tooltip from '@pluralsight/ps-design-system-tooltip'

import * as positionFns from '../../js/index.js'
import * as positionComponents from '../index.js'

const Box = React.forwardRef((props, forwardedRef) => {
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const className = css({
    alignItems: 'center',
    border: `4px dashed ${core.colorsPink.base}`,
    color: core.colorsPink.base,
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

const ScrollContainer = props => {
  const containerClass = css({
    border: `4px dashed ${core.colorsOrange.base}`,
    color: core.colorsTextIcon.highOnDark,
    height: 500,
    overflow: 'scroll',
    padding: 20,
    width: 500
  })
  const shimClass = css({
    border: `1px dashed ${core.colorsBorder.highOnLight}`,
    height: 200,
    margin: '20px 0',
    opacity: 0.4
  })

  return (
    <div className={containerClass} {...props}>
      <div className={shimClass} />
      {props.children}
      <div className={shimClass} />
    </div>
  )
}
ScrollContainer.propTypes = { children: PropTypes.node }

const basicStories = storiesOf('Components | Position / basic', module)
Object.values(positionComponents).forEach(Comp => {
  const { displayName } = Comp
  const name = `<${Comp.displayName} />`

  basicStories.add(displayName, () => (
    <Comp show={<MockToolip />}>
      <Box>{name}</Box>
    </Comp>
  ))
})

storiesOf('Components | Position / custom style', module).add(
  'shown element keeps style prop',
  () => (
    <positionComponents.Above
      show={<MockToolip style={{ color: core.colorsPink.base }} />}
    >
      <Box>Tooltip is pink</Box>
    </positionComponents.Above>
  )
)

storiesOf('Components | Position / custom ref', module).add(
  'shown element keeps style prop',
  () => {
    const ref = React.useRef()
    const { x, y } = ref.current ? ref.current.getBoundingClientRect() : {}

    return (
      <>
        <positionComponents.Above
          show={
            <MockToolip style={{ color: core.colorsPink.base }} ref={ref} />
          }
        >
          <Box>Tooltip is pink</Box>
        </positionComponents.Above>
        <span style={{ color: 'white', position: 'absolute', top: 250 }}>
          X: {x}, Y: {y}
        </span>
      </>
    )
  }
)

const portalStories = storiesOf(
  'Components | Position / in custom portal',
  module
)
Object.values(positionComponents).forEach(Comp => {
  const { displayName } = Comp
  const name = `<${Comp.displayName} />`

  const Outer = props => {
    const className = css({
      border: `4px dashed ${core.colorsOrange.base}`,
      color: core.colorsTextIcon.highOnDark,
      height: 500,
      padding: 20,
      width: 500
    })
    return <div {...props} className={className} />
  }

  function usePortal() {
    const ref = React.useRef(document.createElement('div'))

    React.useEffect(() => {
      const { current } = ref
      document.body.appendChild(current)

      return () => {
        document.body.removeChild(current)
      }
    }, [])

    return ref
  }

  function PortalStory(props) {
    const portal = usePortal()
    return <Outer>{props.children({ portal })}</Outer>
  }
  PortalStory.propTypes = { children: PropTypes.func.isRequired }

  portalStories.add(displayName, () => (
    <PortalStory>
      {({ portal }) => (
        <Comp show={<MockToolip />} inNode={portal.current}>
          <Box>{name}</Box>
        </Comp>
      )}
    </PortalStory>
  ))
})

const targetStories = storiesOf('Components | Position / custom target', module)
Object.values(positionComponents).forEach(Comp => {
  function TargetStory(props) {
    const ref = React.useRef()

    return (
      <Comp show={<MockToolip />} target={ref}>
        <Box>
          <div ref={ref} style={{ border: '1px solid yellow' }}>
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

storiesOf('Components | Position / in scrollable container', module).add(
  'RightOf',
  () => {
    const { RightOf } = positionComponents

    function ScrollStory() {
      const ref = React.useRef()

      return (
        <ScrollContainer>
          <RightOf show={<Tooltip>The tip</Tooltip>} target={ref}>
            <Box ref={ref}>target</Box>
          </RightOf>
        </ScrollContainer>
      )
    }

    return <ScrollStory />
  }
)

const jsStory = storiesOf('Utilities | Position / position fns', module)
Object.keys(positionFns).forEach(pos =>
  jsStory.add(pos, _ => <JsStory positionType={pos} />)
)

function JsStory({ positionType, ...rest }) {
  const TAIL_POSITION_MAP = {
    above: Tooltip.tailPositions.bottomCenter,
    aboveLeft: Tooltip.tailPositions.bottomLeft,
    aboveRight: Tooltip.tailPositions.bottomRight,
    rightOf: Tooltip.tailPositions.leftCenter,
    below: Tooltip.tailPositions.topCenter,
    belowLeft: Tooltip.tailPositions.topLeft,
    belowRight: Tooltip.tailPositions.topRight,
    leftOf: Tooltip.tailPositions.rightCenter
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

const edgeCaseStories = storiesOf('Position Edge', module)

Object.values(positionComponents).forEach(Comp => {
  const { displayName } = Comp
  function Demo() {
    const [b1hover, setb1hover] = React.useState(false)
    const [b2hover, setb2hover] = React.useState(false)
    const [b3hover, setb3hover] = React.useState(false)
    const [b4hover, setb4hover] = React.useState(false)

    return (
      <div
        style={{
          display: 'grid',
          justifyItems: 'start',
          grid: '1fr 1fr/ 1fr 1fr',
          width: '100%',
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        <Comp
          when={b1hover}
          show={
            <Tooltip>
              I am some really long content, look at me go, i am so long and
              contentful
            </Tooltip>
          }
        >
          <InfoIcon
            onMouseEnter={() => setb1hover(true)}
            onMouseLeave={() => setb1hover(false)}
            style={{ color: 'white' }}
          >
            Hover me
          </InfoIcon>
        </Comp>
        <Comp
          when={b2hover}
          show={
            <Tooltip>
              I am some really long content, look at me go, i am so long and
              contentful
            </Tooltip>
          }
        >
          <InfoIcon
            onMouseEnter={() => setb2hover(true)}
            onMouseLeave={() => setb2hover(false)}
            style={{ color: 'white', justifySelf: 'end' }}
          >
            Hover me
          </InfoIcon>
        </Comp>
        <Comp
          when={b3hover}
          show={
            <Tooltip>
              I am some really long content, look at me go, i am so long and
              contentful
            </Tooltip>
          }
        >
          <InfoIcon
            onMouseEnter={() => setb3hover(true)}
            onMouseLeave={() => setb3hover(false)}
            style={{ color: 'white', alignSelf: 'end' }}
          >
            Hover me
          </InfoIcon>
        </Comp>
        <Comp
          when={b4hover}
          show={
            <Tooltip>
              I am some really long content, look at me go, i am so long and
              contentful
            </Tooltip>
          }
        >
          <InfoIcon
            style={{ color: 'white', justifySelf: 'end', alignSelf: 'end' }}
            onMouseEnter={() => setb4hover(true)}
            onMouseLeave={() => setb4hover(false)}
          >
            Hover me
          </InfoIcon>
        </Comp>
      </div>
    )
  }
  edgeCaseStories.add(displayName, () => <Demo />)
})
