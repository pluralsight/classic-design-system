import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import {
  ValueOf,
  isString,
  useMatchMedia
} from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import ConditionalWrap from './conditional-wrap'
import stylesheet from '../css/index'
import { toPercentageString } from '../js/index'
import Shave from './shave'
import * as vars from '../vars/index'

const glamor = glamorDefault || glamorExports

const styles = {
  actionBar: (props: ActionBarProps) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-row__action-bar']),
      !!props.fullOverlay &&
        glamor.css(stylesheet['.psds-row__action-bar--fullOverlay']),
      props.actionBarVisible &&
        glamor.css(stylesheet['.psds-row__action-bar--actionBarVisible'])
    ),

  fullOverlay: (props: FullOverlayProps) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-row__full-overlay']),
      props.isFocused &&
        glamor.css(stylesheet['.psds-row__full-overlay--isFocused']),
      props.fullOverlayVisible &&
        glamor.css(stylesheet['.psds-row__full-overlay--fullOverlayVisible'])
    ),

  fullOverlayLink: () => glamor.css(stylesheet['.psds-row__full-overlay-link']),

  image: (props: ImageProps) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-row__image']),
      glamor.css({ backgroundImage: `url(${props.src})` })
    ),

  imageLink: () => glamor.css(stylesheet['.psds-row__image-link']),

  metadata: (themeName: ValueOf<typeof themeNames>, props: MetadataProps) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-row__metadata']),
      glamor.css(stylesheet[`.psds-row__metadata.psds-theme--${themeName}`]),
      glamor.css(stylesheet[`.psds-row__metadata--size-${props.size}`])
    ),

  metadataDatum: () => glamor.css(stylesheet['.psds-row__metadata__datum']),

  metadataDot: () => glamor.css(stylesheet['.psds-row__metadata__dot']),

  overlays: () => glamor.css(stylesheet['.psds-row__overlays']),

  progress: () => glamor.css(stylesheet['.psds-row__progress']),

  progressBar: (props: ProgressBarProps) => {
    const percent = toPercentageString(props.progress)
    const complete = percent === '100%'

    return glamor.compose(
      glamor.css(stylesheet['.psds-row__progress__bar']),
      complete && glamor.css(stylesheet['.psds-row__progress__bar--complete']),
      glamor.css({ width: percent })
    )
  },

  row: (themeName: ValueOf<typeof themeNames>) =>
    glamor.css(
      stylesheet['.psds-row'],
      stylesheet[`.psds-row.psds-theme--${themeName}`]
    ),

  textLink: (themeName: ValueOf<typeof themeNames>) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-row__text-link']),
      glamor.css(stylesheet[`.psds-row__text-link.psds-theme--${themeName}`])
    ),

  title: (themeName: ValueOf<typeof themeNames>, props: TitleProps) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-row__title']),
      glamor.css(stylesheet[`.psds-row__title--size-${props.size}`]),
      glamor.css(stylesheet[`.psds-row__title.psds-theme--${themeName}`])
    ),

  words: (props: Pick<WordsProps, 'actionBar' | 'image' | 'size'>) => {
    const imgWidth = formatImageWidth(props.image, props.size)
    const actionBarWidth = formatActionBarWidth(props.actionBar)

    return glamor.compose(
      glamor.css(stylesheet['.psds-row__words']),
      glamor.css({ maxWidth: `calc(100% - ${imgWidth} - ${actionBarWidth})` })
    )
  }
}

const formatImageWidth = (
  image: unknown,
  size?: ValueOf<typeof vars.sizes>
): string => {
  return image && size !== vars.sizes.small
    ? `(${vars.style.overlaysWidth} + ${vars.style.overlaysMarginRight})`
    : `0px`
}

const formatActionBarWidth = (actionBar: unknown): string => {
  return Array.isArray(actionBar) && actionBar.length > 1
    ? `(${actionBar.length} * ${vars.style.actionBarActionWidth} + ${actionBar.length} * ${vars.style.actionBarActionMarginLeft})`
    : '0px'
}

type MetadataNode =
  | string
  | React.ReactElement<typeof Text>
  | React.ReactElement<typeof TextLink>

// NOTE: the `title` prop clashes with a native html attr so we're exclude
//       it from being mistakenly used in any child component
interface RowProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'title'
  > {
  actionBar?: React.ReactNode[] // <Button size="small" appearance="secondary" />
  actionBarVisible?: boolean
  fullOverlay?: React.ReactNode | React.ReactElement<typeof FullOverlayLink>
  fullOverlayVisible?: boolean
  image?:
    | React.ReactElement<typeof Image>
    | React.ReactElement<typeof ImageLink>
  metadata1?: MetadataNode[]
  metadata2?: MetadataNode[]
  progress?: number
  size?: ValueOf<typeof vars.sizes>
  title?:
    | string
    | React.ReactElement<typeof Text>
    | React.ReactElement<typeof TextLink>
  titleTruncated?: boolean
}

