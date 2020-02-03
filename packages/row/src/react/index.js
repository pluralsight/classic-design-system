import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { elementOfType } from '@pluralsight/ps-design-system-prop-types'
import {
  withTheme,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'
import { toPercentageString } from '../js/index.js'
import * as vars from '../vars/index.js'

import ConditionalWrap from './conditional-wrap.js'
import Shave from './shave.js'
import useMatchMedia from './use-match-media.js'

const formatImageWidth = ({ image, size }) =>
  image && size !== vars.sizes.small
    ? `(${vars.style.overlaysWidth} + ${vars.style.overlaysMarginRight})`
    : `0px`

const formatActionBarWidth = ({ actionBar }) =>
  Array.isArray(actionBar) && actionBar.length > 1
    ? `(${actionBar.length} * ${vars.style.actionBarActionWidth} + ${actionBar.length} * ${vars.style.actionBarActionMarginLeft})`
    : '0px'

const styles = {
  actionBar: ({ actionBarVisible: visible, fullOverlay }) =>
    compose(
      css(stylesheet['.psds-row__action-bar']),
      fullOverlay && css(stylesheet['.psds-row__action-bar--fullOverlay']),
      visible && css(stylesheet['.psds-row__action-bar--actionBarVisible'])
    ),
  fullOverlay: ({ fullOverlayVisible: visible, isFocused }) =>
    compose(
      css(stylesheet['.psds-row__full-overlay']),
      isFocused && css(stylesheet['.psds-row__full-overlay--isFocused']),
      visible && css(stylesheet['.psds-row__full-overlay--fullOverlayVisible'])
    ),
  fullOverlayLink: props => css(stylesheet['.psds-row__full-overlay-link']),
  image: props =>
    compose(
      css(stylesheet['.psds-row__image']),
      css({ backgroundImage: `url(${props.src})` })
    ),
  imageLink: () => css(stylesheet['.psds-row__image-link']),
  metadata: props =>
    compose(
      css(stylesheet['.psds-row__metadata']),
      css(stylesheet[`.psds-row__metadata.psds-theme--${props.themeName}`]),
      css(stylesheet[`.psds-row__metadata--size-${props.size}`])
    ),
  metadataDatum: () => css(stylesheet['.psds-row__metadata__datum']),
  metadataDot: () => css(stylesheet['.psds-row__metadata__dot']),
  overlays: () => css(stylesheet['.psds-row__overlays']),
  progress: () => css(stylesheet['.psds-row__progress']),
  progressBar: props => {
    const percent = toPercentageString(props.progress)
    const complete = percent === '100%'

    return compose(
      css(stylesheet['.psds-row__progress__bar']),
      complete && css(stylesheet['.psds-row__progress__bar--complete']),
      css({ width: percent })
    )
  },
  row: props =>
    css(
      stylesheet['.psds-row'],
      stylesheet[`.psds-row.psds-theme--${props.themeName}`]
    ),
  textLink: props =>
    compose(
      css(stylesheet['.psds-row__text-link']),
      css(stylesheet[`.psds-row__text-link.psds-theme--${props.themeName}`])
    ),
  title: props =>
    compose(
      css(stylesheet['.psds-row__title']),
      css(stylesheet[`.psds-row__title--size-${props.size}`]),
      css(stylesheet[`.psds-row__title.psds-theme--${props.themeName}`])
    ),
  words: props => {
    const imgWidth = formatImageWidth(props)
    const actionBarWidth = formatActionBarWidth(props)

    return compose(
      css(stylesheet['.psds-row__words']),
      css({ maxWidth: `calc(100% - ${imgWidth} - ${actionBarWidth})` })
    )
  }
}

const ActionBar = props => (
  <div {...styles.actionBar(props)} {...filterReactProps(props)} />
)

const FullOverlayFocusManager = ({ fullOverlayVisible, fullOverlay }) => {
  const [isFocused, setFocused] = useState(false)

  const handleFocus = _ => {
    setFocused(true)
  }

  const handleBlur = _ => {
    setFocused(false)
  }

  return fullOverlay ? (
    <FullOverlay isFocused={isFocused} fullOverlayVisible={fullOverlayVisible}>
      {React.cloneElement(fullOverlay, {
        onFocus: handleFocus,
        onBlur: handleBlur
      })}
    </FullOverlay>
  ) : null
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
  >
    ·
  </span>
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

const TextLink = withTheme(props => {
  const { children, truncated } = props

  const anchor = React.Children.only(children)
  const anchorText = anchor.props.children
  const childIsString = typeof anchorText === 'string'

  return (
    <span
      {...styles.textLink(props)}
      {...filterReactProps(props, { tagName: 'span' })}
    >
      <a {...anchor.props}>
        <ConditionalWrap
          shouldWrap={truncated && childIsString}
          wrapper={c => <Shave lines={2}>{c}</Shave>}
        >
          {anchorText}
        </ConditionalWrap>
      </a>
    </span>
  )
})
TextLink.displayName = 'Row.TextLink'
TextLink.defaultProps = {
  truncated: false
}
TextLink.propTypes = {
  children: PropTypes.oneOfType([elementOfType('a')]).isRequired,
  truncated: PropTypes.bool
}

const Title = withTheme(({ truncated, children, ...rest }) => {
  const childIsString = typeof children === 'string'

  const wrapAsLink = c => React.cloneElement(c, { truncated })
  const wrapWithShave = child => (
    <ConditionalWrap
      shouldWrap={truncated}
      wrapper={c => <Shave lines={2}>{c}</Shave>}
    >
      {child}
    </ConditionalWrap>
  )

  return (
    <div {...styles.title(rest)} {...filterReactProps(rest)}>
      {childIsString ? wrapWithShave(children) : wrapAsLink(children)}
    </div>
  )
})
Title.defaultProps = {
  truncated: false
}
Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, elementOfType(TextLink)]),
  truncated: PropTypes.bool
}

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
const Row = ({ title, titleTruncated, ...props }) => {
  const isDesktop = useMatchMedia('screen and (min-width: 769px)')
  if (!props.size) props.size = isDesktop ? vars.sizes.medium : vars.sizes.small

  return (
    <div {...styles.row(props)} {...filterReactProps(props)}>
      {renderOverlays(props)}

      <Words image={props.image} size={props.size} actionBar={props.actionBar}>
        <Title size={props.size} truncated={titleTruncated}>
          {title}
        </Title>

        {renderMetaData(props, props.metadata1)}
        {renderMetaData(props, props.metadata2)}
      </Words>

      {renderActionBar(props)}
    </div>
  )
}

Row.propTypes = {
  actionBar: PropTypes.arrayOf(PropTypes.object), // <Button size="small" appearance="secondary" />
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
  ]),
  titleTruncated: PropTypes.bool
}

Row.defaultProps = {
  actionBarVisible: false,
  fullOverlayVisible: false
}

Row.sizes = vars.sizes
export const sizes = Row.sizes

Row.FullOverlayLink = FullOverlayLink
Row.Image = Image
Row.ImageLink = ImageLink
Row.Text = Text
Row.TextLink = TextLink

export default Row
