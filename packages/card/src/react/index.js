import glamorous from 'glamorous'
import { sizes as iconSizes } from '@pluralsight/ps-design-system-icon/react'
import polyfillFocusWithin from 'focus-within'
import PropTypes from 'prop-types'
import React from 'react'
import Shiitake from 'shiitake'

import css from '../css'
import * as vars from '../vars'

polyfillFocusWithin(document)

const TextLink = glamorous.span({
  ...css['.psds-card__text-link'],
  '& a': css['.psds-card__text-link a'],
  '& a:hover': css['.psds-card__text-link a:hover'],
  '& a:active': css['.psds-card__text-link a:active']
})
TextLink.displayName = 'Card.TextLink'

const Text = glamorous.span()
Text.displayName = 'Card.Text'

const ImageLink = glamorous.span({
  ...css['.psds-card__image-link'],
  '& a': css['.psds-card__image-link a']
})
ImageLink.displayName = 'Row.ImageLink'

const ImageDiv = glamorous.div(css['.psds-actionmenu__image'])

const Image = props => (
  <ImageDiv css={{ backgroundImage: `url(${props.src})` }} />
)
Image.displayName = 'Row.Image'
Image.propTypes = {
  src: PropTypes.string.isRequired
}

const FullOverlayLinkSpan = glamorous.span({
  ...css['.psds-card__full-overlay-link'],
  '> a': css['.psds-card__full-overlay-link > a']
})
const FullOverlayLink = props => (
  <FullOverlayLinkSpan>{props.children}</FullOverlayLinkSpan>
)
FullOverlayLink.displayName = 'Card.FullOverlayLink'

const Card = glamorous.div(css['.psds-card'])

const Overlays = glamorous.div(
  {
    ...css['.psds-card__overlays'],
    ':hover div': css['.psds-card__overlays:hover div'],
    ':active div': css['.psds-card__overlays:active div']
  },
  ({ size }) => css[`.psds-card__overlays--size-${size}`]
)

const renderImage = props => (props.image ? props.image : null)

const FullOverlay = glamorous.div(
  css['.psds-card__full-overlay'],
  {
    ':focus-within': css['.psds-card__full-overlay:focus-within'],
    '[focus-within]': css['.psds-card__full-overlay:focus-within']
  },
  ({ fullOverlayVisible }) =>
    fullOverlayVisible
      ? css['.psds-card__full-overlay--fullOverlayVisible']
      : null
)

const renderFullOverlay = props =>
  props.fullOverlay ? (
    <FullOverlay fullOverlayVisible={props.fullOverlayVisible}>
      {props.fullOverlay}
    </FullOverlay>
  ) : null

const ActionBar = glamorous.div(
  css['.psds-card__action-bar'],
  {
    ':focus-within': css['.psds-card__action-bar:focus-within'],
    '[focus-within]': css['.psds-card__action-bar:focus-within']
  },
  ({ fullOverlay, actionBarVisible }) =>
    fullOverlay && !actionBarVisible
      ? css[
          '.psds-card__action-bar--fullOverlay.psds-card__action-bar--no-actionBarVisible'
        ]
      : null,
  ({ actionBarVisible }) =>
    actionBarVisible ? css['.psds-card__action-bar--actionBarVisible'] : null
)

const ActionButton = glamorous.button(
  {
    ...css['.psds-card__action-bar__button'],
    ':hover': css['.psds-card__action-bar__button:hover'],
    ':active': css['.psds-card__action-bar__button:active'],
    '& + &':
      css['.psds-card__action-bar__button .psds-card__action-bar__button']
  },
  ({ disabled }) =>
    disabled
      ? {
          ...css['.psds-card__action-bar__button--disabled'],
          ':hover': css['.psds-card__action-bar__button--disabled:hover']
        }
      : null
)

const ActionBarAction = props => {
  const filteredProps = { title: props.title }
  if (props.onClick) filteredProps.onClick = props.onClick
  return <ActionButton {...filteredProps}>{props.icon}</ActionButton>
}

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

const BonusBar = glamorous.div(css['.psds-card__bonus-bar'])

const renderBonusBar = props =>
  props.bonusBar ? <BonusBar>{props.bonusBar}</BonusBar> : null

const TagDiv = glamorous.div(css['.psds-card__tag'])

const TagIcon = glamorous.div(css['.psds-card__tag__icon'])

const TagText = glamorous.span(css['.psds-card__tag__text'])

const Tag = props => (
  <TagDiv>
    {props.icon && (
      <TagIcon>
        {React.cloneElement(props.icon, { size: iconSizes.small })}
      </TagIcon>
    )}
    <TagText>{props.children}</TagText>
  </TagDiv>
)
Tag.displayName = 'Card.Tag'
Tag.propTypes = {
  icon: PropTypes.element
}

const renderTag = props =>
  props.tag && props.size !== 'small' ? props.tag : null

const Progress = glamorous.div(css['.psds-card__progress'])

const percent = num => {
  try {
    return Math.min(parseFloat(num).toFixed(), 100) + '%'
  } catch (_) {
    return '0%'
  }
}

const ProgressBar = glamorous.div(
  css['.psds-card__progress__bar'],
  ({ progress }) => ({
    ...(percent(progress) == '100%'
      ? css['.psds-card__progress__bar--complete']
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

const TitleDiv = glamorous.div(css['.psds-card__title'])

const Title = props => {
  const allProps = props.onClick ? { onClick: props.onClick } : null

  return (
    <TitleDiv {...allProps}>
      <Shiitake lines={2}>{props.children}</Shiitake>
    </TitleDiv>
  )
}
Title.displayName = 'Card.Title'

const Metadata = glamorous.div(
  css['.psds-card__metadata'],
  ({ size }) => css[`.psds-card__metadata--size-${size}`]
)

const MetadataDatum = glamorous.span({
  ...css['.psds-card__metadata__datum'],
  ':nth-of-type(1)': css['.psds-card__metadata__datum:nth-of-type(1)']
})

const MetadataDot = glamorous.span(css['.psds-card__metadata__dot'])

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

const TitleContainer = glamorous.div(
  ({ size }) => css[`.psds-card__title-container--size-${size}`]
)

const filterOutTitleProp = props => {
  const { title, ...rest } = props
  return rest
}

const renderTitle = props => (
  <TitleContainer {...filterOutTitleProp(props)}>{props.title}</TitleContainer>
)

const CardComponent = props => (
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

CardComponent.Action = ActionBarAction
CardComponent.FullOverlayLink = FullOverlayLink
CardComponent.Image = Image
CardComponent.ImageLink = ImageLink
CardComponent.sizes = vars.sizes
CardComponent.Tag = Tag
CardComponent.Text = Text
CardComponent.TextLink = TextLink
CardComponent.Title = Title

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
