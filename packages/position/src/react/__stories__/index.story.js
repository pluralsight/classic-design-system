import core from '@pluralsight/ps-design-system-core'
import { storiesOf } from '@storybook/react'
import React from 'react'
import Tooltip from '@pluralsight/ps-design-system-tooltip/react'

import * as position from '../../js/index.js'

// NOTE: old style refs to make storybook/storyshots happy
class StyleStory2 extends React.Component {
  constructor() {
    super()
    this.state = { style: {} }
  }
  componentDidMount() {
    const { props } = this
    if (this.boxEl && this.tooltipEl)
      this.setState({
        styles: position[props.styleFunction](this.boxEl).styleFor(
          this.tooltipEl
        )
      })
  }
  render() {
    const { props } = this
    const tailPositions = {
      styleAbove: Tooltip.tailPositions.bottomCenter,
      styleRightOf: null,
      styleBelow: Tooltip.tailPositions.topCenter,
      styleLeftOf: null
    }

    class Box extends React.Component {
      render() {
        const { props } = this
        return (
          <div
            ref={props.innerRef}
            style={{
              height: '200px',
              width: '200px',
              border: `4px dashed ${core.colors.pink}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: core.colors.pink,
              fontSize: core.type.fontSizeMedium,
              fontWeight: core.type.fontWeightBold,
              ...props.style
            }}
          >
            {props.children}
          </div>
        )
      }
    }

    return (
      <div>
        <Box innerRef={el => (this.boxEl = el)}>Below</Box>
        <Tooltip
          innerRef={el => (this.tooltipEl = el)}
          style={this.state.styles}
          tailPositio={tailPositions[props.styleFunction]}
        >
          The tip
        </Tooltip>
      </div>
    )
  }
}

const styleStory = storiesOf('Position', module)
;['above', 'rightOf', 'below', 'leftOf'].forEach(styleFunction =>
  styleStory.add(styleFunction, _ => {
    return <StyleStory2 styleFunction={styleFunction} />
  })
)
