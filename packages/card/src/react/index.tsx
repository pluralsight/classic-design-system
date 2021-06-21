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
  canUseDOM
} from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'
import Shiitake from 'shiitake'

import stylesheet from '../css/index'
import { toPercentageString } from '../js/index'
import * as vars from '../vars/index'

const glamor = glamorDefault || glamorExports

if (canUseDOM()) polyfillFocusWithin(document)

const styles = {
  actionBar: ({
    actionBarVisible,
    fullOverlay
  }: {
    actionBarVisible?: boolean
    fullOverlay?: boolean
  }) => {
    const label = 'psds-card__action-bar'

    return glamor.compose(
      glamor.css(stylesheet[`.${label}`]),
      fullOverlay &&
        !actionBarVisible &&
        glamor.css(
          stylesheet[`.${label}--fullOverlay.${label}--no-actionBarVisible`]
        ),
      actionBarVisible && glamor.css(stylesheet[`.${label}--actionBarVisible`])
    )
  },
  actionButton: (disabled?: boolean) => {
    const label = 'psds-card__action-bar__button'

    return glamor.compose(
      glamor.css(stylesheet[`.${label}`]),
      disabled && glamor.css(stylesheet[`.${label}--disabled`])
    )
  },

  bonusBar: () => glamor.css(stylesheet['.psds-card__bonus-bar']),

  card: () => glamor.css(stylesheet['.psds-card']),

  fullOverlay: (fullOverlayVisible?: boolean) => {
    const label = 'psds-card__full-overlay'

    return glamor.compose(
      glamor.css(stylesheet[`.${label}`]),
      fullOverlayVisible &&
        glamor.css(stylesheet[`.${label}--fullOverlayVisible`])
    )
  },
  fullOverlayLink: () =>
    glamor.css(stylesheet['.psds-card__full-overlay-link']),

  image: () => glamor.css(stylesheet['.psds-card__image']),
  imageLink: () => glamor.css(stylesheet['.psds-card__image-link']),

  metadata: (
    size: ValueOf<typeof vars.sizes>,
    themeName: ValueOf<typeof themeNames>
  ) => {
    const label = 'psds-card__metadata'

    return glamor.compose(
      glamor.css(stylesheet[`.${label}`]),
      glamor.css(stylesheet[`.${label}--size-${size}`]),
      glamor.css(stylesheet[`.${label}--theme-${themeName}`])
    )
  },
  metadataDatum: () => glamor.css(stylesheet['.psds-card__metadata__datum']),
  metadataDot: () => glamor.css(stylesheet['.psds-card__metadata__dot']),

  overlays: (size: ValueOf<typeof vars.sizes>) => {
    const label = 'psds-card__overlays'

    return glamor.compose(
      glamor.css(stylesheet[`.${label}`]),
      glamor.css(stylesheet[`.${label}--size-${size}`])
    )
  },

  progress: () => glamor.css(stylesheet['.psds-card__progress']),
  progressBar: (progress: number) => {
    const label = 'psds-card__progress__bar'
    const percent = toPercentageString(progress || 0)
    const isCompleted = percent === '100%'

    return glamor.compose(
      glamor.css(stylesheet[`.${label}`]),
      isCompleted && glamor.css(stylesheet[`.${label}--complete`]),
      glamor.css({ width: percent })
    )
  },

  tag: () => glamor.css(stylesheet['.psds-card__tag']),
  tagIcon: () => glamor.css(stylesheet['.psds-card__tag__icon']),
  tagText: () => glamor.css(stylesheet['.psds-card__tag__text']),

  textLink: (themeName: ValueOf<typeof themeNames>) => {
    const label = 'psds-card__text-link'

    return glamor.compose(
      glamor.css(stylesheet[`.${label}`]),
      glamor.css(stylesheet[`.${label}--theme-${themeName}`])
    )
  },

  title: (themeName: ValueOf<typeof themeNames>) => {
    const label = 'psds-card__title'

    return glamor.compose(
      glamor.css(stylesheet[`.${label}`]),
      glamor.css(stylesheet[`.${label}--theme-${themeName}`])
    )
  },

  titleContainer: (size: ValueOf<typeof vars.sizes>) => {
    const label = 'psds-card__title-container'

    return glamor.compose(
      glamor.css(stylesheet[`.${label}`]),
      glamor.css(stylesheet[`.${label}--size-${size}`])
    )
  }
}

interface ActionBarActionProps extends HTMLPropsFor<HTMLButtonElement> {
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
      {...styles.actionButton(props.disabled)}
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

const FullOverlayLink: React.FC<HTMLPropsFor<HTMLSpanElement>> = props => (
  <span {...styles.fullOverlayLink()} {...props} />
)

FullOverlayLink.displayName = 'Card.FullOverlayLink'

interface ImageProps extends HTMLPropsFor<HTMLDivElement> {
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

const ImageLink: React.FC<HTMLPropsFor<HTMLSpanElement>> = props => (
  <span {...styles.imageLink()} {...props} />
)
ImageLink.displayName = 'Card.ImageLink'

interface TagProps extends HTMLPropsFor<HTMLDivElement> {
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

const Text: React.FC<HTMLPropsFor<HTMLSpanElement>> = props => (
  <span {...props} />
)
Text.displayName = 'Card.Text'

const TextLink: React.FC<HTMLPropsFor<HTMLSpanElement>> = props => {
  const themeName = useTheme()
  return <span {...styles.textLink(themeName)} {...props} />
}
TextLink.displayName = 'Card.TextLink'

const Title: React.FC<HTMLPropsFor<HTMLDivElement>> = props => {
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
    <div {...styles.metadata(size, themeName)} {...rest}>
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

export interface CardProps extends Omit<HTMLPropsFor<HTMLDivElement>, 'title'> {
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
    size = sizes.medium,
    tag,
    title,
    ...rest
  } = props
  return (
    <div {...styles.card()} {...rest}>
      <div {...styles.overlays(size)}>
        {image || null}

        {fullOverlay ? (
          <div {...styles.fullOverlay(fullOverlayVisible)}>{fullOverlay}</div>
        ) : null}

        {Array.isArray(actionBar) && actionBar.length > 0 ? (
          <div
            {...styles.actionBar({
              actionBarVisible,
              fullOverlay: Boolean(fullOverlay)
            })}
          >
            {actionBar}
          </div>
        ) : null}

        {bonusBar ? <div {...styles.bonusBar()}>{bonusBar}</div> : null}

        {tag}

        {progress ? (
          <div {...styles.progress()}>
            <div
              {...styles.progressBar(progress)}
              aria-label={`${toPercentageString(progress)} complete`}
            />
          </div>
        ) : null}
      </div>

      <div {...styles.titleContainer(size)}>{title}</div>
      {metadata1 && <MetaData size={size} metadata={metadata1} />}
      {metadata2 && <MetaData size={size} metadata={metadata2} />}
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