interface RowStatics {
  FullOverlayLink: typeof FullOverlayLink
  Image: typeof Image
  ImageLink: typeof ImageLink
  Text: typeof Text
  TextLink: typeof TextLink
  sizes: typeof vars.sizes
}

const Row: React.FC<RowProps> & RowStatics = props => {
  const themeName = useTheme()

  const {
    actionBar,
    actionBarVisible = false,
    fullOverlay,
    fullOverlayVisible = false,
    image,
    metadata1,
    metadata2,
    progress,
    size: initialSize,
    title,
    titleTruncated,
    ...rest
  } = props

  const isDesktop = useMatchMedia('screen and (min-width: 769px)')
  const size = initialSize || (isDesktop ? vars.sizes.medium : vars.sizes.small)

  return (
    <div {...styles.row(themeName)} {...rest}>
      {renderOverlays({
        fullOverlay,
        fullOverlayVisible,
        image,
        progress,
        size
      })}

      <Words image={image} size={size} actionBar={actionBar}>
        <Title size={size} truncated={titleTruncated}>
          {title}
        </Title>

        {renderMetaData(metadata1, { size })}
        {renderMetaData(metadata2, { size })}
      </Words>

      {renderActionBar({ actionBar, actionBarVisible, fullOverlay })}
    </div>
  )
}

const renderActionBar = (
  props: Pick<RowProps, 'actionBar' | 'actionBarVisible' | 'fullOverlay'>
) => {
  const { actionBar } = props

  if (!Array.isArray(actionBar) || actionBar.length === 0) return null

  return (
    <ActionBar
      actionBarVisible={props.actionBarVisible}
      fullOverlay={props.fullOverlay}
    >
      {actionBar}
    </ActionBar>
  )
}

const renderOverlays = (
  props: Pick<
    RowProps,
    'fullOverlay' | 'fullOverlayVisible' | 'image' | 'progress' | 'size'
  >
) => {
  if (!props.image || props.size === vars.sizes.small) return null

  return (
    <Overlays>
      {renderImage(props)}

      <FullOverlayFocusManager
        fullOverlayVisible={props.fullOverlayVisible}
        fullOverlay={props.fullOverlay}
      />

      {renderProgress({ progress: props.progress })}
    </Overlays>
  )
}

const renderImage = (props: Pick<RowProps, 'image'>) => {
  return props.image || null
}

const renderMetaData = (
  metadata: MetadataNode[] | undefined,
  props: Required<Pick<RowProps, 'size'>>
) => {
  if (!metadata) return null

  return (
    <Metadata size={props.size}>
      {metadata.map((datum, i) => {
        const hasNext = i < metadata.length - 1
        return [
          <MetadataDatum key={`datum${i}`}>{datum}</MetadataDatum>,
          hasNext && <MetadataDot key={`dot${i}`} />
        ]
      })}
    </Metadata>
  )
}

const renderProgress = (props: Pick<RowProps, 'progress'>) => {
  if (!props.progress) return null

  return (
    <Progress>
      <ProgressBar progress={props.progress} />
    </Progress>
  )
}

interface ActionBarProps
  extends Pick<RowProps, 'actionBarVisible' | 'fullOverlay'> {}

const ActionBar: React.FC<ActionBarProps> = props => {
  const { actionBarVisible, fullOverlay, ...rest } = props

  return (
    <div {...styles.actionBar({ actionBarVisible, fullOverlay })} {...rest} />
  )
}

interface FullOverlayFocusManagerProps
  extends Pick<RowProps, 'fullOverlay' | 'fullOverlayVisible'> {}

const FullOverlayFocusManager: React.FC<FullOverlayFocusManagerProps> =
  props => {
    const { fullOverlayVisible, fullOverlay } = props

    const [isFocused, setFocused] = React.useState(false)

    const handleFocus: React.FocusEventHandler<HTMLDivElement> = () => {
      setFocused(true)
    }

    const handleBlur: React.FocusEventHandler<HTMLDivElement> = () => {
      setFocused(false)
    }

    if (!React.isValidElement(fullOverlay)) return null

    return (
      <FullOverlay
        isFocused={isFocused}
        fullOverlayVisible={fullOverlayVisible}
      >
        {React.cloneElement(fullOverlay, {
          onFocus: handleFocus,
          onBlur: handleBlur
        })}
      </FullOverlay>
    )
  }

interface FullOverlayProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Pick<RowProps, 'fullOverlayVisible'> {
  isFocused: boolean
}
const FullOverlay: React.FC<FullOverlayProps> = props => {
  const { fullOverlayVisible, isFocused, ...rest } = props

  return (
    <div {...styles.fullOverlay({ fullOverlayVisible, isFocused })} {...rest} />
  )
}

