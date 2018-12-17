import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { withTheme } from '@pluralsight/ps-design-system-theme/react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'

import css from '../css'

// TODO: move to custom prop-types package and import
import elementOfType from './element-of-type'

const styles = {
  infoState: ({ themeName }) =>
    glamor.css(
      css['.psds-infostate'],
      css[`.psds-infostate.psds-theme--${themeName}`]
    )
}

const Actions = props => <div {...filterReactProps(props)} />
Actions.displayName = 'InfoState.Actions'

const Caption = props => <div {...filterReactProps(props)} />
Caption.displayName = 'InfoState.Caption'

const Heading = ({ as: Tag, ...props }) => (
  <Tag {...filterReactProps(props, { tagName: Tag })} />
)
Heading.displayName = 'InfoState.Heading'
Heading.defaultProps = { as: 'h1' }
Heading.propTypes = { as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']) }

const Illustration = props => <div {...filterReactProps(props)} />
Illustration.displayName = 'InfoState.Illustration'

const InfoState = withTheme(props => (
  <div {...styles.infoState(props)} {...filterReactProps(props)}>
    {props.illustration}
    {props.heading}
    {props.caption}
    {props.actions}
  </div>
))

InfoState.Actions = Actions
InfoState.Caption = Caption
InfoState.Heading = Heading
InfoState.Illustration = Illustration

InfoState.propTypes = {
  actions: elementOfType(Actions),
  caption: PropTypes.oneOfType([PropTypes.string, elementOfType(Caption)]),
  heading: PropTypes.oneOfType([PropTypes.string, elementOfType(Heading)]),
  illustration: elementOfType(Illustration),
  themeName: PropTypes.oneOf(Object.values(themeNames))
}

export default InfoState
