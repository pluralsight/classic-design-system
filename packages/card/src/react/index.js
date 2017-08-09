import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import glamorous from 'glamorous'
import { transparentize } from 'polished'
import React from 'react'
import Shiitake from 'shiitake'
import voidElements from 'void-elements'

const sizes = { small: 'small', medium: 'medium', large: 'large' }

const styleSize = ({ size }) =>
  ({
    [sizes.small]: {
      minWidth: 120,
      maxWidth: 240
    },
    [sizes.medium]: {
      minWidth: 240,
      maxWidth: 440
    },
    [sizes.large]: {
      minWidth: 440,
      maxWidth: 680
    }
  }[size])

const Card = glamorous.div(
  {
    width: '100%',
    textAlign: 'left'
  },
  styleSize
)

const styleOverlaysSize = ({ size }) =>
  ({
    [sizes.small]: { height: '96px' },
    [sizes.medium]: { height: '144px' },
    [sizes.large]: { height: '240px' }
  }[size])

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
  styleOverlaysSize
)

const ImageFrame = glamorous.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  backgroundColor: core.colors.black
})

const imageStyles = glamor.css({
  position: 'relative',
  objectFit: 'cover',
  minHeight: '100%',
  minWidth: '100%'
})

const renderImage = props =>
  props.image
    ? <ImageFrame>
        {React.cloneElement(props.image, {
          ...imageStyles,
          className: props.image.props.className,
          ...(voidElements[props.image.type]
            ? {}
            : {
                children: React.Children.map(
                  props.image.props.children,
                  child =>
                    React.cloneElement(child, {
                      ...imageStyles,
                      className: child.props.className
                    })
                )
              })
        })}
      </ImageFrame>
    : null

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
  props.fullOverlay
    ? <FullOverlay fullOverlayVisible={props.fullOverlayVisible}>
        {React.cloneElement(props.fullOverlay, {
          ...glamor.css({ pointerEvents: 'all' }),
          className: props.fullOverlay.props.className
        })}
      </FullOverlay>
    : null

const styleActionBarFullOverlay = ({ fullOverlay }) =>
  fullOverlay ? { background: 'none' } : {}

const styleActionBarActionBarVisible = ({ actionBarVisible }) =>
  actionBarVisible ? { opacity: 1 } : {}

const ActionBar = glamorous.div(
  {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: 64,
    padding: `${core.layout.spacingXSmall} ${core.layout.spacingXSmall} 0 ${core
      .layout.spacingXSmall}`,
    background: `linear-gradient(to bottom, ${transparentize(
      0.25,
      core.colors.black
    )}, transparent)`,
    transition: `opacity ${core.motion.speedNormal}`,
    pointerEvents: 'none',
    opacity: 0
  },
  styleActionBarFullOverlay,
  styleActionBarActionBarVisible
)

const ActionBarAction = glamorous.div({
  pointerEvents: 'all',
  '& + &': {
    marginLeft: core.layout.spacingTiny
  }
})

const renderActionBar = props =>
  Array.isArray(props.actionBar) && props.actionBar.length > 0
    ? <ActionBar
        actionBarVisible={props.actionBarVisible}
        fullOverlay={props.fullOverlay}
      >
        {React.Children.map(props.actionBar, (action, i) =>
          <ActionBarAction>
            {React.cloneElement(action, {
              ...glamor.css({
                ':hover, :active': {
                  background: 'none',
                  '> svg': {
                    fill: core.colors.white
                  }
                },
                '> svg': {
                  fill: transparentize(0.2, core.colors.white),
                  transition: `all ${core.motion.speedNormal}`
                }
              }),
              key: i,
              size: 'small'
            })}
          </ActionBarAction>
        )}
      </ActionBar>
    : null

const BonusBar = glamorous.div({
  position: 'absolute',
  bottom: core.layout.spacingSmall,
  left: core.layout.spacingSmall
})

const renderBonusBar = props =>
  props.bonusBar
    ? <BonusBar>
        {props.bonusBar}
      </BonusBar>
    : null

const Tag = glamorous.div({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'absolute',
  top: core.layout.spacingSmall,
  left: 0,
  padding: `${core.layout.spacingTiny} ${core.layout.spacingXSmall}`,
  background: core.colors.gray04,
  borderRadius: '0 2px 2px 0'
})

const isNativeElement = el => el && typeof el.type === 'string'

const isAnchorElement = el => isNativeElement(el) && el.type === 'a'

