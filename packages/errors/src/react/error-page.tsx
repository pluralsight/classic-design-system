import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import {
  RefForwardingComponent,
  RefFor,
  ValueOf,
  useResizeObserver
} from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import Context, { ContextValue } from './context'
import stylesheet, { sizeClasses, themeClasses } from '../css/index'
import { error } from './illustrations/index'
import { sizes } from '../vars/index'

export interface ErrorPageProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ValueOf<typeof sizes>
  actions?: React.ReactNode
  caption?: React.ReactNode
  errorCode?: React.ReactNode
  heading: React.ReactNode
  illustration?: React.ReactNode
  themeName?: ValueOf<typeof themeNames>
}

interface ErrorPageStatics {
  Actions: typeof Actions
  Caption: typeof Caption
  ErrorCode: typeof ErrorCode
  Heading: typeof Heading
  Illustration: typeof Illustration
  sizes: typeof sizes
}

interface ErrorPageComponent
  extends RefForwardingComponent<
    ErrorPageProps,
    HTMLDivElement,
    ErrorPageStatics
  > {}

type StyleFn = (
  props: unknown,
  ctx: ContextValue,
  opts?: unknown
) => glamorExports.StyleAttribute

const glamor = glamorDefault || glamorExports

const renderSmallIfElementLessThan = 450

const styles = {
  errors: (ctx: ContextValue, hasRenderedOnce: boolean) =>
    glamor.compose(
      combineClasses('.psds-error-page', ctx),
      !hasRenderedOnce && stylesheet['.psds-error-page--hidden']
    ),
  actions: (ctx: ContextValue) =>
    combineClasses('.psds-error-page__actions', ctx),
  caption: (ctx: ContextValue) =>
    combineClasses('.psds-error-page__caption', ctx),
  errorCode: (ctx: ContextValue) =>
    combineClasses('.psds-error-page__error-code', ctx),
  heading: (ctx: ContextValue) =>
    combineClasses('.psds-error-page__heading', ctx),
  illustration: (ctx: ContextValue) =>
    combineClasses('.psds-error-page__illustration', ctx)
}

const combineClasses = (className: string, { size, themeName }: ContextValue) =>
  glamor.css(
    stylesheet[className],
    stylesheet[className + themeClasses[themeName as string]],
    stylesheet[className + sizeClasses[size as string]]
  )

const ErrorPage = React.forwardRef<HTMLDivElement, ErrorPageProps>(
  (props, forwardedRef) => {
    const {
      actions,
      caption,
      heading,
      illustration,
      errorCode,
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
          {...styles.errors(ctx, hasRenderedOnce)}
          {...rest}
          ref={ref as RefFor<'div'>}
        >
          {illustration}
          {heading}
          {caption}
          {errorCode}
          {actions}
        </div>
      </Context.Provider>
    )
  }
) as ErrorPageComponent

const Actions: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => (
  <Context.Consumer>
    {ctx => <div {...styles.actions(ctx)} {...props} />}
  </Context.Consumer>
)

const Caption: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = props => (
  <Context.Consumer>
    {ctx => <p {...styles.caption(ctx)} {...props} />}
  </Context.Consumer>
)

const ErrorCode: React.FC<React.HTMLAttributes<HTMLParagraphElement>> =
  props => (
    <Context.Consumer>
      {ctx => <p {...styles.errorCode(ctx)} {...props} />}
    </Context.Consumer>
  )

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
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

interface IllustrationProps extends React.HTMLAttributes<SVGElement> {}

const Illustration: React.FC<IllustrationProps> = props => {
  const { children: custom, ...rest } = props

  return (
    <Context.Consumer>
      {ctx => {
        // @ts-ignore: necessary conditional
        let Comp: any = error
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

ErrorPage.Actions = Actions
ErrorPage.Caption = Caption
ErrorPage.ErrorCode = ErrorCode
ErrorPage.Heading = Heading
ErrorPage.Illustration = Illustration

ErrorPage.sizes = sizes

export default ErrorPage
