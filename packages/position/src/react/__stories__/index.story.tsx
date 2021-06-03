import { InfoIcon } from '@pluralsight/ps-design-system-icon'
import * as core from '@pluralsight/ps-design-system-core'
import { Tooltip } from '@pluralsight/ps-design-system-tooltip'
import { HTMLPropsFor, usePortal } from '@pluralsight/ps-design-system-util'
import { storiesOf } from '@storybook/react'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import {
  above,
  aboveLeft,
  aboveRight,
  below,
  belowLeft,
  belowRight,
  rightOf,
  leftOf
} from '../../js/index'
import {
  Above,
  AboveLeft,
  AboveRight,
  Below,
  BelowLeft,
  BelowRight,
  LeftOf,
  RightOf
} from '../index'

const glamor = glamorDefault || glamorExports

const positionComponents = {
  Above,
  AboveLeft,
  AboveRight,
  Below,
  BelowLeft,
  BelowRight,
  LeftOf,
  RightOf
}

const positionFns = {
  above,
  aboveLeft,
  aboveRight,
  below,
  belowLeft,
  belowRight,
  rightOf,
  leftOf
}

const Box = React.forwardRef<HTMLDivElement, HTMLPropsFor<'div'>>(
  (props, forwardedRef) => {
    const ref = React.useRef<HTMLDivElement>(null)
    /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion */
    React.useImperativeHandle(forwardedRef, () => ref.current as HTMLDivElement)

    const selectors = glamor.css({
      position: 'relative',
      top: '200px',
      left: '200px',
      alignItems: 'center',
      border: `4px dashed ${core.colorsPink[6]}`,
      color: core.colorsPink[6],
      display: 'flex',
      fontSize: core.type.fontSize400,
      fontWeight: core.type.fontWeight700,
      height: '200px',
      justifyContent: 'center',
      textAlign: 'center',
      width: '200px'
    })

    return (
      <div {...selectors} ref={ref}>
        {props.children}
      </div>
    )
  }
)

const MockToolip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, forwardedRef) => {
  const ref = React.useRef<HTMLDivElement>(null)
  /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion */
  React.useImperativeHandle(forwardedRef, () => ref.current as HTMLDivElement)

  return (
    <Tooltip ref={ref} {...props}>
      The tip
    </Tooltip>
  )
})

const ScrollContainer: React.FC = props => {
  const containerSelectors = glamor.css({
    border: `4px dashed ${core.colorsOrange[6]}`,
    color: core.colorsTextIcon.highOnDark,
    height: 500,
    overflow: 'scroll',
    padding: 20,
    width: 500
  })
  const shimSelectors = glamor.css({
    border: `1px dashed ${core.colorsBorder.highOnLight}`,
    height: 200,
    margin: '20px 0',
    opacity: 0.4
  })

  return (
    <div {...containerSelectors}>
      <div {...shimSelectors} />
      {props.children}
      <div {...shimSelectors} />
    </div>
  )
}

const basicStories = storiesOf('Components | Position / basic', module)
Object.values(positionComponents).forEach(Comp => {
  const { displayName } = Comp
  const name = `<${Comp.displayName} />`

  basicStories.add(displayName as string, () => (
    <Comp show={<MockToolip />}>
      <Box>{name}</Box>
    </Comp>
  ))
})

storiesOf('Components | Position / custom style', module).add(
  'shown element keeps style prop',
  () => (
    <positionComponents.Above
      show={<MockToolip style={{ color: core.colorsPink[6] }} />}
    >
      <Box>Tooltip is pink</Box>
    </positionComponents.Above>
  )
)

storiesOf('Components | Position / custom ref', module).add(
  'shown element keeps style prop',
  () => {
    const ref = React.useRef<HTMLDivElement>(null)
    const { x, y } = !ref.current
      ? { x: -1, y: -1 }
      : ref.current.getBoundingClientRect()

    return (
      <>
        <positionComponents.Above
          show={<MockToolip style={{ color: core.colorsPink[6] }} ref={ref} />}
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

  const Outer: React.FC = props => {
    const selectors = glamor.css({
      border: `4px dashed ${core.colorsOrange[6]}`,
      color: core.colorsTextIcon.highOnDark,
      height: 500,
      padding: 20,
      width: 500
    })
    return <div {...props} {...selectors} />
  }

  interface PortalStoryProps {
    children(props: {
      // TODO: make this type more precise in util package
      portal: React.MutableRefObject<HTMLDivElement>
    }): React.ReactNode
  }
  const PortalStory = (props: PortalStoryProps) => {
    const portal = usePortal() as React.MutableRefObject<HTMLDivElement>
    return <Outer>{props.children({ portal })}</Outer>
  }

  portalStories.add(displayName as string, () => (
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
  const TargetStory: React.FC = props => {
    const ref = React.useRef<HTMLDivElement>(null)

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

  targetStories.add(displayName as string, () => <TargetStory />)
})

storiesOf('Components | Position / in scrollable container', module).add(
  'RightOf',
  () => {
    function ScrollStory() {
      const ref = React.useRef<HTMLDivElement>(null)

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
Object.keys(positionFns).forEach((pos: string) =>
  jsStory.add(pos, () => (
    <JsStory positionFnName={pos as keyof typeof positionFns} />
  ))
)

interface JsStoryProps {
  positionFnName: keyof typeof positionFns
}
const JsStory: React.FC<JsStoryProps> = ({ positionFnName }) => {
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
  const tailPosition = TAIL_POSITION_MAP[positionFnName]

  const boxRef = React.useRef<HTMLDivElement>(null)
  const tooltipRef = React.useRef<HTMLDivElement>(null)

  const [styles, setStyles] = React.useState<React.CSSProperties>({
    position: 'absolute'
  })

  React.useEffect(() => {
    const { current: box } = boxRef
    const { current: tooltip } = tooltipRef

    if (!box || !tooltip) return

    const fn = positionFns[positionFnName]
    const nextStyles = fn(box).styleFor(tooltip)

    setStyles(nextStyles)
  }, [positionFnName])

  return (
    <div>
      <Box ref={boxRef}>{positionFnName}</Box>

      <Tooltip ref={tooltipRef} style={styles} tailPosition={tailPosition}>
        The tip
      </Tooltip>
    </div>
  )
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
  edgeCaseStories.add(displayName as string, () => <Demo />)
})