const renderTag = props =>
  props.tag && props.size !== 'small'
    ? <Tag>
        {React.Children.map(props.tag, (part, i) =>
          React.cloneElement(part, {
            ...glamor.css({
              color: core.colors.whitek,
              textTransform: 'uppercase',
              fontSize: '10px',
              lineHeight: '16px',
              '& + &': {
                marginLeft: core.layout.spacingXSmall
              }
            }),
            className: part.props.className,
            key: i,
            size: 'tiny'
          })
        )}
      </Tag>
    : null

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
  backgroundColor: percent(progress) == '100%'
    ? core.colors.green
    : core.colors.white,
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
  props.progress
    ? <Progress>
        <ProgressBar
          progress={props.progress}
          aria-label={`${percent(props.progress)} complete`}
        />
      </Progress>
    : null

const styleTitle = ({ size }) =>
  glamor.css(
    {
      display: 'block',
      marginTop: core.layout.spacingXSmall,
      fontWeight: core.type.fontWeightMedium,
      overflow: 'hidden',
      color: core.colors.white
    },
    {
      small: {
        fontSize: core.type.fontSizeXSmall,
        lineHeight: core.lineHeightTight,
        maxHeight: `calc(2 * ${core.type.lineHeightTight})`
      },
      medium: {
        fontSize: core.type.fontSizeSmall,
        lineHeight: core.lineHeightTight,
        maxHeight: `calc(2 * ${core.type.lineHeightTight})`
      },
      large: {
        fontSize: core.type.fontSizeMedium,
        lineHeight: core.lineHeightStandard,
        maxHeight: `calc(2 * ${core.type.lineHeightStandard})`
      }
    }[size]
  )

const linkStyles = glamor.css({
  color: 'inherit',
  cursor: 'pointer',
  textDecoration: 'none',
  ':hover, :active': {
    color: core.colors.white,
    textDecoration: 'underline',
    transition: `all ${core.motion.speedNormal}`
  }
})

const renderTitle = props =>
  isNativeElement(props.title)
    ? React.cloneElement(props.title, {
        ...styleTitle(props),
        ...linkStyles,
        className: props.title.props.className,
        children: (
          <Shiitake lines={2}>
            {props.title.props.children}
          </Shiitake>
        )
      })
    : <Shiitake lines={2} className={styleTitle(props).toString()}>
        {props.title}
      </Shiitake>

const getMetaDataLinkClassName = (props, el) =>
  classNames({
    [el.props.className]: el.props.className,
    [props.css['ps-card__metadata__datum--link']]: isAnchorElement(el)
  })

const styleMetadataSize = ({ size }) =>
  ({
    small: { fontSize: core.type.fontSizeXSmall },
    medium: { fontSize: core.type.fontSizeXSmall },
    large: { fontSize: core.type.fontSizeSmall }
  }[size])

const Metadata = glamorous.div(
  {
    display: 'flex',
    alignItems: 'center',
    fontWeight: core.type.fontWeightBook,
    lineHeight: core.type.lineHeightTight,
    color: core.colors.gray02,
    maxWidth: '100%'
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

const MetadataDot = glamorous.span({
  display: 'inline-block',
  margin: `0 ${core.layout.spacingXSmall}`
})

const renderMetaData = (props, metadata) =>
  metadata
    ? <Metadata size={props.size}>
        {metadata.map((m, i) => [
          isNativeElement(m)
            ? React.cloneElement(m, {
                ...(isAnchorElement(m) ? linkStyles : {}),
                className: m.props.className
              })
            : <MetadataDatum key={`datum${i}`}>
                {m}
              </MetadataDatum>,
          i < metadata.length - 1 &&
            <MetadataDot aria-hidden={true} key={`dot${i}`}>
              ·
            </MetadataDot>
        ])}
      </Metadata>
    : null

const rmNonHtmlProps = props => {
  const {
    actionBar,
    actionBarVisible,
    bonusBar,
    fullOverlay,
    fullOverlayVisible,
    image,
    metadata1,
    metadata2,
    progress,
    size,
    tag,
    title,
    ...rest
  } = props
  return rest
}

const CardComponent = props =>
  <Card {...rmNonHtmlProps(props)} size={props.size}>
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

import PropTypes from 'prop-types'
// TODO: offer more specific guides where real constraints exist (component types)
CardComponent.propTypes = {
  actionBar: PropTypes.arrayOf(PropTypes.node),
  actionBarVisible: PropTypes.bool,
  bonusBar: PropTypes.node,
  fullOverlay: PropTypes.element,
  fullOverlayVisible: PropTypes.bool,
  image: PropTypes.element.isRequired,
  metadata1: PropTypes.arrayOf(PropTypes.node),
  metadata2: PropTypes.arrayOf(PropTypes.node),
  progress: PropTypes.number,
  tag: PropTypes.arrayOf(PropTypes.element),
  title: PropTypes.node.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes))
}
CardComponent.defaultProps = {
  actionBarVisible: false,
  fullOverlayVisible: false,
  size: 'medium'
}
CardComponent.sizes = sizes

export default CardComponent
