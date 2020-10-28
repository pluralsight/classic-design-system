import { compose, css } from 'glamor'
import polyfillFocusWithin from 'focus-within'
import React, {
  HTMLAttributes,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'

import Button from '@pluralsight/ps-design-system-button'
import { breakpoints } from '@pluralsight/ps-design-system-core'
// @ts-ignore: TODO: update scrollable typings
import Scrollable from '@pluralsight/ps-design-system-scrollable'
import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  RefForwardingComponent,
  ValueOf,
  canUseDOM,
  isFunction,
  useMatchMedia,
  usePrevious
} from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'
import polyfillElementClosest from '../js/polyfill-element-closest'
import * as vars from '../vars'

import useBodyScrollLock from './use-body-scroll-lock'
import useOnClickOutside from './use-on-click-outside'
import useOnEscape from './use-on-escape'
import useOnInnerFocus from './use-on-inner-focus'

if (canUseDOM()) {
  polyfillElementClosest()
  polyfillFocusWithin(document)
}

const SKIP_TARGET_ID = 'ps-appframe--skip-target'
const TOP_NAV_ID = 'ps-appframe--topnav'

const styles = {
  appframe: (themeName: ValueOf<typeof Theme.names>) =>
    compose(
      css(stylesheet['.psds-appframe']),
      css(stylesheet[`.psds-appframe.psds-theme--${themeName}`])
    ),

  skipBanner: () => css(stylesheet['.psds-appframe__skip-banner']),

  container: (variant: ValueOf<typeof vars.sidenavVariants>) =>
    compose(
      css(stylesheet['.psds-appframe__container']),
      variant && css(stylesheet[`.psds-appframe__container--${variant}`])
    ),
  content: () => css(stylesheet['.psds-appframe__content']),
  sidenav: (variant: ValueOf<typeof vars.sidenavVariants>) =>
    compose(
      css(stylesheet['.psds-appframe__sidenav']),
      variant && css(stylesheet[`.psds-appframe__sidenav--${variant}`])
    ),
  sidenavOverflowMask: () =>
    css(stylesheet['.psds-appframe__sidenav__overflow-mask']),
  sidenavInner: () => css(stylesheet['.psds-appframe__sidenav__inner']),
  topnav: () => css(stylesheet['.psds-appframe__topnav'])
}

interface AppFrameContextValue {
  closeSidenav: () => void
  openSidenav: () => void
  sidenavOpen: boolean | undefined
  sidenavVariant: ValueOf<typeof vars.sidenavVariants>
}
const AppFrameContext = createContext<AppFrameContextValue>({
  closeSidenav: () => {},
  openSidenav: () => {},
  sidenavOpen: undefined,
  sidenavVariant: vars.sidenavVariants.closed
})

type RenderProp<P extends Record<string, unknown>> = (
  props: P
) => React.ReactNode

interface AppFrameProps extends HTMLAttributes<HTMLDivElement> {
  onRequestSideNavClose?: () => void
  onRequestSideNavOpen?: () => void
  sidenav?: ReactNode | RenderProp<{ visible: boolean }>
  sidenavOpen?: boolean
  topnav?:
    | ReactNode
    | RenderProp<
        Pick<
          AppFrameContextValue,
          'closeSidenav' | 'openSidenav' | 'sidenavOpen'
        >
      >
}
interface AppFrameStatics {
  SideNav: typeof SideNav
  TopNav: typeof TopNav
}

interface AppFrameComponent
  extends RefForwardingComponent<
    AppFrameProps,
    HTMLDivElement,
    AppFrameStatics
  > {}

const AppFrame = React.forwardRef((props, forwardedRef) => {
  const {
    children,
    onRequestSideNavClose,
    onRequestSideNavOpen,
    sidenav,
    sidenavOpen: initialSidenavOpen,
    topnav,
    ...rest
  } = props

  const ref = React.useRef<HTMLDivElement>(null)
  useImperativeHandle(
    forwardedRef,
    () => (ref.current as unknown) as HTMLDivElement
  )

  const themeName = useTheme()

  const smallMedia = useMatchMedia(`(min-width: ${breakpoints.small})`)
  const largeMedia = useMatchMedia(`(min-width: ${breakpoints.large})`)
  const prevLargeMedia = usePrevious(largeMedia)

  const defaultSidenavOpen = useMemo(() => {
    const controlled = typeof initialSidenavOpen !== 'undefined'
    return controlled ? initialSidenavOpen : largeMedia
  }, [initialSidenavOpen, largeMedia])

  const [sidenavOpen, setSidenavOpen] = useState(defaultSidenavOpen)

  const closeSidenav = useCallback(() => {
    const controlled = typeof props.sidenavOpen !== 'undefined'

    if (controlled && isFunction(onRequestSideNavClose)) onRequestSideNavClose()
    else if (!controlled) setSidenavOpen(false)
  }, [props.sidenavOpen, onRequestSideNavClose])

  const openSidenav = useCallback(() => {
    const controlled = typeof props.sidenavOpen !== 'undefined'

    if (controlled && isFunction(onRequestSideNavOpen)) onRequestSideNavOpen()
    else if (!controlled) setSidenavOpen(true)
  }, [props.sidenavOpen, onRequestSideNavOpen])

  useEffect(() => {
    const enteringXLarge = prevLargeMedia !== largeMedia && largeMedia
    if (enteringXLarge) openSidenav()
  }, [prevLargeMedia, largeMedia, openSidenav])

  useEffect(() => {
    const controlled = typeof props.sidenavOpen !== 'undefined'
    const next = controlled ? props.sidenavOpen : defaultSidenavOpen

    setSidenavOpen(next)
  }, [props.sidenavOpen, defaultSidenavOpen])

  const sidenavVariant = useMemo(() => {
    const { sidenavVariants: variants } = vars

    if (!sidenav) return variants.closed

    if (sidenavOpen) {
      return largeMedia ? variants.open : variants.overlay
    } else {
      return smallMedia ? variants.minimized : variants.closed
    }
  }, [sidenav, sidenavOpen, smallMedia, largeMedia])

  const skipTargetRef = useRef<HTMLAnchorElement>(null)

  const focusSkipTarget = useCallback(() => {
    if (!skipTargetRef.current) return

    skipTargetRef.current.focus()
  }, [])

  const contextValue = {
    closeSidenav,
    openSidenav,
    sidenavOpen,
    sidenavVariant
  }

  return (
    <AppFrameContext.Provider value={contextValue}>
      <div ref={ref} {...styles.appframe(themeName)} {...rest}>
        <SkipBanner href={'#' + SKIP_TARGET_ID} />

        <TopNav id={TOP_NAV_ID}>{topnav}</TopNav>

        <Container>
          {sidenav && <SideNav>{sidenav}</SideNav>}

          <main {...styles.content()}>
            <SkipTarget
              id={SKIP_TARGET_ID}
              onClick={focusSkipTarget}
              ref={skipTargetRef}
            />

            {children}
          </main>
        </Container>
      </div>
    </AppFrameContext.Provider>
  )
}) as AppFrameComponent

