import polyfillFocusWithin from 'focus-within'

import { sizes as iconSizes } from '@pluralsight/ps-design-system-icon'
// TODO: rm
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  omit,
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import { compose, css, StyleAttribute } from 'glamor'
// TODO: rm
import PropTypes from 'prop-types'
import * as React from 'react'
import Shiitake from 'shiitake'

import stylesheet from '../css'
import { toPercentageString } from '../js'
import * as vars from '../vars'
console.log({ vars })

if (typeof window !== 'undefined') polyfillFocusWithin(document)

// TODO: split up per component
type StyleFn = (props?: any) => StyleAttribute
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

interface ActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  actionBarVisible?: boolean
  fullOverlay?: typeof FullOverlayLink
}
const ActionBar: React.FC<ActionBarProps> = props => (
  <div {...styles.actionBar(props)} {...filterReactProps(props)} />
)

interface ActionBarActionProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: any // typeof React.ReactElement // TODO: retype as Icon when it's TS
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
  <div {...styles.card()} {...filterReactProps(props)} />
)

interface FullOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  // TODO: ensure default
  fullOverlayVisible: boolean
}
const FullOverlay: React.FC<FullOverlayProps> = props => (
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
interface OverlaysProps extends React.HTMLAttributes<HTMLDivElement> {
  size: ValueOf<typeof vars.sizes>
}
const Overlays: React.FC<OverlaysProps> = props => (
  <div {...styles.overlays(props)} {...filterReactProps(props)} />
)

// TODO: children?
const Progress: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => (
  <div {...styles.progress(props)} {...filterReactProps(props)} />
)

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  progress: number
}
const ProgressBar: React.FC<ProgressBarProps> = props => (
  <div {...styles.progressBar(props)} {...filterReactProps(props)} />
)

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: any //  React.ReactElement // TODO: Icon when Icon is TS
}
const Tag: React.FC<TagProps> = ({ children, icon, ...props }) => (
  <div {...styles.tag(props)} {...filterReactProps(props)}>
    {icon && (
      <div {...styles.tagIcon(props)}>
        {React.cloneElement(icon, { size: iconSizes.small })}
      </div>
    )}

    <span {...styles.tagText(props)}>{children}</span>
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
        i < props.metadata.length - 1 && (
          <MetadataDot aria-hidden key={`dot${i}`}>
            ·
          </MetadataDot>
        )
      ])}
    </Metadata>
  )
}

interface CardComponentProps extends Record<string, unknown> {
  actionBar?: any // typeof ActionBarAction[] // TODO: specify
  actionBarVisible?: boolean
  bonusBar?: any // React.ReactElement // TODO: specify
  fullOverlay?: any // typeof FullOverlayLink // TODO: specify
  fullOverlayVisible?: boolean
  image: any // typeof Image | typeof ImageLink // TODO: specify
  metadata1?: any // (string | typeof TextLink)[] // TODO: specify
  metadata2?: any // (string | typeof TextLink)[] // TODO: specify
  progress?: number
  size?: ValueOf<typeof vars.sizes>
  tag?: any // typeof Tag // TODO: specify
  title: any // typeof TextLink | typeof Title // TODO: specify
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
const CardComponent: React.FC<CardComponentProps> &
  CardComponentStatics = props => {
  const htmlProps = omit<
    CardComponentProps,
    [
      'actionBar',
      'actionBarVisible',
      'bonusBar',
      'fullOverlay',
      'fullOverlayVisible',
      'image',
      'metadata1',
      'metadata2',
      'progress',
      'size',
      'tag',
      'title'
    ]
  >(props, [
    'actionBar',
    'actionBarVisible',
    'bonusBar',
    'fullOverlay',
    'fullOverlayVisible',
    'image',
    'metadata1',
    'metadata2',
    'progress',
    'size',
    'tag',
    'title'
  ])
  return (
    <Card {...htmlProps}>
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

      <div {...styles.titleContainer(props)}>{props.title}</div>
      {props.metadata1 && (
        <MetaDataList size={props.size} metadata={props.metadata1} />
      )}
      {props.metadata2 && (
        <MetaDataList size={props.size} metadata={props.metadata2} />
      )}
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

// TODO: replace
CardComponent.defaultProps = {
  actionBarVisible: false,
  fullOverlayVisible: false,
  size: vars.sizes.medium
}

export const sizes = vars.sizes

export default CardComponent
