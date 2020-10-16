import polyfillFocusWithin from 'focus-within'

import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import Shiitake from 'shiitake'

import { sizes as iconSizes } from '@pluralsight/ps-design-system-icon'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'
import { toPercentageString } from '../js/index.js'
import * as vars from '../vars/index.js'

if (typeof window !== 'undefined') polyfillFocusWithin(document)

const styles = {
  actionBar: ({ actionBarVisible: visible, fullOverlay }) => {
    const label = 'psds-card__action-bar'

    return compose(
      css(stylesheet[`.${label}`]),
      fullOverlay &&
        !visible &&
        css(stylesheet[`.${label}--fullOverlay.${label}--no-actionBarVisible`]),
      visible && css(stylesheet[`${label}--actionBarVisible`])
    )
  },
  actionButton: ({ disabled }) => {
    const label = 'psds-card__action-bar__button'

    return compose(
      css(stylesheet[`.${label}`]),
      disabled && css(stylesheet[`.${label}--disabled`])
    )
  },

  bonusBar: () => css(stylesheet['.psds-card__bonus-bar']),

  card: () => css(stylesheet['.psds-card']),

  fullOverlay: ({ fullOverlayVisible: visible }) => {
    const label = 'psds-card__full-overlay'

    return compose(
      css(stylesheet[`.${label}`]),
      visible && css(stylesheet[`.${label}--fullOverlayVisible`])
    )
  },
  fullOverlayLink: () => css(stylesheet['.psds-card__full-overlay-link']),

  image: () => css(stylesheet['.psds-card__image']),
  imageLink: () => css(stylesheet['.psds-card__image-link']),

  metadata: ({ size, themeName }) => {
    const label = 'psds-card__metadata'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}--size-${size}`]),
      css(stylesheet[`.${label}--theme-${themeName}`])
    )
  },
  metadataDatum: () => css(stylesheet['.psds-card__metadata__datum']),
  metadataDot: () => css(stylesheet['.psds-card__metadata__dot']),

  overlays: ({ size }) => {
    const label = 'psds-card__overlays'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}--size-${size}`])
    )
  },

  progress: () => css(stylesheet['.psds-card__progress']),
  progressBar: ({ progress }) => {
    const label = 'psds-card__progress__bar'
    const percent = toPercentageString(progress)
    const isCompleted = percent === '100%'

    return compose(
      css(stylesheet[`.${label}`]),
      isCompleted && css(stylesheet[`.${label}--complete`]),
      css({ width: percent })
    )
  },

  tag: () => css(stylesheet['.psds-card__tag']),
  tagIcon: () => css(stylesheet['.psds-card__tag__icon']),
  tagText: () => css(stylesheet['.psds-card__tag__text']),

  textLink: ({ themeName }) => {
    const label = 'psds-card__text-link'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}--theme-${themeName}`])
    )
  },

  title: ({ themeName }) => {
    const label = 'psds-card__title'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}--theme-${themeName}`])
    )
  },

  titleContainer: ({ size }) => {
    const label = 'psds-card__title-container'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}--size-${size}`])
    )
  }
}

const ActionBar = props => (
  <div {...styles.actionBar(props)} {...filterReactProps(props)} />
)

const ActionBarAction = React.forwardRef(({ icon, ...props }, ref) => {
  const ariaLabel = props['aria-label'] || props.title
  return (
    <button
      {...styles.actionButton(props)}
      {...filterReactProps(props, { tagName: 'button' })}
      aria-label={ariaLabel}
      ref={ref}
    >
      {icon}
    </button>
  )
})
ActionBarAction.displayName = 'Card.Action'
ActionBarAction.propTypes = {
  'aria-label': PropTypes.string,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
}

const renderActionBar = props =>
  Array.isArray(props.actionBar) && props.actionBar.length > 0 ? (
    <ActionBar
      actionBarVisible={props.actionBarVisible}
      fullOverlay={props.fullOverlay}
      fullOverlayVisible={props.fullOverlayVisible}
    >
      {props.actionBar}
    </ActionBar>
  ) : null

renderActionBar.propTypes = {
  actionBar: PropTypes.arrayOf(PropTypes.element),
  actionBarVisible: PropTypes.bool,
  fullOverlay: PropTypes.element, // CardComponent.FullOverlayLink
  fullOverlayVisible: PropTypes.bool
}

const BonusBar = props => (
  <div {...styles.bonusBar(props)} {...filterReactProps(props)} />
)

const renderBonusBar = props =>
  props.bonusBar ? <BonusBar>{props.bonusBar}</BonusBar> : null

renderBonusBar.propTypes = {
  bonusBar: PropTypes.node
}

const Card = props => (
  <div {...styles.card(props)} {...filterReactProps(props)} />
)

const FullOverlay = props => (
  <div {...styles.fullOverlay(props)} {...filterReactProps(props)} />
)

const FullOverlayLink = props => (
  <span
    {...styles.fullOverlayLink(props)}
    {...filterReactProps(props, { tagName: 'span' })}
  />
)
FullOverlayLink.displayName = 'Card.FullOverlayLink'

const renderFullOverlay = props =>
  props.fullOverlay ? (
    <FullOverlay fullOverlayVisible={props.fullOverlayVisible}>
      {props.fullOverlay}
    </FullOverlay>
  ) : null

renderFullOverlay.propTypes = {
  fullOverlay: PropTypes.element,
  fullOverlayVisible: PropTypes.bool
}

const Image = props => (
  <div
    {...styles.image(props)}
    {...filterReactProps(props)}
    style={{ backgroundImage: `url(${props.src})` }}
  />
)
Image.displayName = 'Card.Image'
Image.propTypes = {
  src: PropTypes.string.isRequired
}

const ImageLink = props => (
  <span
    {...styles.imageLink(props)}
    {...filterReactProps(props, { tagName: 'span' })}
  />
)

ImageLink.displayName = 'Card.ImageLink'

const renderImage = props => (props.image ? props.image : null)

const Overlays = props => (
  <div {...styles.overlays(props)} {...filterReactProps(props)} />
)

const Progress = props => (
  <div {...styles.progress(props)} {...filterReactProps(props)} />
)

const ProgressBar = props => (
  <div {...styles.progressBar(props)} {...filterReactProps(props)} />
)

const renderProgress = props =>
  props.progress ? (
    <Progress>
      <ProgressBar
        progress={props.progress}
        aria-label={`${toPercentageString(props.progress)} complete`}
      />
    </Progress>
  ) : null

renderProgress.propTypes = {
  progress: PropTypes.number
}

const TagIcon = props => (
  <div {...styles.tagIcon(props)} {...filterReactProps(props)} />
)

const TagText = props => (
  <span
    {...styles.tagText(props)}
    {...filterReactProps(props, { tagName: 'span' })}
  />
)

const Tag = ({ children, icon, ...props }) => (
  <div {...styles.tag(props)} {...filterReactProps(props)}>
    {icon && (
      <TagIcon>{React.cloneElement(icon, { size: iconSizes.small })}</TagIcon>
    )}

    <TagText>{children}</TagText>
  </div>
)
Tag.displayName = 'Card.Tag'
Tag.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.element
}

const renderTag = props => props.tag

const Text = props => <span {...filterReactProps(props, { tagName: 'span' })} />
Text.displayName = 'Card.Text'

const TextLink = props => {
  const themeName = useTheme()
  const allProps = { themeName, ...props }

  return (
    <span
      {...styles.textLink(allProps)}
      {...filterReactProps(allProps, { tagName: 'span' })}
    />
  )
}
TextLink.displayName = 'Card.TextLink'

const TitleContainer = props => (
  <div {...styles.titleContainer(props)} {...filterReactProps(props)} />
)

const Title = props => {
  const themeName = useTheme()
  const allProps = { themeName, ...props }

  return (
    <div {...styles.title(allProps)} {...filterReactProps(allProps)}>
      <Shiitake lines={2}>{allProps.children}</Shiitake>
    </div>
  )
}
Title.displayName = 'Card.Title'

const renderTitle = (props, title) => {
  return <TitleContainer {...props}>{title}</TitleContainer>
}

const Metadata = props => {
  const themeName = useTheme()
  const allProps = { themeName, ...props }

  return <div {...styles.metadata(allProps)} {...filterReactProps(allProps)} />
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
  />
)

const renderMetaData = (props, metadata) => {
  if (!metadata) return null

  return (
    <Metadata {...props}>
      {metadata.map((m, i) => [
        <MetadataDatum key={`datum${i}`}>{m}</MetadataDatum>,
        i < metadata.length - 1 && (
          <MetadataDot aria-hidden key={`dot${i}`}>
            ·
          </MetadataDot>
        )
      ])}
    </Metadata>
  )
}
renderMetaData.propTypes = {
  size: PropTypes.oneOf(Object.keys(vars.sizes))
}

const CardComponent = ({ title, metadata1, metadata2, ...props }) => (
  <Card {...props}>
    <Overlays size={props.size}>
      {renderImage(props)}
      {renderFullOverlay(props)}
      {renderActionBar(props)}
      {renderBonusBar(props)}
      {renderTag(props)}
      {renderProgress(props)}
    </Overlays>

    {renderTitle(props, title)}
    {renderMetaData(props, metadata1)}
    {renderMetaData(props, metadata2)}
  </Card>
)

CardComponent.Action = ActionBarAction
CardComponent.FullOverlayLink = FullOverlayLink
CardComponent.Image = Image
CardComponent.ImageLink = ImageLink
CardComponent.Tag = Tag
CardComponent.Text = Text
CardComponent.TextLink = TextLink
CardComponent.Title = Title

CardComponent.sizes = vars.sizes

// TODO: offer more specific guides where real constraints exist (component types)
CardComponent.propTypes = {
  actionBar: PropTypes.arrayOf(PropTypes.element), // CardComponent.Action
  actionBarVisible: PropTypes.bool,
  bonusBar: PropTypes.node,
  fullOverlay: PropTypes.element, // CardComponent.FullOverlayLink
  fullOverlayVisible: PropTypes.bool,
  image: PropTypes.element.isRequired, // CardComponent.Image|ImageLink
  metadata1: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  ), // CardComponent.TextLink
  metadata2: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  ), // CardComponent.TextLink
  progress: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(vars.sizes)),
  tag: PropTypes.element, // CardComponent.Tag
  title: PropTypes.element.isRequired // CardComponent.TextLink>Title|Title
}

CardComponent.defaultProps = {
  actionBarVisible: false,
  fullOverlayVisible: false,
  size: vars.sizes.medium
}

export const sizes = vars.sizes

export default CardComponent
