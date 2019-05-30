import core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'
import React from 'react'
import { storiesOf } from '@storybook/react'
import Tooltip from '@pluralsight/ps-design-system-tooltip/react'

import { Above, Below, LeftOf, RightOf } from '../index.js'
import * as position from '../../js/index.js'

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
  constructor() {
    super()
    this.state = { style: {} }
    this.tooltipRef = React.createRef()
  }
  componentDidMount() {
    const { props } = this
    if (this.boxEl && this.tooltipRef.current)
      this.setState({
        styles: position[props.styleFunction](this.boxEl).styleFor(
          this.tooltipRef.current
        )
      })
  }
  render() {
    const { props } = this
    const tailPositions = {
      above: Tooltip.tailPositions.bottomCenter,
      rightOf: null,
      below: Tooltip.tailPositions.topCenter,
      leftOf: null
    }

    return (
      <div>
        <Box ref={el => (this.boxEl = el)}>{props.styleFunction}</Box>
        <Tooltip
          ref={this.tooltipRef}
          style={{ position: 'absolute', ...this.state.styles }}
          tailPosition={tailPositions[props.styleFunction]}
        >
          The tip
        </Tooltip>
      </div>
    )
  }
}

const jsStory = storiesOf('js', module)
;['above', 'rightOf', 'below', 'leftOf'].forEach(styleFunction =>
  jsStory.add(styleFunction, _ => {
    return <JsStory styleFunction={styleFunction} />
  })
)

const reactStory = storiesOf('react', module)
;[Above, RightOf, Below, LeftOf].forEach(Position =>
  reactStory.add(Position.displayName, () => (
    <Position show={<Tooltip>The tip</Tooltip>}>
      <Box>{'<' + Position.displayName + '/>'}</Box>
    </Position>
  ))
)

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
