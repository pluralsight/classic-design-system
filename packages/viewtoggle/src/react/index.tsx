import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  RefForwardingComponent,
  ValueOf,
  combineFns
} from '@pluralsight/ps-design-system-util'
import { StyleAttribute, compose, css } from 'glamor'
import React, {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'

import stylesheet from '../css'
import * as vars from '../vars'

type StyleFn = (props: Record<string, any>) => StyleAttribute

interface ViewToggleProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  onSelect?: (evt: React.MouseEvent<HTMLButtonElement>, index: number) => void
}

interface ViewToggleStatics {
  Option: typeof Option
}

interface ViewToggleComponent
  extends RefForwardingComponent<
    ViewToggleProps,
    HTMLDivElement,
    ViewToggleStatics
  > {}

const styles: { [key: string]: StyleFn } = {
  optionButton: props =>
    compose(
      css(
        stylesheet['.psds-viewtoggle__option'],
        stylesheet[`.psds-viewtoggle__option.psds-theme--${props.themeName}`]
      ),
      props.active && css(stylesheet['.psds-viewtoggle__option--active'])
    ),
  list: props =>
    css(
      stylesheet['.psds-viewtoggle'],
      stylesheet[`.psds-viewtoggle.psds-theme--${props.themeName}`]
    ),
  activePillBg: props =>
    css(
      stylesheet['.psds-viewtoggle__option-bg'],
      stylesheet[`.psds-viewtoggle__option-bg.psds-theme--${props.themeName}`]
    ),
  pillBgSpacer: () => css(stylesheet['.psds-viewtoggle__option-bg__spacer'])
}

const ViewToggle = forwardRef<HTMLDivElement, ViewToggleProps>(
  (props, forwardedRef) => {
    const { children, onSelect, ...rest } = props

    const ref = useRef<HTMLDivElement>()
    useImperativeHandle(forwardedRef, () => ref.current)

    const themeName = useTheme()
    const hasRenderedOnce = useHasRenderedOnce()

    const initialIndex = useMemo(() => findActiveIndex(children), [children])
    const [activeIndex, setActiveIndex] = useState<number>(initialIndex)

    useEffect(() => {
      const index = findActiveIndex(children)
      setActiveIndex(index)
    }, [children])

    const handleSelect = combineFns(
      (_evt: React.MouseEvent<HTMLButtonElement>, index: number) => {
        setActiveIndex(index)
      },
      onSelect
    )

    function renderActivePill() {
      const activeEl = Children.toArray(children)[activeIndex]
      if (!isValidElement(activeEl)) return null

      let activePillStyle = {}
      if (hasRenderedOnce && ref.current) {
        const selector = `button:nth-of-type(${activeIndex + 1})`
        const activeNode: HTMLElement = ref.current.querySelector(selector)

        if (activeNode) activePillStyle = { left: activeNode.offsetLeft }
      }

      return (
        <ActivePillBg style={activePillStyle} themeName={themeName}>
          <PillBgSpacer>{activeEl.props.children}</PillBgSpacer>
        </ActivePillBg>
      )
    }

    function renderChildren() {
      return Children.map(children, (child, i) => {
        if (!isValidElement(child)) return null
        if (i >= vars.maxOptionsCount) return null

        return cloneElement(child, {
          _i: i,
          _onSelect: handleSelect,
          active: activeIndex === i,
          themeName
        })
      })
    }

    return (
      <List ref={ref} role="radiogroup" themeName={themeName} {...rest}>
        {renderActivePill()}
        {renderChildren()}
      </List>
    )
  }
) as ViewToggleComponent

interface ActivePillBgProps extends HTMLAttributes<HTMLDivElement> {
  themeName: ValueOf<typeof Theme.names>
}
const ActivePillBg: React.FC<ActivePillBgProps> = props => (
  <div {...styles.activePillBg(props)} aria-hidden {...props} />
)

interface ListProps extends HTMLAttributes<HTMLDivElement> {
  themeName: ValueOf<typeof Theme.names>
}
const List = forwardRef<HTMLDivElement, ListProps>((props, ref) => (
  <div ref={ref} {...styles.list(props)} {...props} />
))

const PillBgSpacer: React.FC<HTMLAttributes<HTMLDivElement>> = props => (
  <div {...styles.pillBgSpacer(props)} {...props} />
)

const OptionButton = forwardRef<HTMLButtonElement>((props, ref) => (
  <button ref={ref} {...styles.optionButton(props)} />
))

interface OptionProps extends HTMLAttributes<HTMLButtonElement> {
  _i?: number
  _onSelect?: (evt: React.MouseEvent<HTMLButtonElement>, index: number) => void
  active?: boolean
}
const Option = forwardRef<HTMLButtonElement, OptionProps>((props, ref) => {
  const { active = false, _onSelect, _i, ...rest } = props

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    _onSelect(evt, _i)
  }
  return (
    <OptionButton
      aria-selected={active}
      onClick={handleClick}
      ref={ref}
      role="radio"
      {...rest}
    />
  )
})

ViewToggle.Option = Option

export default ViewToggle

function findActiveIndex(els: ReactNode): number {
  const index = Children.toArray(els).findIndex(
    (el: ReactElement) => el.props.active
  )
  return index >= 0 ? index : 0
}

function useHasRenderedOnce() {
  const [hasRenderedOnce, setHasRenderedOnce] = useState(false)

  useEffect(() => {
    setHasRenderedOnce(true)
  }, [])

  return hasRenderedOnce
}
