import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'
import { transparentize } from 'polished'

// import validateComponentType from './validate-component-type'

export const sizes = { small: 'small', medium: 'medium' }

const overlaysWidth = '96px'
const overlaysMarginRight = core.layout.spacingLarge

const xSmallIconWidth = '24px'
const actionBarActionWidth = xSmallIconWidth
const actionBarActionMarginLeft = core.layout.spacingMedium

const Row = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: `${core.layout.spacingSmall} 0`,
  textAlign: 'left',
  borderTop: `1px solid ${core.colors.gray04}`,
  ':hover div, :active div': {
    opacity: 1
  }
})

const Overlays = glamorous.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: overlaysMarginRight,
  height: '72px',
  width: overlaysWidth,
  overflow: 'hidden'
})

const renderOverlays = props =>
  props.image && props.size !== sizes.small ? (
    <Overlays size={props.size}>
      {renderImage(props)}
      <FullOverlayFocusManager {...props} />
      {renderProgress(props)}
    </Overlays>
  ) : null

const ImageDiv = glamorous.div({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
})

const Image = props => (
  <ImageDiv {...props} css={{ backgroundImage: `url(${props.src})` }} />
)
Image.displayName = 'Row.Image'
Image.propTypes = {
  src: PropTypes.string.isRequired
}

const renderImage = props => (props.image ? props.image : null)

const FullOverlayLinkSpan = glamorous.span({
  pointerEvents: 'all'
})
const FullOverlayLink = props => (
  <FullOverlayLinkSpan
    {...props}
    onFocus={props._onFocus}
    onBlur={props._onBlur}
  />
)

const styleFullOverlayFullOverlayVisible = ({ fullOverlayVisible }) =>
  fullOverlayVisible ? { opacity: 1 } : {}

const FullOverlay = glamorous.div(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: transparentize(0.5, core.colors.black),
    transition: `opacity ${core.motion.speedNormal}`,
    pointerEvents: 'none'
  },
  ({ isFocused }) => (isFocused ? { opacity: 1 } : { opacity: 0 }),
  styleFullOverlayFullOverlayVisible
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

const styleActionBarFullOverlay = ({ fullOverlay }) =>
  fullOverlay ? { background: 'none' } : {}

const styleActionBarActionBarVisible = ({ actionBarVisible }) =>
  actionBarVisible ? { opacity: 1 } : {}

const ActionBar = glamorous.div(
  {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    lineHeight: 0,
    height: '64px',
    transition: `opacity ${core.motion.speedNormal}`,
    pointerEvents: 'none',
    opacity: 0
  },
  styleActionBarFullOverlay,
  styleActionBarActionBarVisible
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
    pointerEvents: 'all',
    fontSize: core.type.fontSizeXSmall,
    marginLeft: actionBarActionMarginLeft,
    padding: 0,
    lineHeight: 0,
    cursor: 'pointer',
    border: 'none',
    color: transparentize(0.2, core.colors.white),
    background: 'none',
    transition: `all ${core.motion.speedNormal}`,
    ':hover, :active': {
      color: core.colors.white
    }
  },
  ({ disabled }) =>
    disabled
      ? {
          color: core.colors.gray02,
          background: core.colors.gray03,
          ':hover': {
            color: core.colors.gray02,
            background: core.colors.gray03
          }
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

const Progress = glamorous.div({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  height: 5,
  borderTop: `1px solid ${transparentize(0.8, core.colors.black)}`,
  backgroundColor: transparentize(0.6, core.colors.gray01),
  overflow: 'hidden'
})

const percent = num => {
  try {
    return Math.min(parseFloat(num).toFixed(), 100) + '%'
  } catch (_) {
    return '0%'
  }
}

const styleProgressBarProgress = ({ progress }) => ({
  backgroundColor:
    percent(progress) == '100%' ? core.colors.green : core.colors.white,
  width: percent(progress)
})

const ProgressBar = glamorous.div(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '0%',
    height: '5px'
  },
  styleProgressBarProgress
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
  image && size !== sizes.small
    ? `(${overlaysWidth} + ${overlaysMarginRight})`
    : `0px`

const formatActionBarWidth = ({ actionBar }) =>
  Array.isArray(actionBar) && actionBar.length > 1
    ? `(${actionBar.length} * ${actionBarActionWidth} + ${actionBar.length} * ${
        actionBarActionMarginLeft
      })`
    : '0px'

const Words = glamorous.div(
  {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    minWidth: 0
  },
  props => ({
    maxWidth: `calc(100% - ${formatImageWidth(props)} - ${formatActionBarWidth(
      props
    )})`
  })
)

const styleTitleSize = ({ size }) =>
  ({
    [sizes.small]: {
      // marginTop: core.layout.spacingXXSmall,
      fontSize: core.type.fontSizeSmall,
      lineHeight: core.type.lineHeightTight
    },
    [sizes.medium]: {
      // marginTop: core.layout.spacingSmall,
      fontSize: core.type.fontSizeMedium,
      lineHeight: core.type.lineHeightStandard
    }
  }[size])

const Title = glamorous.div(
  {
    display: 'block',
    fontWeight: core.type.fontWeightMedium,
    color: core.colors.white,
    textAlign: 'left'
  },
  styleTitleSize
)

const ImageLink = glamorous.span({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  pointerEvents: 'all',
  '& a': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    textDecoration: 'none',
    transition: `all ${core.motion.speedNormal}`
  }
})
ImageLink.displayName = 'Row.ImageLink'

const TextLink = glamorous.span({
  pointerEvents: 'all',
  '& a': {
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  '& a:hover, & a:active': {
    color: core.colors.white,
    textDecoration: 'underline',
    transition: `all ${core.motion.speedNormal}`
  }
})
TextLink.displayName = 'Row.TextLink'

const Text = glamorous.span()
Text.displayName = 'Row.Text'

const styleMetadataSize = ({ size }) =>
  ({
    [sizes.small]: {
      fontSize: core.type.fontSizeXSmall,
      paddingTop: 0
    },
    [sizes.medium]: {
      fontSize: core.type.fontSizeXSmall,
      paddingTop: core.layout.spacingXXSmall
    }
  }[size])

const Metadata = glamorous.div(
  {
    display: 'flex',
    alignItems: 'center',
    fontWeight: core.type.fontWeightBook,
    lineHeight: core.type.lineHeightTight,
    color: core.colors.gray02,
    maxWidth: '100%',
    paddingTop: core.layout.spacingXXSmall
  },
  styleMetadataSize
)

const MetadataDatum = glamorous.span({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  flexShrink: 2,
  ':nth-of-type(1)': {
    flexShrink: 1
  }
})

// const MetadataLink = glamorous.span({})

const MetadataDot = glamorous.span({
  display: 'inline-block',
  margin: `0 ${core.layout.spacingXSmall}`
})

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

RowComponent.sizes = sizes
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
  // size: PropTypes.oneOf(Object.keys(sizes))

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
  size: PropTypes.oneOf(Object.keys(sizes)),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
}
RowComponent.defaultProps = {
  actionBarVisible: false,
  fullOverlayVisible: false,
  size: sizes.medium
}

export default RowComponent
