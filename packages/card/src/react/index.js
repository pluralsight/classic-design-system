import polyfillFocusWithin from 'focus-within'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import Shiitake from 'shiitake'

import { sizes as iconSizes } from '@pluralsight/ps-design-system-icon/react'

import css from '../css'
import { toPercentageString } from '../js'
import * as vars from '../vars'

import withPropFilter from './with-prop-filter'

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
  metadata: ({ size }) =>
    glamor.css({
      ...css['.psds-card__metadata'],
      ...css[`.psds-card__metadata--size-${size}`]
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
  textLink: () => glamor.css(css['.psds-card__text-link']),
  title: () => glamor.css(css['.psds-card__title']),
  titleContainer: ({ size }) =>
    glamor.css(css[`.psds-card__title-container--size-${size}`])
}

const ActionBar = withPropFilter({
  whitelist: ['actionBarVisible', 'fullOverlay', 'fullOverlayVisible']
})(props => {
  const { actionBarVisible, fullOverlay, fullOverlayVisible, ...rest } = props
  return <div {...styles.actionBar(props)} {...rest} />
})

const ActionButton = withPropFilter({
  tagName: 'button',
  whitelist: ['disabled']
})(({ disabled, ...rest }) => (
  <button {...styles.actionButton({ disabled })} {...rest} />
))

const ActionBarAction = props => {
  const filteredProps = { title: props.title }
  if (props.onClick) filteredProps.onClick = props.onClick

  return <ActionButton {...filteredProps}>{props.icon}</ActionButton>
}
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

const BonusBar = withPropFilter()(props => (
  <div {...styles.bonusBar(props)} {...props} />
))

const renderBonusBar = props =>
  props.bonusBar ? <BonusBar>{props.bonusBar}</BonusBar> : null

renderBonusBar.propTypes = {
  bonusBar: PropTypes.node
}

const Card = withPropFilter()(props => (
  <div {...styles.card(props)} {...props} />
))

const FullOverlay = withPropFilter({ whitelist: ['fullOverlayVisible'] })(
  ({ fullOverlayVisible, ...rest }) => (
    <div {...styles.fullOverlay({ fullOverlayVisible })} {...rest} />
  )
)

const FullOverlayLink = withPropFilter({ tagName: 'span' })(props => (
  <span {...styles.fullOverlayLink(props)} {...props} />
))
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

const Image = withPropFilter({ whitelist: ['src'] })(({ src, ...rest }) => (
  <div
    {...styles.image()}
    {...rest}
    style={{ backgroundImage: `url(${src})` }}
  />
))
Image.displayName = 'Card.Image'
Image.propTypes = {
  src: PropTypes.string.isRequired
}

const ImageLink = withPropFilter({ tagName: 'span' })(props => (
  <span {...styles.imageLink(props)} {...props} />
))
ImageLink.displayName = 'Card.ImageLink'

const renderImage = props => (props.image ? props.image : null)

const Overlays = withPropFilter({ whitelist: ['size'] })(
  ({ size, ...rest }) => <div {...styles.overlays({ size })} {...rest} />
)

const Progress = withPropFilter()(props => (
  <div {...styles.progress(props)} {...props} />
))

const ProgressBar = withPropFilter({ whitelist: ['progress'] })(
  ({ progress, ...rest }) => (
    <div {...styles.progressBar({ progress })} {...rest} />
  )
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

const TagIcon = withPropFilter()(props => (
  <div {...styles.tagIcon(props)} {...props} />
))

const TagText = withPropFilter({ tagName: 'span' })(props => (
  <span {...styles.tagText(props)} {...props} />
))

const Tag = withPropFilter({ whitelist: ['icon'] })(
  ({ children, icon, ...rest }) => (
    <div {...styles.tag({ icon })} {...rest}>
      {icon && (
        <TagIcon>{React.cloneElement(icon, { size: iconSizes.small })}</TagIcon>
      )}
      <TagText>{children}</TagText>
    </div>
  )
)
Tag.displayName = 'Card.Tag'
Tag.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.element
}

const renderTag = props =>
  props.tag && props.size !== 'small' ? props.tag : null

const Text = props => <span {...props} />
Text.displayName = 'Card.Text'

const TextLink = withPropFilter({ tagName: 'span' })(props => (
  <span {...styles.textLink(props)} {...props} />
))
TextLink.displayName = 'Card.TextLink'

const TitleContainer = withPropFilter({ whitelist: ['size'] })(
  ({ size, ...rest }) => <div {...styles.titleContainer({ size })} {...rest} />
)

const Title = withPropFilter({ whitelist: ['size'] })(
  ({ children, size, ...rest }) => {
    return (
      <div {...styles.title({ size })} {...rest}>
        <Shiitake lines={2}>{children}</Shiitake>
      </div>
    )
  }
)
Title.displayName = 'Card.Title'

const renderTitle = ({ title, ...rest }) => {
  return <TitleContainer {...rest}>{title}</TitleContainer>
}

const Metadata = withPropFilter({ whitelist: ['size'] })(
  ({ size, ...rest }) => <div {...styles.metadata({ size })} {...rest} />
)

const MetadataDatum = withPropFilter({ tagName: 'span', whitelist: ['size'] })(
  ({ size, ...rest }) => <span {...styles.metadataDatum({ size })} {...rest} />
)

const MetadataDot = withPropFilter({ tagName: 'span', whitelist: ['size'] })(
  ({ size, ...rest }) => <span {...styles.metadataDot({ size })} {...rest} />
)

const renderMetaData = (props, metadata) => {
  if (!metadata) return null

  return (
    <Metadata size={props.size}>
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

const CardComponent = props => {
  return (
    <Card
      style={props.style}
      css={props.css}
      {...(props.className ? { className: props.className } : null)}
    >
      <Overlays size={props.size}>
        {renderImage(props)}
        {renderFullOverlay(props)}
        {renderActionBar(props)}
        {renderBonusBar(props)}
        {renderTag(props)}
        {renderProgress(props)}
      </Overlays>
      {renderTitle(props)}
      {renderMetaData(props, props.metadata1)}
      {renderMetaData(props, props.metadata2)}
    </Card>
  )
}

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
