import {
  ForwardRefExoticComponent,
  HTMLAttributes,
  RefAttributes,
  ReactNode
} from 'react'

declare const EmptyState: RefForwardingComponent<
  EmptyStateProps,
  HTMLDivElement,
  EmptyStateStatics
>

export default EmptyState

export const sizes: {
  small: 'small'
  large: 'large'
}

export const illustrationNames: {
  bookmark: 'bookmark'
  channel: 'channel'
  cloud: 'cloud'
  code: 'code'
  data: 'data'
  document: 'document'
  magnify: 'magnify'
  signal: 'signal'
  video: 'video'
  zen: 'zen'
}

interface ActionsProps {
  children: ReactNode
}

type Actions = RefForwardingComponent<ActionsProps, HTMLDivElement>

type Caption = RefForwardingComponent<{}, HTMLParagraphElement>

interface HeadingProps {
  as?: keyof JSX.IntrinsicElements
}

type Heading = RefForwardingComponent<HeadingProps, HTMLHeadingElement>

interface IllustrationProps {
  name?: keyof typeof illustrationNames
}

interface IllustrationStatics {
  names: typeof illustrationNames
}

type Illustration = RefForwardingComponent<
  IllustrationProps,
  HTMLDivElement,
  IllustrationStatics
>

interface EmptyStateProps<TagType = JSX.IntrinsicElements> {
  actions?: ReactNode
  caption?: ReactNode
  heading: ReactNode
  illustration?: ReactNode
  size?: keyof typeof sizes
  themeName: string
}

interface EmptyStateStatics {
  Actions: Actions
  Caption: Caption
  Heading: Heading
  Illustration: Illustration
  sizes: typeof sizes
}

// TODO: relocate to a global typings file
type RefForwardingComponent<
  Props = {},
  El = Element,
  Statics = {}
> = ForwardRefExoticComponent<Props & HTMLAttributes<El> & RefAttributes<El>> &
  Statics
