import { InfoIcon } from '@pluralsight/ps-design-system-icon'
import * as core from '@pluralsight/ps-design-system-core'
import Tooltip from '@pluralsight/ps-design-system-tooltip'
import { usePortal } from '@pluralsight/ps-design-system-util'
import { Meta, Story } from '@storybook/react/types-6-0'
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

export default {
  title: 'Components/Position'
} as Meta

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

const Box = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, forwardedRef) => {
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
})

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

export const Positions: Story = () => (
  <StoryGrid style={{ gap: '128px' }}>
    {Object.values(positionComponents).map((Comp, i) => (
      <Comp show={<MockToolip />} key={i}>
        <Box>{`<${Comp.displayName} />`}</Box>
      </Comp>
    ))}
  </StoryGrid>
)

export const ShownElementKeepsStyleProp: Story = () => (
  <Above show={<MockToolip style={{ color: core.colorsPink[6] }} />}>
    <Box>Tooltip is pink</Box>
  </Above>
)

// TODO: this looks broken -- tooltip ref is not maintained
export const ShownElementKeepsRef: Story = () => {
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

export const PositionsInCustomPortal: Story = () => {
  return (
    <StoryGrid>
      {Object.values(positionComponents).map((Comp, i) => {
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

        return (
          <PortalStory key={i}>
            {({ portal }) => (
              <Comp show={<MockToolip />} inNode={portal.current}>
                <Box>{name}</Box>
              </Comp>
            )}
          </PortalStory>
        )
      })}
    </StoryGrid>
  )
}

export const Target: Story = () => (
  <StoryGrid style={{ gap: '128px' }}>
    {Object.values(positionComponents).map((Comp, i) => {
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

      return <TargetStory key={i} />
    })}
  </StoryGrid>
)

export const ScrollableContainer: Story = () => {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <ScrollContainer>
      <RightOf show={<Tooltip>The tip</Tooltip>} target={ref}>
        <Box ref={ref}>target</Box>
      </RightOf>
    </ScrollContainer>
  )
}

export const JavascriptPositions: Story = () => (
  <StoryGrid style={{ gap: '128px' }}>
    {Object.keys(positionFns).map((pos: string) => (
      <JsStory key={pos} positionFnName={pos as keyof typeof positionFns} />
    ))}
  </StoryGrid>
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

export const PositionsOnEdge: Story = () => (
  <div
    style={{
      color: 'white',
      position: 'relative',
      outline: '10px solid red',
      height: '100vh',
      background: 'pink'
    }}
  >
    <div style={{ position: 'absolute', top: 0, left: 0 }}>
      <AboveRight
        when
        show={<Tooltip>AboveRight</Tooltip>}
        keepInViewport={true}
      >
        <InfoIcon />
      </AboveRight>
    </div>

    <div style={{ position: 'absolute', top: 0, left: '50%' }}>
      <Above when show={<Tooltip>Above</Tooltip>} keepInViewport={true}>
        <InfoIcon />
      </Above>
    </div>

    <div style={{ position: 'absolute', top: 0, right: 0 }}>
      <AboveLeft when show={<Tooltip>AboveLeft</Tooltip>} keepInViewport={true}>
        <InfoIcon />
      </AboveLeft>
    </div>

    <div style={{ position: 'absolute', top: '50%', left: 0 }}>
      <LeftOf when show={<Tooltip>LeftOf</Tooltip>} keepInViewport={true}>
        <InfoIcon />
      </LeftOf>
    </div>

    <div style={{ position: 'absolute', top: '50%', right: 0 }}>
      <RightOf when show={<Tooltip>RightOf</Tooltip>} keepInViewport={true}>
        <InfoIcon />
      </RightOf>
    </div>

    <div style={{ position: 'absolute', bottom: 0, left: 0 }}>
      <BelowRight
        when
        show={<Tooltip>BelowRight</Tooltip>}
        keepInViewport={true}
      >
        <InfoIcon />
      </BelowRight>
    </div>

    <div style={{ position: 'absolute', bottom: 0, left: '50%' }}>
      <Below when show={<Tooltip>Below</Tooltip>} keepInViewport={true}>
        <InfoIcon />
      </Below>
    </div>

    <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
      <BelowLeft when show={<Tooltip>BelowLeft</Tooltip>} keepInViewport={true}>
        <InfoIcon />
      </BelowLeft>
    </div>
  </div>
)

// TODO: make reusable
//
interface StoryGridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: number
}
const StoryGrid: React.FC<StoryGridProps> = props => {
  const { cols = 2, style, ...rest } = props

  return (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: Array(cols).fill('1fr').join(' '),
        justifyItems: 'left',
        ...style
      }}
      {...rest}
    />
  )
}