interface FullOverlayLinkProps extends React.HTMLAttributes<HTMLSpanElement> {}
const FullOverlayLink: React.FC<FullOverlayLinkProps> = props => {
  return <span {...styles.fullOverlayLink()} {...props} />
}
FullOverlayLink.displayName = 'Row.FullOverlayLink'

interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
}
const Image: React.FC<ImageProps> = props => {
  const { src, ...rest } = props
  return <div {...styles.image({ src })} {...rest} />
}

Image.displayName = 'Row.Image'

interface ImageLinkProps extends React.HTMLAttributes<HTMLSpanElement> {}
const ImageLink: React.FC<ImageLinkProps> = props => {
  return <span {...styles.imageLink()} {...props} />
}
ImageLink.displayName = 'Row.ImageLink'

interface MetadataProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Required<Pick<RowProps, 'size'>> {}
const Metadata: React.FC<MetadataProps> = props => {
  const { size, ...rest } = props
  const themeName = useTheme()

  return <div {...styles.metadata(themeName, { size })} {...rest} />
}

interface MetadataDatumProps extends React.HTMLAttributes<HTMLSpanElement> {}
const MetadataDatum: React.FC<MetadataDatumProps> = props => {
  return <span {...styles.metadataDatum()} {...props} />
}

interface MetadataDotProps extends React.HTMLAttributes<HTMLSpanElement> {}
const MetadataDot: React.FC<MetadataDotProps> = props => {
  return (
    <span {...styles.metadataDot()} {...props} aria-hidden>
      ·
    </span>
  )
}

interface OverlaysProps extends React.HTMLAttributes<HTMLDivElement> {}
const Overlays: React.FC<OverlaysProps> = props => {
  return <div {...styles.overlays()} {...props} />
}

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {}
const Progress: React.FC<ProgressProps> = props => {
  return <div {...styles.progress()} {...props} />
}

interface ProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Required<Pick<RowProps, 'progress'>> {}
const ProgressBar: React.FC<ProgressBarProps> = props => {
  const { progress = 0, ...rest } = props
  const percent = toPercentageString(progress)

  return (
    <div
      {...styles.progressBar({ progress })}
      {...rest}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={progress}
      aria-label={`${percent} complete`}
    />
  )
}

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {}
const Text: React.FC<TextProps> = props => <span {...props} />
Text.displayName = 'Row.Text'

interface TextLinkProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactElement<'a'>
  truncated?: boolean
}
const TextLink: React.FC<TextLinkProps> = props => {
  const { children, truncated = false, ...rest } = props
  const themeName = useTheme()

  const anchor = React.Children.only(children)
  const anchorText = anchor.props.children

  const shouldWrap = truncated && isString(anchorText)
  const shaveWrap = (child: React.ReactNode) => {
    if (!isString(child)) return null

    return <Shave lines={2}>{child}</Shave>
  }

  return (
    <span {...styles.textLink(themeName)} {...rest}>
      <a {...anchor.props}>
        <ConditionalWrap shouldWrap={shouldWrap} wrapper={shaveWrap}>
          {anchorText}
        </ConditionalWrap>
      </a>
    </span>
  )
}
TextLink.displayName = 'Row.TextLink'

interface TitleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Required<Pick<RowProps, 'size'>> {
  truncated?: boolean
}
const Title: React.FC<TitleProps> = props => {
  const { children, size, truncated = false, ...rest } = props
  const themeName = useTheme()

  const wrapAsLink = (child: React.ReactNode) => {
    if (!React.isValidElement(child)) return null

    return React.cloneElement(child, { truncated })
  }

  const wrapWithShave = (child: React.ReactNode) => {
    return (
      <ConditionalWrap shouldWrap={truncated} wrapper={shaveWrap}>
        {child}
      </ConditionalWrap>
    )
  }
  const shaveWrap = (child: React.ReactNode) => {
    if (!isString(child)) return null
    return <Shave lines={2}>{child}</Shave>
  }

  return (
    <div {...styles.title(themeName, { size })} {...rest}>
      {isString(children) ? wrapWithShave(children) : wrapAsLink(children)}
    </div>
  )
}

interface WordsProps
  extends Pick<RowProps, 'actionBar' | 'image' | 'size'>,
    React.HTMLAttributes<HTMLDivElement> {}
const Words: React.FC<WordsProps> = props => {
  const { actionBar, image, size, ...rest } = props
  return <div {...styles.words({ actionBar, image, size })} {...rest} />
}

Row.FullOverlayLink = FullOverlayLink
Row.Image = Image
Row.ImageLink = ImageLink
Row.Text = Text
Row.TextLink = TextLink

Row.sizes = vars.sizes
export const sizes = Row.sizes

export default Row