AppFrame.displayName = 'AppFrame'

// TODO: why is there a an href here?
interface SkipBannerProps extends HTMLAttributes<HTMLDivElement> {
  href: string
}
const SkipBanner: React.FC<SkipBannerProps> = props => {
  return (
    <Theme name={Theme.names.dark}>
      <div {...styles.skipBanner()} {...props}>
        <Button
          appearance={Button.appearances.secondary}
          size={Button.sizes.small}
          tabIndex={0}
        >
          skip to main content
        </Button>
      </div>
    </Theme>
  )
}

interface SkipTargetProps extends HTMLAttributes<HTMLAnchorElement> {
  id: string
}
const SkipTarget = React.forwardRef<HTMLAnchorElement, SkipTargetProps>(
  (props, ref) => {
    return <a ref={ref} tabIndex={-1} {...props} />
  }
)

SkipTarget.displayName = 'SkipTarget'

const Container: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  const context = useContext(AppFrameContext)
  return <div {...styles.container(context.sidenavVariant)} {...props} />
}

interface SideNavProps extends HTMLAttributes<HTMLDivElement> {
  children: AppFrameProps['sidenav']
}
interface SideNavStatics {
  variants: typeof vars.sidenavVariants
}
const SideNav: React.FC<SideNavProps> & SideNavStatics = props => {
  const { sidenavVariants: variants } = vars
  const children = props.children as SideNavProps['children']

  const { closeSidenav, openSidenav, sidenavVariant } = useContext(
    AppFrameContext
  )

  const hoverable = sidenavVariant === variants.minimized
  const [hovered, setHovered] = useState(false)

  const variant = hoverable && hovered ? variants.overlay : sidenavVariant
  const visible = variant === variants.overlay || variant === variants.open

  const ref = React.useRef<HTMLDivElement>(null)

  const overlayed = variant === variants.overlay
  useBodyScrollLock(ref, overlayed)

  const closeIfOverlayed = useCallback(() => {
    if (overlayed) closeSidenav()
  }, [overlayed, closeSidenav])

  useOnClickOutside(ref, evt => {
    const target = evt.target as HTMLElement
    const inTopNav = target && !!target.closest(`#${TOP_NAV_ID}`)
    if (!inTopNav) closeIfOverlayed()
  })
  useOnEscape(closeIfOverlayed)
  useOnInnerFocus(ref, { onEnter: openSidenav, onLeave: closeIfOverlayed })

  return (
    <Theme name={Theme.names.dark}>
      <div
        ref={ref}
        {...styles.sidenav(variant)}
        {...props}
        {...(hoverable && {
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false)
        })}
      >
        <div {...styles.sidenavOverflowMask()}>
          <Scrollable {...styles.sidenavInner()}>
            {isFunction(children) ? children({ visible }) : children}
          </Scrollable>
        </div>
      </div>
    </Theme>
  )
}

SideNav.variants = vars.sidenavVariants

interface TopNavProps extends HTMLAttributes<HTMLDivElement> {
  children: AppFrameProps['topnav']
}

const TopNav: React.FC<TopNavProps> = props => {
  const children = props.children as TopNavProps['children']
  const { closeSidenav, openSidenav, sidenavOpen } = useContext(AppFrameContext)

  const meta = { closeSidenav, openSidenav, sidenavOpen }

  return (
    <Theme name={Theme.names.dark}>
      <div {...styles.topnav()} {...props}>
        {isFunction<[typeof meta], ReactNode>(children)
          ? children(meta)
          : children}
      </div>
    </Theme>
  )
}

AppFrame.SideNav = SideNav
AppFrame.SideNav.displayName = 'AppFrame.SideNav'

AppFrame.TopNav = TopNav
AppFrame.TopNav.displayName = 'AppFrame.TopNav'

export default AppFrame
