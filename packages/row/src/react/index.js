import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'
import { transparentize } from 'polished'

import css from '../css'
import * as vars from '../vars'
// import validateComponentType from './validate-component-type'

const Row = glamorous.div({
  ...css['.psds-row'],
  ':hover div': css['.psds-row:hover div'],
  ':active div': css['.psds-row:active div'],
  ':first-of-type': css['.psds-row:first-of-type']
})

const Overlays = glamorous.div(css['.psds-row__overlays'])

const renderOverlays = props =>
  props.image && props.size !== vars.sizes.small ? (
    <Overlays size={props.size}>
      {renderImage(props)}
      <FullOverlayFocusManager {...props} />
      {renderProgress(props)}
    </Overlays>
  ) : null

const ImageDiv = glamorous.div(css['.psds-row__image'])

const Image = props => (
  <ImageDiv {...props} css={{ backgroundImage: `url(${props.src})` }} />
)
Image.displayName = 'Row.Image'
Image.propTypes = {
  src: PropTypes.string.isRequired
}

const renderImage = props => (props.image ? props.image : null)

const FullOverlayLinkSpan = glamorous.span(css['.psds-row__full-overlay-link'])
const FullOverlayLink = props => (
  <FullOverlayLinkSpan
    {...props}
    onFocus={props._onFocus}
    onBlur={props._onBlur}
  />
)

const FullOverlay = glamorous.div(
  css['.psds-row__full-overlay'],
  ({ isFocused }) =>
    isFocused ? css['.psds-row__full-overlay--isFocused'] : null,
  ({ fullOverlayVisible }) =>
    fullOverlayVisible
      ? css['.psds-row__full-overlay--fullOverlayVisible']
      : null
)

class FullOverlayFocusManager extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isFocused: false }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }
  handleFocus() {
    this.setState({ isFocused: true })
  }
  handleBlur() {
    this.setState({ isFocused: false })
  }
  render() {
    return this.props.fullOverlay ? (
      <FullOverlay
        isFocused={this.state.isFocused}
        fullOverlayVisible={this.props.fullOverlayVisible}
      >
        {React.cloneElement(this.props.fullOverlay, {
          _onFocus: this.handleFocus,
          _onBlur: this.handleBlur
        })}
      </FullOverlay>
    ) : null
  }
}

const ActionBar = glamorous.div(
  css['.psds-row__action-bar'],
  ({ fullOverlay }) =>
    fullOverlay ? css['.psds-row__action-bar--fullOverlay'] : null,
  ({ actionBarVisible }) =>
    actionBarVisible ? css['.psds-row__action-bar--actionBarVisible'] : null
)

const rmIcon = props => {
  const { icon, ...rest } = props
  return rest
}

const ActionBarAction = props => (
  <ActionButton {...rmIcon(props)}>{props.icon}</ActionButton>
)

const ActionButton = glamorous.button(
  {
    ...css['.psds-row__action-bar__button'],
    ':hover, :active': css['.psds-row__action-bar__button:hover']
  },
  ({ disabled }) =>
    disabled
      ? {
          ...css['.psds-row__action-bar__button--disabled'],
          ':hover': css['.psds-row__action-bar__button--disabled:hover']
        }
      : null
)

ActionBarAction.propTypes = {
  icon: PropTypes.element.isRequired
}

const renderActionBar = props =>
  Array.isArray(props.actionBar) && props.actionBar.length > 0 ? (
    <ActionBar
      actionBarVisible={props.actionBarVisible}
      fullOverlay={props.fullOverlay}
      size={props.size}
    >
      {props.actionBar}
    </ActionBar>
  ) : null

const Progress = glamorous.div(css['.psds-row__progress'])

const percent = num => {
  try {
    return Math.min(parseFloat(num).toFixed(), 100) + '%'
  } catch (_) {
    return '0%'
  }
}

const ProgressBar = glamorous.div(
  css['.psds-row__progress__bar'],
  ({ progress }) => ({
    ...(percent(progress) == '100%'
      ? css['.psds-row__progress__bar--complete']
      : null),
    width: percent(progress)
  })
)

const renderProgress = props =>
  props.progress ? (
    <Progress>
      <ProgressBar
        progress={props.progress}
        aria-label={`${percent(props.progress)} complete`}
      />
    </Progress>
  ) : null

const formatImageWidth = ({ image, size }) =>
  image && size !== vars.sizes.small
    ? `(${vars.style.overlaysWidth} + ${vars.style.overlaysMarginRight})`
    : `0px`

