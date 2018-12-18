import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { withTheme } from '@pluralsight/ps-design-system-theme/react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'

import css from '../css'
import * as vars from '../vars'

import * as illustrations from './illustrations'

// TODO: move to custom prop-types package and import
import elementOfType from './element-of-type'

const styles = {
  infoState: ({ themeName }) =>
    glamor.css(
      css['.psds-infostate'],
      css[`.psds-infostate.psds-theme--${themeName}`]
    ),

  actions: () => glamor.css(css['.psds-infostate__actions']),
  caption: () => glamor.css(css['.psds-infostate__caption']),
  heading: () => glamor.css(css['.psds-infostate__heading']),
  illustration: () => glamor.css(css['.psds-infostate__illustration'])
}

const Actions = props => (
  <div {...styles.actions(props)} {...filterReactProps(props)} />
)
Actions.propTypes = {
  children: PropTypes.node
}

const Caption = props => (
  <div {...styles.caption(props)} {...filterReactProps(props)} />
)
Caption.propTypes = {
  children: PropTypes.node
}

const Heading = ({ as: Tag, ...props }) => (
  <Tag
    {...styles.heading(props)}
    {...filterReactProps(props, { tagName: Tag })}
  />
)
Heading.defaultProps = {
  as: 'h1'
}
Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  children: PropTypes.node
}

const IllustrationNotFound = () => null
const Illustration = props => {
  const Comp = illustrations[props.name] || IllustrationNotFound
  return (
    <Comp
      {...styles.illustration(props)}
      {...filterReactProps(props, { tagName: 'svg' })}
    />
  )
}
Illustration.names = Object.values(vars.illustrationNames)
Illustration.propTypes = {
  children: PropTypes.node,
  name: PropTypes.oneOf(Illustration.names)
}

const InfoState = withTheme(props => (
  <div {...styles.infoState(props)} {...filterReactProps(props)}>
    {props.illustration}
    {props.heading}
    {props.caption}
    {props.actions}
  </div>
))

InfoState.propTypes = {
  actions: elementOfType(Actions),
  caption: elementOfType(Caption),
  heading: elementOfType(Heading).isRequired,
  illustration: elementOfType(Illustration),
  themeName: PropTypes.oneOf(Object.values(themeNames))
}

InfoState.Actions = Actions
InfoState.Actions.displayName = 'InfoState.Actions'

InfoState.Caption = Caption
InfoState.Caption.displayName = 'InfoState.Caption'

InfoState.Heading = Heading
InfoState.Heading.displayName = 'InfoState.Heading'

InfoState.Illustration = Illustration
InfoState.Illustration.displayName = 'InfoState.Illustration'

export default InfoState
