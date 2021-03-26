import polyfillFocusWithin from 'focus-within'

import Icon, { sizes as iconSizes } from '@pluralsight/ps-design-system-icon'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import {
  HTMLPropsFor,
  RefForwardingComponent,
  ValueOf,
  canUseDOM,
  omit
} from '@pluralsight/ps-design-system-util'
import { compose, css } from 'glamor'
import React from 'react'
import Shiitake from 'shiitake'

import stylesheet from '../css/index'
import { toPercentageString } from '../js/index'
import * as vars from '../vars/index'

if (canUseDOM()) polyfillFocusWithin(document)

const styles = {
  actionBar: ({
    actionBarVisible: visible,
    fullOverlay
  }: Partial<CardProps>) => {
    const label = 'psds-card__action-bar'

    return compose(
      css(stylesheet[`.${label}`]),
      fullOverlay &&
        !visible &&
        css(stylesheet[`.${label}--fullOverlay.${label}--no-actionBarVisible`]),
      visible && css(stylesheet[`.${label}--actionBarVisible`])
    )
  },
  actionButton: ({ disabled }: Partial<ActionBarActionProps>) => {
    const label = 'psds-card__action-bar__button'

    return compose(
      css(stylesheet[`.${label}`]),
      disabled && css(stylesheet[`.${label}--disabled`])
    )
  },

  bonusBar: () => css(stylesheet['.psds-card__bonus-bar']),

  card: () => css(stylesheet['.psds-card']),

  fullOverlay: ({ fullOverlayVisible: visible }: Partial<CardProps>) => {
    const label = 'psds-card__full-overlay'

    return compose(
      css(stylesheet[`.${label}`]),
      visible && css(stylesheet[`.${label}--fullOverlayVisible`])
    )
  },
  fullOverlayLink: () => css(stylesheet['.psds-card__full-overlay-link']),

  image: () => css(stylesheet['.psds-card__image']),
  imageLink: () => css(stylesheet['.psds-card__image-link']),

  metadata: (
    { size }: Partial<MetaDataProps>,
    themeName: ValueOf<typeof themeNames>
  ) => {
    const label = 'psds-card__metadata'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}--size-${size}`]),
      css(stylesheet[`.${label}--theme-${themeName}`])
    )
  },
  metadataDatum: () => css(stylesheet['.psds-card__metadata__datum']),
  metadataDot: () => css(stylesheet['.psds-card__metadata__dot']),

  overlays: ({ size }: Partial<CardProps>) => {
    const label = 'psds-card__overlays'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}--size-${size}`])
    )
  },

  progress: () => css(stylesheet['.psds-card__progress']),
  progressBar: ({ progress }: Partial<CardProps>) => {
    const label = 'psds-card__progress__bar'
    const percent = toPercentageString(progress || 0)
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

  textLink: (themeName: ValueOf<typeof themeNames>) => {
    const label = 'psds-card__text-link'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}--theme-${themeName}`])
    )
  },

  title: (themeName: ValueOf<typeof themeNames>) => {
    const label = 'psds-card__title'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}--theme-${themeName}`])
    )
  },

  titleContainer: ({ size }: Partial<CardProps>) => {
    const label = 'psds-card__title-container'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}--size-${size}`])
    )
  }
}

interface ActionBarActionProps extends HTMLPropsFor<'button'> {
  disabled?: boolean
  icon?: React.ReactElement<typeof Icon>
  title: string
}
interface ActionBarActionStatics {}
interface ActionBarActionComponent
  extends RefForwardingComponent<
    ActionBarActionProps,
    HTMLButtonElement,
    ActionBarActionStatics
  > {}
const ActionBarAction = React.forwardRef((props, ref) => {
  const { title, icon, ...rest } = props
  const ariaLabel = props['aria-label'] || title
  return (
    <button
      {...styles.actionButton(props)}
      {...rest}
      aria-label={ariaLabel}
      ref={ref}
      title={title}
    >
      {icon}
    </button>
  )
}) as ActionBarActionComponent
ActionBarAction.displayName = 'Card.Action'

const FullOverlayLink: React.FC<HTMLPropsFor<'span'>> = props => (
  <span {...styles.fullOverlayLink()} {...props} />
)

FullOverlayLink.displayName = 'Card.FullOverlayLink'

interface ImageProps extends HTMLPropsFor<'div'> {
  src: string
}
const Image: React.FC<ImageProps> = props => {
  const { src, ...rest } = props
  return (
    <div
      {...styles.image()}
      {...rest}
      style={{ backgroundImage: `url(${src})` }}
    />
  )
}
Image.displayName = 'Card.Image'

const ImageLink: React.FC<HTMLPropsFor<'span'>> = props => (
  <span {...styles.imageLink()} {...props} />
)
ImageLink.displayName = 'Card.ImageLink'

interface TagProps extends HTMLPropsFor<'div'> {
  icon?: React.ReactElement<typeof Icon>
}
const Tag: React.FC<TagProps> = ({ children, icon, ...rest }) => (
  <div {...styles.tag()} {...rest}>
    {icon && (
      <div {...styles.tagIcon()}>
        {
          /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion */
          React.cloneElement(icon as React.ReactElement<any>, {
            size: iconSizes.small
          })
        }
      </div>
    )}

    <span {...styles.tagText()}>{children}</span>
  </div>
)

Tag.displayName = 'Card.Tag'

const Text: React.FC<HTMLPropsFor<'span'>> = props => <span {...props} />
Text.displayName = 'Card.Text'

const TextLink: React.FC<HTMLPropsFor<'span'>> = props => {
  const themeName = useTheme()
  return <span {...styles.textLink(themeName)} {...props} />
}
TextLink.displayName = 'Card.TextLink'

const Title: React.FC<HTMLPropsFor<'div'>> = props => {
  const themeName = useTheme()
  const { children, ...rest } = props

  return (
    <div {...styles.title(themeName)} {...rest}>
      <Shiitake lines={2}>{children}</Shiitake>
    </div>
  )
}
Title.displayName = 'Card.Title'

interface MetaDataProps {
  metadata: (string | React.ReactElement<typeof TextLink>)[]
  size: ValueOf<typeof vars.sizes>
}
const MetaData: React.FC<MetaDataProps> = props => {
  const { metadata, size, ...rest } = props
  const themeName = useTheme()
  return (
    <div {...styles.metadata(props, themeName)} {...rest}>
      {metadata.map((m, i) => [
        <span key={`datum${i}`} {...styles.metadataDatum()}>
          {m}
        </span>,
        i < metadata.length - 1 && (
          <span aria-hidden key={`dot${i}`} {...styles.metadataDot()}>
            ·
          </span>
        )
      ])}
    </div>
  )
}

export interface CardProps extends Record<string, unknown> {
  actionBar?: React.ReactElement<typeof ActionBarAction>[]
  actionBarVisible?: boolean
  bonusBar?: React.ReactNode
  fullOverlay?: React.ReactElement<typeof FullOverlayLink>
  fullOverlayVisible?: boolean
  image: React.ReactElement<typeof ImageLink>
  metadata1?: (string | React.ReactElement<typeof TextLink>)[]
  metadata2?: (string | React.ReactElement<typeof TextLink>)[]
  progress?: number
  size?: ValueOf<typeof vars.sizes>
  tag?: React.ReactElement<typeof Tag>
  title: React.ReactElement<typeof TextLink> | React.ReactElement<typeof Title>
}

interface CardStatics {
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
const Card: React.FC<CardProps> & CardStatics = props => {
  const htmlProps = omit<
    CardProps,
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
  const size = props.size || sizes.medium
  return (
    <div {...styles.card()} {...htmlProps}>
      <div {...styles.overlays({ size })}>
        {props.image ? props.image : null}

        {props.fullOverlay ? (
          <div {...styles.fullOverlay(props)}>{props.fullOverlay}</div>
        ) : null}

        {Array.isArray(props.actionBar) && props.actionBar.length > 0 ? (
          <div {...styles.actionBar(props)}>{props.actionBar}</div>
        ) : null}

        {props.bonusBar ? (
          <div {...styles.bonusBar()}>{props.bonusBar}</div>
        ) : null}

        {props.tag}

        {props.progress ? (
          <div {...styles.progress()}>
            <div
              {...styles.progressBar(props)}
              aria-label={`${toPercentageString(props.progress)} complete`}
            />
          </div>
        ) : null}
      </div>

      <div {...styles.titleContainer({ size })}>{props.title}</div>
      {props.metadata1 && <MetaData size={size} metadata={props.metadata1} />}
      {props.metadata2 && <MetaData size={size} metadata={props.metadata2} />}
    </div>
  )
}

Card.Action = ActionBarAction
Card.FullOverlayLink = FullOverlayLink
Card.Image = Image
Card.ImageLink = ImageLink
Card.Tag = Tag
Card.Text = Text
Card.TextLink = TextLink
Card.Title = Title

Card.sizes = vars.sizes

export const sizes = vars.sizes

export default Card
