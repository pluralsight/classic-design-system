import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { elementOfType } from '@pluralsight/ps-design-system-prop-types'
import { withTheme } from '@pluralsight/ps-design-system-theme/react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'

import css from '../css/index.js'
import { toPercentageString } from '../js/index.js'
import * as vars from '../vars/index.js'

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

const styles = {
  actionBar: ({ actionBarVisible: visible, fullOverlay }) =>
    glamor.css({
      ...css['.psds-row__action-bar'],
      ...(fullOverlay && css['.psds-row__action-bar--fullOverlay']),
      ...(visible && css['.psds-row__action-bar--actionBarVisible'])
    }),
  actionBarAction: ({ disabled, themeName }) =>
    glamor.css({
      ...css['.psds-row__action-bar__button'],
      ...css[`.psds-row__action-bar__button.psds-theme--${themeName}`],
      ...(disabled && css['.psds-row__action-bar__button--disabled'])
    }),
  fullOverlay: ({ fullOverlayVisible: visible, isFocused }) =>
    glamor.css({
      ...css['.psds-row__full-overlay'],
      ...(isFocused && css['.psds-row__full-overlay--isFocused']),
      ...(visible && css['.psds-row__full-overlay--fullOverlayVisible'])
    }),
  fullOverlayLink: props => glamor.css(css['.psds-row__full-overlay-link']),
  image: props =>
    glamor.css({
      ...css['.psds-row__image'],
      backgroundImage: `url(${props.src})`
    }),
  imageLink: () => glamor.css(css['.psds-row__image-link']),
  metadata: props =>
    glamor.css({
      ...css['.psds-row__metadata'],
      ...css[`.psds-row__metadata.psds-theme--${props.themeName}`],
      ...css[`.psds-row__metadata--size-${props.size}`]
    }),
  metadataDatum: () => glamor.css(css['.psds-row__metadata__datum']),
  metadataDot: () => glamor.css(css['.psds-row__metadata__dot']),
  overlays: () => glamor.css(css['.psds-row__overlays']),
  progress: () => glamor.css(css['.psds-row__progress']),
  progressBar: props => {
    const percent = toPercentageString(props.progress)

    return glamor.css({
      ...css['.psds-row__progress__bar'],
      ...(percent === '100%' && css['.psds-row__progress__bar--complete']),
      width: percent
    })
  },
  row: () => glamor.css(css['.psds-row']),
  textLink: props =>
    glamor.css({
      ...css['.psds-row__text-link'],
      ...css[`.psds-row__text-link.psds-theme--${props.themeName}`]
    }),
  title: props =>
    glamor.css({
      ...css['.psds-row__title'],
      ...css[`.psds-row__title--size-${props.size}`],
      ...css[`.psds-row__title.psds-theme--${props.themeName}`]
    }),
  words: props => {
    const imgWidth = formatImageWidth(props)
    const actionBarWidth = formatActionBarWidth(props)

    return glamor.css({
      ...css['.psds-row__words'],
      maxWidth: `calc(100% - ${imgWidth} - ${actionBarWidth})`
    })
  }
}

const ActionBar = props => (
  <div {...styles.actionBar(props)} {...filterReactProps(props)} />
)

const ActionBarAction = withTheme(
  React.forwardRef((props, ref) => {
    // eslint-disable-next-line react/prop-types
    const { icon, ...rest } = props
    const filteredProps = filterReactProps(rest, { tagName: 'button' })

    return (
      <button {...styles.actionBarAction(props)} ref={ref} {...filteredProps}>
        {icon}
      </button>
    )
  })
)

ActionBarAction.displayName = 'Row.Action'
ActionBarAction.propTypes = { icon: PropTypes.element.isRequired }

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
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        })}
      </FullOverlay>
    ) : null
  }
}
FullOverlayFocusManager.propTypes = {
  fullOverlay: PropTypes.node,
  fullOverlayVisible: PropTypes.bool
}

const FullOverlay = props => (
  <div {...styles.fullOverlay(props)} {...filterReactProps(props)} />
)

const FullOverlayLink = props => (
  <span
    {...styles.fullOverlayLink(props)}
    {...filterReactProps(props, { tagName: 'span' })}
  />
)
FullOverlayLink.displayName = 'Row.FullOverlayLink'

const Image = props => (
  <div {...styles.image(props)} {...filterReactProps(props)} />
)
Image.displayName = 'Row.Image'
Image.propTypes = { src: PropTypes.string.isRequired }

const ImageLink = props => (
  <span
    {...styles.imageLink(props)}
    {...filterReactProps(props, { tagName: 'span' })}
  />
)
ImageLink.displayName = 'Row.ImageLink'

const Metadata = withTheme(props => (
  <div {...styles.metadata(props)} {...filterReactProps(props)} />
))
Metadata.propTypes = {
  size: PropTypes.any
}

const MetadataDatum = props => (
  <span
    {...styles.metadataDatum(props)}
    {...filterReactProps(props, { tagName: 'span' })}
  />
)