const formatActionBarWidth = ({ actionBar }) =>
  Array.isArray(actionBar) && actionBar.length > 1
    ? `(${actionBar.length} * ${vars.style.actionBarActionWidth} + ${
        actionBar.length
      } * ${vars.style.actionBarActionMarginLeft})`
    : '0px'

const Words = glamorous.div(css['.psds-row__words'], props => ({
  maxWidth: `calc(100% - ${formatImageWidth(props)} - ${formatActionBarWidth(
    props
  )})`
}))

const Title = glamorous.div(
  css['.psds-row__title'],
  ({ size }) => css[`.psds-row__title--size-${size}`]
)

const ImageLink = glamorous.span({
  ...css['.psds-row__image-link'],
  '& a': css['.psds-row__image-link a']
})
ImageLink.displayName = 'Row.ImageLink'

const TextLink = glamorous.span({
  ...css['.psds-row__text-link'],
  '& a': css['.psds-row__text-link a'],
  '& a:hover': css['.psds-row__text-link a:hover'],
  '& a:active': css['.psds-row__text-link a:active']
})
TextLink.displayName = 'Row.TextLink'

const Text = glamorous.span()
Text.displayName = 'Row.Text'

const Metadata = glamorous.div(
  css['.psds-row__metadata'],
  ({ size }) => css[`.psds-row__metadata--size-${size}`]
)

const MetadataDatum = glamorous.span({
  ...css['.psds-row__metadata__datum'],
  ':nth-of-type(1)': css['.psds-row__metadata__datum:nth-of-type(1)']
})

const MetadataDot = glamorous.span(css['.psds-row__metadata__dot'])

const renderMetaData = (props, metadata) =>
  metadata ? (
    <Metadata size={props.size}>
      {metadata.map((m, i) => [
        <MetadataDatum key={`datum${i}`}>{m}</MetadataDatum>,
        i < metadata.length - 1 && (
          <MetadataDot aria-hidden={true} key={`dot${i}`}>
            ·
          </MetadataDot>
        )
      ])}
    </Metadata>
  ) : null

const rmNonHtmlProps = props => {
  const {
    actionBar,
    actionBarVisible,
    fullOverlay,
    fullOverlayVisible,
    image,
    metadata1,
    metadata2,
    progress,
    size,
    title,
    ...rest
  } = props
  return rest
}

const RowComponent = props => (
  <Row {...rmNonHtmlProps(props)} size={props.size}>
    {renderOverlays(props)}
    <Words image={props.image} size={props.size} actionBar={props.actionBar}>
      <Title size={props.size}>{props.title}</Title>
      {renderMetaData(props, props.metadata1)}
      {renderMetaData(props, props.metadata2)}
    </Words>
    {renderActionBar(props)}
  </Row>
)

RowComponent.sizes = vars.sizes
RowComponent.Text = Text
RowComponent.TextLink = TextLink
RowComponent.Action = ActionBarAction
RowComponent.Image = Image
RowComponent.ImageLink = ImageLink
RowComponent.FullOverlayLink = FullOverlayLink

RowComponent.propTypes = {
  // TODO: come back to this with a fresh brain to do some custom child component validation
  // actionBar: PropTypes.arrayOf(validateComponentType([RowComponent.Action])),
  // actionBarVisible: PropTypes.bool,
  // fullOverlay: validateComponentType([RowComponent.FullOverlayLink]),
  // fullOverlayVisible: PropTypes.bool,
  // image: validateComponentType([Image, ImageLink]),
  // metadata1: PropTypes.arrayOf(validateComponentType([Text, TextLink])),
  // metadata2: PropTypes.arrayOf(validateComponentType([Text, TextLink])),
  // progress: PropTypes.number,
  // title: PropTypes.oneOfType([Text, RowComponent.TextLink]).isRequired,
  // size: PropTypes.oneOf(Object.keys(vars.sizes))

  actionBar: PropTypes.arrayOf(PropTypes.element),
  actionBarVisible: PropTypes.bool,
  fullOverlay: PropTypes.element,
  fullOverlayVisible: PropTypes.bool,
  image: PropTypes.element,
  metadata1: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  ),
  metadata2: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  ),
  progress: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(vars.sizes)),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
}
RowComponent.defaultProps = {
  actionBarVisible: false,
  fullOverlayVisible: false,
  size: vars.sizes.medium
}

export const sizes = vars.sizes

export default RowComponent
