import polyfillFocusWithin from 'focus-within'

import { sizes as iconSizes } from '@pluralsight/ps-design-system-icon'
// TODO: rm
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import { compose, css, StyleAttribute } from 'glamor'
// TODO: rm
import PropTypes from 'prop-types'
import React from 'react'
import Shiitake from 'shiitake'

import stylesheet from '../css'
import { toPercentageString } from '../js'
import * as vars from '../vars'

if (typeof window !== 'undefined') polyfillFocusWithin(document)

type StyleFn = (props: CardProps) => StyleAttribute
const styles: { [key: string]: StyleFn } = {
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

const ActionBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => (
  <div {...styles.actionBar(props)} {...filterReactProps(props)} />
)

interface ActionBarActionProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: typeof React.Element // TODO: retype as Icon when it's TS
  title: string
}
interface ActionBarActionStatics {}
interface ActionBarActionComponent
  extends RefForwardingComponent<
    ActionBarActionProps,
    HTMLButtonElement,
    ActionBarActionStatics
  > {}
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
}) as ActionBarActionComponent
ActionBarAction.displayName = 'Card.Action'

const BonusBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => (
  <div {...styles.bonusBar(props)} {...filterReactProps(props)} />
)

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => (
  <div {...styles.card(props)} {...filterReactProps(props)} />
)

const FullOverlay: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => (
  <div {...styles.fullOverlay(props)} {...filterReactProps(props)} />
)

// TODO: ensure adding children here isn't a problem
const FullOverlayLink = props => (
  <span
    {...styles.fullOverlayLink(props)}
    {...filterReactProps(props, { tagName: 'span' })}
  >
    {props.children}
  </span>
)
FullOverlayLink.displayName = 'Card.FullOverlayLink'

interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
}
const Image: React.FC<ImageProps> = props => (
  <div
    {...styles.image(props)}
    {...filterReactProps(props)}
    style={{ backgroundImage: `url(${props.src})` }}
  />
)
Image.displayName = 'Card.Image'

// TODO: specify children?
const ImageLink: React.FC<React.HTMLAttributes<HTMLSpanElement>> = props => (
  <span
    {...styles.imageLink(props)}
    {...filterReactProps(props, { tagName: 'span' })}
  />
)
ImageLink.displayName = 'Card.ImageLink'

// TODO: children?
const Overlays: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => (
  <div {...styles.overlays(props)} {...filterReactProps(props)} />
)

// TODO: children?
const Progress: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => (
  <div {...styles.progress(props)} {...filterReactProps(props)} />
)

// TODO: children?
const ProgressBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => (
  <div {...styles.progressBar(props)} {...filterReactProps(props)} />
)

// TODO: children?
const TagIcon: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => (
  <div {...styles.tagIcon(props)} {...filterReactProps(props)} />
)

// TODO: children?
const TagText: React.FC<React.HTMLAttributes<HTMLSpanElement>> = props => (
  <span
    {...styles.tagText(props)}
    {...filterReactProps(props, { tagName: 'span' })}
  />
)

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactElement // TODO: Icon when Icon is TS
}
const Tag: React.FC<TagProps> = ({ children, icon, ...props }) => (
  <div {...styles.tag(props)} {...filterReactProps(props)}>
    {icon && (
      <TagIcon>{React.cloneElement(icon, { size: iconSizes.small })}</TagIcon>
    )}

    <TagText>{children}</TagText>
  </div>
)
Tag.displayName = 'Card.Tag'

// TODO: children?
const Text: React.FC<React.HTMLAttributes<HTMLSpanElement>> = props => (
  <span {...filterReactProps(props, { tagName: 'span' })} />
)
Text.displayName = 'Card.Text'

// TODO: children?
const TextLink: React.FC<React.HTMLAttributes<HTMLSpanElement>> = props => {
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

// TODO: children?
const TitleContainer: React.FC<React.HTMLAttributes<
  HTMLDivElement
>> = props => (
  <div {...styles.titleContainer(props)} {...filterReactProps(props)} />
)

// TODO: children?
const Title: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  const themeName = useTheme()
  const allProps = { themeName, ...props }

  return (
    <div {...styles.title(allProps)} {...filterReactProps(allProps)}>
      <Shiitake lines={2}>{allProps.children}</Shiitake>
    </div>
  )
}
Title.displayName = 'Card.Title'

const Metadata: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  const themeName = useTheme()
  const allProps = { themeName, ...props }

  return <div {...styles.metadata(allProps)} {...filterReactProps(allProps)} />
}

const MetadataDatum: React.FC<React.HTMLAttributes<
  HTMLSpanElement
>> = props => (
  <span
    {...styles.metadataDatum(props)}
    {...filterReactProps(props, { tagName: 'span' })}
  />
)

const MetadataDot: React.FC<React.HTMLAttributes<HTMLSpanElement>> = props => (
  <span
    {...styles.metadataDot(props)}
    {...filterReactProps(props, { tagName: 'span' })}
  />
)

interface MetaDataListProps {
  metadata: (string | typeof TextLink)[]
  size: ValueOf<typeof vars.sizes>
}
const MetaDataList: React.FC<MetaDataListProps> = props => {
  return (
    <Metadata {...props}>
      {props.metadata.map((m, i) => [
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

interface CardComponentProps {
  actionBar?: typeof ActionBarAction[]
  actionBarVisible?: boolean
  bonusBar?: React.ReactElement
  fullOverlay?: typeof FullOverlayLink
  fullOverlayVisible?: boolean
  image: typeof Image | typeof ImageLink
  metadata1?: (string | typeof TextLink)[]
  metadata2?: (string | typeof TextLink)[]
  progress?: number
  size?: ValueOf<typeof vars.sizes>
  tag?: typeof Tag
  title: typeof TextLink | typeof Title
}

interface CardComponentStatics {
  Action: typeof ActionBarAction
  FullOverlayLink: typeof FullOverlayLink
  Image: typeof Image
  ImageLink: typeof ImageLink
  sizes: typeof vars.sizes
  Tag: typeof Tag
  Text: typeof Text
  TextLink: typeof TextLink
  Title: typeof Title
}
const CardComponent: React.FC<CardComponentProps> & CardComponentStatics = ({
  title,
  metadata1,
  metadata2,
  ...props
}) => (
  <Card {...props}>
    <Overlays size={props.size}>
      {props.image ? props.image : null}

      {props.fullOverlay ? (
        <FullOverlay fullOverlayVisible={props.fullOverlayVisible}>
          {props.fullOverlay}
        </FullOverlay>
      ) : null}

      {Array.isArray(props.actionBar) && props.actionBar.length > 0 ? (
        <ActionBar
          actionBarVisible={props.actionBarVisible}
          fullOverlay={props.fullOverlay}
          fullOverlayVisible={props.fullOverlayVisible}
        >
          {props.actionBar}
        </ActionBar>
      ) : null}

      {props.bonusBar ? <BonusBar>{props.bonusBar}</BonusBar> : null}

      {props.tag}

      {props.progress ? (
        <Progress>
          <ProgressBar
            progress={props.progress}
            aria-label={`${toPercentageString(props.progress)} complete`}
          />
        </Progress>
      ) : null}
    </Overlays>

    <TitleContainer {...props}>{title}</TitleContainer>
    {props.metadata1 && <MetaDataList size={props.size} metadata={metadata1} />}
    {props.metadata2 && <MetaDataList size={props.size} metadata={metadata2} />}
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

// TODO: replace
CardComponent.defaultProps = {
  actionBarVisible: false,
  fullOverlayVisible: false,
  size: vars.sizes.medium
}

export const sizes = vars.sizes

export default CardComponent
