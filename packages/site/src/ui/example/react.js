/* eslint-disable no-eval */

import { transform } from 'babel-standalone'
import debounce from 'debounce'
import FeatureFlags from '@pluralsight/ps-design-system-featureflags'
import PropTypes from 'prop-types'
import React from 'react'
import CodeMirror from 'react-codemirror'
import ReactDOM from 'react-dom'

import * as core from '@pluralsight/ps-design-system-core'
import Theme from '@pluralsight/ps-design-system-theme'

import CodeMirrorCss from '../../../vendor/codemirror-css.js'
import CodeMirrorPsTheme from '../codemirror-ps-theme.js'
import ThemeToggle from '../theme-toggle.js'

let modeLoaded = false
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  require('codemirror/mode/javascript/javascript')
  modeLoaded = true
}

const compileSrc = src => {
  const presets = [
    'es2015', // TODO: replace with preset-env when supported
    'react',
    'stage-2'
  ]

  return transform(src, { presets }).code
}

const formatSrc = code => code.trim()

const OutputDecorationGlobalStyles = _ => (
  <style global jsx>{`
    .output {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: ${core.layout.spacingXLarge} ${core.layout.spacingLarge};
      background: ${core.colors.gray06};
      overflow: hidden;
    }
    .outputLight {
      background: ${core.colors.bone};
    }
    .outputChild {
      margin: ${core.layout.spacingLarge} 0 0 0;
      color: ${core.colors.white};
      width: 100%;
    }
    .outputChild:first-child {
      margin-top: 0;
    }
    @media screen and (min-width: 769px) {
      .outputHorizontal {
        flex-direction: row;
      }
      .outputVertical {
        align-items: flex-start;
      }
      .outputChild + .outputChild {
        margin: 0 0 0 98px;
      }
      .outputVertical .outputChild {
        width: 100%;
      }
      .outputVertical .outputChild + .outputChild {
        margin: 45px 0 0 0;
      }
    }
  `}</style>
)

const defaultDecorateCodes = (props, state) => {
  let decorated = `<div className="${getOutputClassName(
    props,
    state
  )}" style={${JSON.stringify(props.outputStyle)}}>`

  state.codes.forEach(code => {
    decorated += `<div className="outputChild" style={${JSON.stringify(
      props.outputChildStyle
    )}}>${code}</div>`
  })

  decorated += '</div>'

  return decorated
}

const makeGlobalsAvailable = includes => {
  window.React = require('react')
  Object.keys(includes).forEach(name => {
    window[name] = includes[name]
  })
}

const evalSrc = compiled => eval(compiled)

const renderOutput = ({ featureFlags, themeName }, evaled, el) => {
  ReactDOM.render(
    <FeatureFlags flags={featureFlags}>
      <Theme name={themeName}>{evaled}</Theme>
    </FeatureFlags>,
    el
  )
}

const unmountOutput = el => ReactDOM.unmountComponentAtNode(el)

const getOutputClassName = (props, state) =>
  `output ${state.themeName === Theme.names.light ? 'outputLight' : ''} ${
    props.orient === 'vertical' ? 'outputVertical' : 'outputHorizontal'
  }`

class ReactExample extends React.Component {
  constructor(props) {
    super(props)
    this.outputEl = React.createRef()
    this.state = {
      codes: props.codes,
      error: null,
      featureFlags: props.featureFlags || {},
      themeName: props.themeName
    }
    this.handleCodeChange = this.handleCodeChange.bind(this)
    this.handleThemeSelect = this.handleThemeSelect.bind(this)
  }

  componentDidMount() {
    this.renderOutput()
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.codes !== prevProps.codes ||
      this.state.featureFlags !== prevState.featureFlags ||
      this.state.themeName !== prevState.themeName
    )
      this.renderOutput()
  }

  componentWillUnmount() {
    unmountOutput(this.outputEl.current)
  }

  handleCodeChange(code, i) {
    const codes = [...this.state.codes]
    codes[i] = code
    this.setState(_ => ({ codes }), debounce(this.renderOutput, 200))
  }

  handleThemeSelect(evt, index) {
    const themeName = Theme.names[Object.keys(Theme.names)[index]]
    this.setState({ themeName })
  }

  renderOutput() {
    if (typeof window === 'undefined') return

    unmountOutput(this.outputEl.current)
    this.setState(
      _ => ({ error: null }),
      _ => {
        try {
          const src = (this.props.decorateCodes || defaultDecorateCodes)(
            this.props,
            this.state
          )
          const compiled = compileSrc(src)
          makeGlobalsAvailable(this.props.includes)
          const evaled = evalSrc(compiled)
          renderOutput(this.state, evaled, this.outputEl.current)
        } catch (err) {
          console.log('err', err)
          unmountOutput(this.outputEl.current)
          this.setState(_ => ({ error: err.toString() }))
        }
      }
    )
  }

  renderSrc() {
    const options = { theme: 'ps-codemirror' }
    if (modeLoaded) options.mode = 'javascript'

    return (
      <div className="editor">
        {this.state.codes.map((code, i) => (
          <CodeMirror
            key={i}
            value={formatSrc(code)}
            onChange={code => this.handleCodeChange(code, i)}
            options={options}
          />
        ))}
        <style jsx>{`
          .editor :global(.CodeMirror) {
            background: none;
          }
          .editor :global(.CodeMirror),
          .editor :global(.CodeMirror-scroll) {
            height: auto;
          }
        `}</style>
        <CodeMirrorCss />
        <CodeMirrorPsTheme />
      </div>
    )
  }

  renderError() {
    return this.state.error ? (
      <pre className="error">
        {this.state.error}
        <style jsx>{`
          .error {
            background: ${core.colors.red};
            color: ${core.colors.white};
            overflow: hidden;
            padding: ${core.layout.spacingLarge};
          }
        `}</style>
      </pre>
    ) : null
  }

  render() {
    return (
      <div className="example">
        {this.renderError()}

        {this.props.themeToggle && (
          <ThemeToggle
            activeThemeName={this.state.themeName}
            onSelect={this.handleThemeSelect}
          />
        )}

        <div ref={this.outputEl} />

        <OutputDecorationGlobalStyles />

        <div className="src">{this.renderSrc()}</div>

        <style jsx>{`
          .example {
            position: relative;
          }
          .src {
            padding: ${core.layout.spacingLarge};
            background: ${core.colors.gray04};
          }
        `}</style>
      </div>
    )
  }
}

ReactExample.propTypes = {
  codes: PropTypes.arrayOf(PropTypes.string),
  decorateCodes: PropTypes.func,
  featureFlags: PropTypes.object,
  includes: PropTypes.object,
  /* eslint-disable react/no-unused-prop-types */
  outputChildStyle: PropTypes.object,
  outputStyle: PropTypes.object,
  /* eslint-enable react/no-unused-prop-types */
  themeName: PropTypes.oneOf(Object.keys(Theme.names)),
  themeToggle: PropTypes.bool
}

ReactExample.defaultProps = {
  featureFlags: {},
  orient: 'horizontal',
  themeName: Theme.defaultName,
  themeToggle: false
}

export default ReactExample
