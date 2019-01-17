import polyfillFocusWithin from 'focus-within'

import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import Shiitake from 'shiitake'

import { sizes as iconSizes } from '@pluralsight/ps-design-system-icon/react'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { withTheme } from '@pluralsight/ps-design-system-theme/react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'

import css from '../css/index.js'
import { toPercentageString } from '../js/index.js'
import * as vars from '../vars/index.js'

if (typeof window !== 'undefined') polyfillFocusWithin(document)

const styles = {
  actionBar: ({ actionBarVisible: visible, fullOverlay }) =>
    glamor.css({
      ...css['.psds-card__action-bar'],
      ...(fullOverlay &&
        !visible &&
        css[
          '.psds-card__action-bar--fullOverlay.psds-card__action-bar--no-actionBarVisible'
        ]),
      ...(visible && css['.psds-card__action-bar--actionBarVisible'])
    }),
  actionButton: ({ disabled }) =>
    glamor.css({
      ...css['.psds-card__action-bar__button'],
      ...(disabled && css['.psds-card__action-bar__button--disabled'])
    }),
  bonusBar: () => glamor.css(css['.psds-card__bonus-bar']),
  card: () => glamor.css(css['.psds-card']),
  fullOverlay: ({ fullOverlayVisible: visible }) =>
    glamor.css({
      ...css['.psds-card__full-overlay'],
      ...(visible && css['.psds-card__full-overlay--fullOverlayVisible'])
    }),
  fullOverlayLink: () => glamor.css(css['.psds-card__full-overlay-link']),
  image: () => glamor.css(css['.psds-card__image']),
  imageLink: () => glamor.css(css['.psds-card__image-link']),
  metadata: ({ size, themeName }) =>
    glamor.css({
      ...css['.psds-card__metadata'],
      ...css[`.psds-card__metadata--size-${size}`],
      ...css[`.psds-card__metadata--theme-${themeName}`]
    }),
  metadataDatum: ({ size }) => glamor.css(css['.psds-card__metadata__datum']),
  metadataDot: ({ size }) => glamor.css(css['.psds-card__metadata__dot']),
  overlays: ({ size }) =>
    glamor.css({
      ...css['.psds-card__overlays'],
      ...css[`.psds-card__overlays--size-${size}`]
    }),
  progress: () => glamor.css(css['.psds-card__progress']),
  progressBar: ({ progress }) => {
    const percent = toPercentageString(progress)
    const isCompleted = percent === '100%'

    return glamor.css({
      ...css['.psds-card__progress__bar'],
      ...(isCompleted && css['.psds-card__progress__bar--complete']),
      width: percent
    })
  },
  tag: () => glamor.css(css['.psds-card__tag']),
  tagIcon: () => glamor.css(css['.psds-card__tag__icon']),
  tagText: () => glamor.css(css['.psds-card__tag__text']),
  textLink: ({ themeName }) =>
    glamor.css({
      ...css['.psds-card__text-link'],
      ...css[`.psds-card__text-link--theme-${themeName}`]
    }),
  title: ({ themeName }) =>
    glamor.css({
      ...css['.psds-card__title'],
      ...css[`.psds-card__title--theme-${themeName}`]
    }),
  titleContainer: ({ size }) =>
    glamor.css(css[`.psds-card__title-container--size-${size}`])
}

const ActionBar = props => (
  <div {...styles.actionBar(props)} {...filterReactProps(props)} />
)

const ActionButton = props => (
  <button
    {...styles.actionButton(props)}
    {...filterReactProps(props, { tagName: 'button' })}
  />
)

const ActionBarAction = ({ icon, ...props }) => (
  <ActionButton {...filterReactProps(props)}>{icon}</ActionButton>
)

ActionBarAction.displayName = 'Card.Action'
ActionBarAction.propTypes = {
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

const renderTag = props =>
  props.tag && props.size !== 'small' ? props.tag : null

const Text = props => <span {...filterReactProps(props, { tagName: 'span' })} />
Text.displayName = 'Card.Text'

const TextLink = withTheme(props => (
  <span
    {...styles.textLink(props)}
    {...filterReactProps(props, { tagName: 'span' })}
  />
))
TextLink.displayName = 'Card.TextLink'

const TitleContainer = props => (
  <div {...styles.titleContainer(props)} {...filterReactProps(props)} />
)

const Title = withTheme(props => (
  <div {...styles.title(props)} {...filterReactProps(props)}>
    <Shiitake lines={2}>{props.children}</Shiitake>
  </div>
))
Title.displayName = 'Card.Title'

const renderTitle = (props, title) => {
  return <TitleContainer {...props}>{title}</TitleContainer>
}

const Metadata = withTheme(props => (
  <div {...styles.metadata(props)} {...filterReactProps(props)} />
))

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
  size: vars.sizes.medium,
  themeName: PropTypes.oneOf(Object.values(themeNames)).isRequired
}

export const sizes = vars.sizes

export default CardComponent
