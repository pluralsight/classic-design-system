import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import glamorous from 'glamorous'
import { sizes as iconSizes } from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import Shiitake from 'shiitake'
import { transparentize } from 'polished'

export const sizes = { small: 'small', medium: 'medium', large: 'large' }

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
TextLink.displayName = 'Card.TextLink'

const Text = glamorous.span()
Text.displayName = 'Card.Text'

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

const ImageDiv = glamorous.div({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
})

const Image = props => (
  <ImageDiv css={{ backgroundImage: `url(${props.src})` }} />
)
Image.displayName = 'Row.Image'
Image.propTypes = {
  src: PropTypes.string.isRequired
}

const FullOverlayLinkSpan = glamorous.span({
  pointerEvents: 'all',
  color: core.colors.white,
  '> a': {
    display: 'flex'
  }
})
const FullOverlayLink = props => (
  <FullOverlayLinkSpan>{props.children}</FullOverlayLinkSpan>
)
FullOverlayLink.displayName = 'Card.FullOverlayLink'

const Card = glamorous.div({
  width: '100%',
  textAlign: 'left'
})

const Overlays = glamorous.div(
  {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // TODO: is there a more targeted way to do this?
    ':hover div, :active div': {
      opacity: 1
    }
  },
  ({ size }) =>
    ({
      [sizes.small]: { height: '96px' },
      [sizes.medium]: { height: '144px' },
      [sizes.large]: { height: '240px' }
    }[size])
)

const renderImage = props => (props.image ? props.image : null)

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
    pointerEvents: 'none',
    opacity: 0
  },
  styleFullOverlayFullOverlayVisible
)

const renderFullOverlay = props =>
  props.fullOverlay ? (
    <FullOverlay fullOverlayVisible={props.fullOverlayVisible}>
      {props.fullOverlay}
    </FullOverlay>
  ) : null

const ActionBar = glamorous.div(
  {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    padding: `${core.layout.spacingSmall} ${core.layout.spacingSmall} 0 ${
      core.layout.spacingSmall
    }`,
    background: `linear-gradient(to bottom, ${transparentize(
      0.25,
      core.colors.black
    )}, transparent)`,
    transition: `opacity ${core.motion.speedNormal}`,
    pointerEvents: 'none',
    opacity: 0
  },
  ({ fullOverlay, actionBarVisible }) =>
    fullOverlay && !actionBarVisible ? { background: 'none' } : {},
  ({ actionBarVisible }) => (actionBarVisible ? { opacity: 1 } : {})
)

const ActionBarAction = props => {
  const filteredProps = {}
  if (props.onClick) filteredProps.onClick = props.onClick
  return <ActionButton {...filteredProps}>{props.icon}</ActionButton>
}

const ActionButton = glamorous.button(
  {
    pointerEvents: 'all',
    fontSize: core.type.fontSizeXSmall,
    padding: 0,
    cursor: 'pointer',
    border: 'none',
    color: transparentize(0.2, core.colors.white),
    background: 'none',
    transition: `all ${core.motion.speedNormal}`,
    ':hover, :active': {
      color: core.colors.white
    },
    '& + &': {
      marginLeft: core.layout.spacingSmall
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
      fullOverlayVisible={props.fullOverlayVisible}
    >
      {props.actionBar}
    </ActionBar>
  ) : null

const BonusBar = glamorous.div({
  position: 'absolute',
  bottom: core.layout.spacingSmall,
  left: core.layout.spacingSmall,
  color: core.colors.white
})

const renderBonusBar = props =>
  props.bonusBar ? <BonusBar>{props.bonusBar}</BonusBar> : null

const TagDiv = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: core.layout.spacingSmall,
  left: 0,
  padding: `${core.layout.spacingXXSmall} ${core.layout.spacingXSmall}`,
  background: core.colors.gray04,
  borderRadius: '0 2px 2px 0',
  color: core.colors.white,
  textTransform: 'uppercase',
  fontSize: '10px',
  lineHeight: '16px'
})

const TagIcon = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  marginRight: core.layout.spacingXSmall
})

const Tag = props => (
  <TagDiv>
    {props.icon && (
      <TagIcon>
        {React.cloneElement(props.icon, { size: iconSizes.small })}
      </TagIcon>
    )}
    <span>{props.children}</span>
  </TagDiv>
)
Tag.displayName = 'Card.Tag'
Tag.propTypes = {
  icon: PropTypes.element
}

const renderTag = props =>
  props.tag && props.size !== 'small' ? props.tag : null

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

const ProgressBar = glamorous.div(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '0%',
    height: '5px'
  },
  ({ progress }) => ({
    backgroundColor:
      percent(progress) == '100%' ? core.colors.green : core.colors.white,
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

const TitleDiv = glamorous.div({
  display: 'block',
  paddingTop: core.layout.spacingXSmall,
  fontWeight: core.type.fontWeightMedium,
  overflow: 'hidden',
  color: core.colors.white
})

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
  {
    display: 'flex',
    alignItems: 'center',
    fontWeight: core.type.fontWeightBook,
    lineHeight: core.type.lineHeightTight,
    color: core.colors.gray02,
    maxWidth: '100%'
  },
  ({ size }) =>
    ({
      small: { fontSize: core.type.fontSizeXSmall },
      medium: { fontSize: core.type.fontSizeXSmall },
      large: { fontSize: core.type.fontSizeSmall }
    }[size])
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

const TitleContainer = glamorous.div(
  ({ size }) =>
    ({
      small: {
        fontSize: core.type.fontSizeXSmall,
        lineHeight: core.lineHeightTight
      },
      medium: {
        fontSize: core.type.fontSizeSmall,
        lineHeight: core.lineHeightTight
      },
      large: {
        fontSize: core.type.fontSizeMedium,
        lineHeight: core.lineHeightStandard
      }
    }[size])
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
CardComponent.sizes = sizes
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
  size: PropTypes.oneOf(Object.keys(sizes)),
  tag: PropTypes.element, // CardComponent.Tag
  title: PropTypes.element.isRequired // CardComponent.TextLink>Title|Title
}
CardComponent.defaultProps = {
  actionBarVisible: false,
  fullOverlayVisible: false,
  size: sizes.medium
}

export default CardComponent
