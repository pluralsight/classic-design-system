import Button from '@pluralsight/ps-design-system-button'
import CodeMirror from 'react-codemirror'
import * as core from '@pluralsight/ps-design-system-core'
import { CodeIcon } from '@pluralsight/ps-design-system-icon'
import PropTypes from 'prop-types'
import React from 'react'

import CodeMirrorCss from '../../vendor/codemirror-css.js'
import CodeMirrorPsTheme from './codemirror-ps-theme.js'

let modeLoaded = false
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  require('codemirror/mode/javascript/javascript')
  require('codemirror/mode/css/css')
  modeLoaded = true
}

const CollapsibleButton = props => (
  <Button
    style={{
      position: 'absolute',
      top: core.layout.spacingLarge,
      right: core.layout.spacingLarge,
      color: core.colorsTextIcon.lowOnDark,
      zIndex: 10 /* TODO: arbitrary; above code mirror; come back when ready to systemize */
    }}
    icon={<CodeIcon />}
    appearance={Button.appearances.flat}
    onClick={props.onClick}
    size={Button.sizes.xSmall}
  >
    {props.isOpen ? 'Hide' : 'Show'} code
  </Button>
)
CollapsibleButton.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func
}

class Collapsible extends React.Component {
  constructor(props) {
    super(props)
    this.containerElement = React.createRef()
  }

  componentDidMount() {
    this.updateOverflowStyle(this.props.isOpen)
    if (!this.props.isOpen) {
      this.containerElement.current.style.height = this.props.height
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      this.toggle(nextProps.isOpen)
    }
  }

  toggle(isOpen) {
    // eslint-disable-next-line
    if (isOpen) setTimeout(() => this.open(), 0)
    else this.close()
  }

  open() {
    const element = this.containerElement.current
    this.setHeightToAuto(element)
    this.updateOverflowStyle(true, true)
    return this.waitForHeightTransitionToEnd(element).then(() => {
      if (this.props.isOpen) {
        this.updateOverflowStyle(true, false)
        this.setTransitionEnabled(false, element)
        element.style.height = 'auto'
        this.forceRepaint(element)
        this.setTransitionEnabled(true, element)
      }
    })
  }

  close() {
    const element = this.containerElement.current
    this.setTransitionEnabled(false, element)
    element.style.height = window.getComputedStyle(element).height
    this.forceRepaint(element)
    this.updateOverflowStyle(false, true)
    this.setTransitionEnabled(true, element)
    element.style.height = this.props.height
    return this.waitForHeightTransitionToEnd(element).then(() => {
      if (!this.props.isOpen) {
        this.updateOverflowStyle(false, false)
      }
    })
  }

  updateOverflowStyle(isOpen, isTransitioning = false) {
    this.containerElement.current.style.overflow =
      isTransitioning || !isOpen ? 'hidden' : 'visible'
    // this.containerElement.style.visibility =
    //   isTransitioning || isOpen ? 'visible' : 'hidden'
  }

  setHeightToAuto(element) {
    const prevHeight = element.style.height
    element.style.height = 'auto'
    const autoHeight = window.getComputedStyle(element).height
    element.style.height = prevHeight
    this.forceRepaint(element)
    element.style.height = autoHeight
  }

  setTransitionEnabled(enabled, element) {
    element.style.transition = enabled ? '' : 'none'
  }

  forceRepaint(element) {
    // see https://stackoverflow.com/a/3485654
    element.offsetHeight // eslint-disable-line no-unused-expressions
  }

  waitForHeightTransitionToEnd(element) {
    return new Promise(resolve => {
      element.addEventListener(
        'transitionend',
        function transitionEnd(event) {
          if (event.propertyName === 'height') {
            element.removeEventListener('transitionend', transitionEnd, false)
            resolve()
          }
        },
        false
      )
    })
  }

  render() {
    return (
      <div ref={this.containerElement}>
        {this.props.children}
        <style jsx>{`
          overflow: hidden;
          transition: height ${core.motion.speedNormal};
        `}</style>
      </div>
    )
  }
}
Collapsible.displayName = 'Collapsible'
Collapsible.propTypes = {
  height: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node
}

/* TODO: rename CodeBlock, do inline as Code */
class Code extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: !props.collapsible }
    this.handleCollapsibleButtonClick = this.handleCollapsibleButtonClick.bind(
      this
    )
  }

  handleCollapsibleButtonClick() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { state, props } = this
    const options = {
      readOnly: true,
      theme: 'ps-codemirror'
    }
    if (modeLoaded) options.mode = props.lang

    return (
      <div className="code">
        <CodeMirrorCss />
        <CodeMirrorPsTheme />

        <Collapsible isOpen={state.isOpen} height="56px">
          <CodeMirror value={props.children} options={options} />
        </Collapsible>
        {state.isOpen ? (
          <div className="bottomBumper" />
        ) : (
          <div className="gradient" />
        )}
        {props.collapsible && (
          <CollapsibleButton
            isOpen={this.state.isOpen}
            onClick={this.handleCollapsibleButtonClick}
          />
        )}
        <style jsx>{`
          .code {
            position: relative;
            padding: ${core.layout.spacingMedium} ${core.layout.spacingLarge} 0
              ${core.layout.spacingLarge};
            background: ${core.colorsBackgroundDark[1]};
            transition: height ${core.motion.speedFast};
            height: auto;
          }
          .code :global(.CodeMirror) {
            background: none;
          }
          .code :global(.CodeMirror),
          .code :global(.CodeMirror-scroll) {
            height: auto;
          }
          .gradient {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              to bottom,
              transparent,
              ${core.colorsBackgroundDark[3]}
            );
            z-index: 9;
          }
          .bottomBumper {
            height: ${core.layout.spacingMedium};
          }
        `}</style>
      </div>
    )
  }
}

Code.propTypes = {
  children: PropTypes.node,
  collapsible: PropTypes.bool,
  lang: PropTypes.string
}

Code.defaultProps = {
  collapsible: false,
  lang: 'javascript'
}

export default Code
