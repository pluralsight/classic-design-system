import core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'
import React from 'react'
import { storiesOf } from '@storybook/react'
import Tooltip from '@pluralsight/ps-design-system-tooltip/react'

import * as positionFns from '../../js/index.js'
import * as positionComponents from '../index.js'

const Box = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{
      height: '200px',
      width: '200px',
      border: `4px dashed ${core.colors.pink}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: core.colors.pink,
      fontSize: core.type.fontSizeMedium,
      fontWeight: core.type.fontWeightBold,
      ...props.style
    }}
  >
    {props.children}
  </div>
))
Box.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

// NOTE: old style refs to make storybook/storyshots happy
class JsStory extends React.Component {
  constructor(props) {
    super(props)

    this.state = { style: {} }
    this.tooltipRef = React.createRef()
  }

  componentDidMount() {
    if (!this.boxEl || !this.tooltipRef.current) return

    const fn = positionFns[this.props.positionType]

    const nextStyles = fn(this.boxEl).styleFor(this.tooltipRef.current)
    this.setState({ styles: nextStyles })
  }

  render() {
    const { positionType } = this.props
    const tailPositions = {
      above: Tooltip.tailPositions.bottomCenter,
      aboveLeft: Tooltip.tailPositions.bottomLeft,
      aboveRight: Tooltip.tailPositions.bottomRight,
      rightOf: null,
      below: Tooltip.tailPositions.topCenter,
      belowLeft: Tooltip.tailPositions.topLeft,
      belowRight: Tooltip.tailPositions.topRight,
      leftOf: null
    }
    const tailPosition = tailPositions[positionType]

    return (
      <div>
        <Box ref={el => (this.boxEl = el)}>{positionType}</Box>

        <Tooltip
          ref={this.tooltipRef}
          style={{ position: 'absolute', ...this.state.styles }}
          tailPosition={tailPosition}
        >
          The tip
        </Tooltip>
      </div>
    )
  }
}

JsStory.propTypes = {
  positionType: PropTypes.oneOf(Object.keys(positionFns)).isRequired
}

const jsStory = storiesOf('js', module)
Object.keys(positionFns).forEach(pos =>
  jsStory.add(pos, _ => <JsStory positionType={pos} />)
)

const reactStory = storiesOf('react', module)
Object.values(positionComponents).forEach(Comp =>
  reactStory.add(Comp.displayName, () => (
    <Comp show={<Tooltip>The tip</Tooltip>}>
      <Box>{'<' + Comp.displayName + '/>'}</Box>
    </Comp>
  ))
)

const { Below } = positionComponents
reactStory.add('when=false', () => (
  <Below when={false} show={<Tooltip>The tip</Tooltip>}>
    <Box>Hidden</Box>
  </Below>
))

reactStory.add('test.skip inNode', () => {
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