const MetadataDot = props => (
  <span
    {...styles.metadataDot(props)}
    {...filterReactProps(props, { tagName: 'span' })}
    aria-hidden
    children={'·'}
  />
)

const Overlays = props => (
  <div {...styles.overlays(props)} {...filterReactProps(props)} />
)

const Progress = props => (
  <div {...styles.progress(props)} {...filterReactProps(props)} />
)

const ProgressBar = props => {
  const percent = toPercentageString(props.progress)

  return (
    <div
      {...styles.progressBar(props)}
      {...filterReactProps(props)}
      aria-label={`${percent} complete`}
    />
  )
}
ProgressBar.propTypes = {
  progress: PropTypes.number
}

const Text = props => <span {...filterReactProps(props, { tagName: 'span' })} />
Text.displayName = 'Row.Text'

const TextLink = withTheme(props => (
  <span
    {...styles.textLink(props)}
    {...filterReactProps(props, { tagName: 'span' })}
  />
))
TextLink.displayName = 'Row.TextLink'

const Title = withTheme(props => (
  <div {...styles.title(props)} {...filterReactProps(props)} />
))

const Words = props => (
  <div {...styles.words(props)} {...filterReactProps(props)} />
)
Words.propTypes = {
  actionBar: PropTypes.any,
  image: PropTypes.any,
  size: PropTypes.any
}

const renderActionBar = props => {
  const { actionBar } = props
  if (!Array.isArray(actionBar) || actionBar.length === 0) return null

  return (
    <ActionBar
      actionBarVisible={props.actionBarVisible}
      fullOverlay={props.fullOverlay}
      size={props.size}
    >
      {actionBar}
    </ActionBar>
  )
}
renderActionBar.propTypes = {
  actionBar: PropTypes.any,
  actionBarVisible: PropTypes.any,
  fullOverlay: PropTypes.any,
  size: PropTypes.any
}

const renderImage = props => props.image || null
renderImage.propTypes = {
  image: PropTypes.any
}

const renderMetaData = (props, metadata) => {
  if (!metadata) return null

  return (
    <Metadata size={props.size}>
      {metadata.map((datum, i) => {
        const hasNext = i < metadata.length - 1
        return [
          <MetadataDatum key={`datum${i}`}>{datum}</MetadataDatum>,
          hasNext && <MetadataDot key={`dot${i}`} />
        ]
      })}
    </Metadata>
  )
}
renderMetaData.propTypes = {
  size: PropTypes.any
}

const renderOverlays = props => {
  if (!props.image || props.size === vars.sizes.small) return null

  return (
    <Overlays size={props.size}>
      {renderImage(props)}
      <FullOverlayFocusManager
        fullOverlayVisible={props.fullOverlayVisible}
        fullOverlay={props.fullOverlay}
      />
      {renderProgress(props)}
    </Overlays>
  )
}
renderOverlays.propTypes = {
  fullOverlay: PropTypes.any,
  fullOverlayVisible: PropTypes.any,
  image: PropTypes.any,
  size: PropTypes.any
}

const renderProgress = props => {
  if (!props.progress) return null

  return (
    <Progress>
      <ProgressBar progress={props.progress} />
    </Progress>
  )
}
renderProgress.propTypes = {
  progress: PropTypes.any
}

// NOTE: the `title` prop clashes with a native html attr so we're exclude it
//       from being mistakenly used in any child component
const Row = ({ title, ...props }) => (
  <div {...styles.row(props)} {...filterReactProps(props)}>
    {renderOverlays(props)}

    <Words image={props.image} size={props.size} actionBar={props.actionBar}>
      <Title size={props.size}>{title}</Title>
      {renderMetaData(props, props.metadata1)}
      {renderMetaData(props, props.metadata2)}
    </Words>

    {renderActionBar(props)}
  </div>
)

Row.propTypes = {
  actionBar: PropTypes.arrayOf(elementOfType(ActionBarAction)),
  actionBarVisible: PropTypes.bool,
  fullOverlay: PropTypes.oneOfType([
    PropTypes.element,
    elementOfType(FullOverlayLink)
  ]),
  fullOverlayVisible: PropTypes.bool,
  image: PropTypes.oneOfType([elementOfType(Image), elementOfType(ImageLink)]),
  metadata1: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      elementOfType(Text),
      elementOfType(TextLink)
    ])
  ),
  metadata2: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      elementOfType(Text),
      elementOfType(TextLink)
    ])
  ),
  progress: PropTypes.number,
  size: PropTypes.oneOf(Object.values(vars.sizes)),
  themeName: PropTypes.oneOf(Object.values(themeNames)),
  title: PropTypes.oneOfType([
    PropTypes.string,
    elementOfType(Text),
    elementOfType(TextLink)
  ])
}

Row.defaultProps = {
  actionBarVisible: false,
  fullOverlayVisible: false,
  size: vars.sizes.medium
}

Row.sizes = vars.sizes
export const sizes = Row.sizes

Row.Action = ActionBarAction
Row.FullOverlayLink = FullOverlayLink
Row.Image = Image
Row.ImageLink = ImageLink
Row.Text = Text
Row.TextLink = TextLink

export default Row
