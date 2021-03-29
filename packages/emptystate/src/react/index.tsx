import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import {
  HTMLPropsFor,
  RefForwardingComponent,
  RefFor,
  ValueOf,
  useResizeObserver
} from '@pluralsight/ps-design-system-util'
import { StyleAttribute, compose, css } from 'glamor'
import React from 'react'

import Context, { ContextValue } from './context'
import stylesheet, { sizeClasses, themeClasses } from '../css/index'
import * as illustrations from './illustrations/index'
import { illustrationNames, sizes } from '../vars/index'

export interface EmptyStateProps extends HTMLPropsFor<'div'> {
  size?: ValueOf<typeof sizes>
  actions?: React.ReactNode
  caption?: React.ReactNode
  heading: React.ReactNode
  illustration?: React.ReactNode
  themeName?: ValueOf<typeof themeNames>
}

interface EmptyStateStatics {
  Actions: typeof Actions
  Caption: typeof Caption
  Heading: typeof Heading
  Illustration: typeof Illustration
  sizes: typeof sizes
}

interface EmptyStateComponent
  extends RefForwardingComponent<
    EmptyStateProps,
    HTMLDivElement,
    EmptyStateStatics
  > {}

type StyleFn = (
  props: unknown,
  ctx: ContextValue,
  opts?: unknown
) => StyleAttribute

const renderSmallIfElementLessThan = 450

const styles = {
  emptyState: (ctx: ContextValue, hasRenderedOnce: boolean) =>
    compose(
      combineClasses('.psds-emptystate', ctx),
      !hasRenderedOnce && stylesheet['.psds-emptystate--hidden']
    ),
  actions: (ctx: ContextValue) =>
    combineClasses('.psds-emptystate__actions', ctx),
  caption: (ctx: ContextValue) =>
    combineClasses('.psds-emptystate__caption', ctx),
  heading: (ctx: ContextValue) =>
    combineClasses('.psds-emptystate__heading', ctx),
  illustration: (ctx: ContextValue) =>
    combineClasses('.psds-emptystate__illustration', ctx)
}

const combineClasses = (className: string, { size, themeName }: ContextValue) =>
  css(
    stylesheet[className],
    stylesheet[className + themeClasses[themeName as string]],
    stylesheet[className + sizeClasses[size as string]]
  )

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (props, forwardedRef) => {
    const {
      actions,
      caption,
      heading,
      illustration,
      size: sizeOverride,
      ...rest
    } = props

    const ref = React.useRef<HTMLDivElement>()
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    React.useImperativeHandle(forwardedRef, () => ref.current as HTMLDivElement)

    const themeName = useTheme()

    const [hasRenderedOnce, setHasRenderedOnce] = React.useState(false)
    const { width } = useResizeObserver(ref)

    React.useEffect(() => {
      setHasRenderedOnce(true)
    }, [])

    const observableSize =
      width <= renderSmallIfElementLessThan ? sizes.small : sizes.large

    const size = sizeOverride ? props.size : observableSize
    const ctx = { size, themeName }

    return (
      <Context.Provider value={ctx}>
        <div
          {...styles.emptyState(ctx, hasRenderedOnce)}
          {...rest}
          ref={ref as RefFor<'div'>}
        >
          {illustration}
          {heading}
          {caption}
          {actions}
        </div>
      </Context.Provider>
    )
  }
) as EmptyStateComponent

const Actions: React.FC<HTMLPropsFor<'div'>> = props => (
  <Context.Consumer>
    {ctx => <div {...styles.actions(ctx)} {...props} />}
  </Context.Consumer>
)

const Caption: React.FC<HTMLPropsFor<'p'>> = props => (
  <Context.Consumer>
    {ctx => <p {...styles.caption(ctx)} {...props} />}
  </Context.Consumer>
)

interface HeadingProps extends HTMLPropsFor<'h1'> {
  as?: keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5'>
}

const Heading: React.FC<HeadingProps> = props => {
  const { as: Tag = 'h1', ...rest } = props

  return (
    <Context.Consumer>
      {ctx => <Tag {...styles.heading(ctx)} {...rest} />}
    </Context.Consumer>
  )
}

interface IllustrationProps extends HTMLPropsFor<'svg'> {
  name?: ValueOf<typeof illustrationNames>
}

interface IllustrationStatics {
  names: typeof illustrationNames
}

const IllustrationNotFound = () => null

const Illustration: React.FC<IllustrationProps> &
  IllustrationStatics = props => {
  const { children: custom, name, ...rest } = props

  return (
    <Context.Consumer>
      {ctx => {
        // @ts-ignore: necessary conditional
        let Comp: any = illustrations[name] || IllustrationNotFound
        const isSmall: boolean = ctx.size === sizes.small && !!Comp.small

        if (isSmall) Comp = Comp.small
        if (custom) Comp = () => custom

        return (
          <div {...styles.illustration(ctx)}>
            <Comp {...rest} />
          </div>
        )
      }}
    </Context.Consumer>
  )
}

Illustration.names = illustrationNames

EmptyState.Actions = Actions
EmptyState.Caption = Caption
EmptyState.Heading = Heading
EmptyState.Illustration = Illustration

EmptyState.sizes = sizes

export default EmptyState
