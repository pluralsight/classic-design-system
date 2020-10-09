import { names, useTheme } from '@pluralsight/ps-design-system-theme'
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

type StyleFn = (
  themeName: ValueOf<keyof typeof names>,
  props?: Record<string, any>
) => StyleAttribute

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
  optionButton: (themeName, props) =>
    compose(
      css(
        { label: 'viewtoggle__option' },
        stylesheet['.psds-viewtoggle__option'],
        stylesheet[`.psds-viewtoggle__option.psds-theme--${themeName}`]
      ),
      props.active && css(stylesheet['.psds-viewtoggle__option--active'])
    ),
  list: themeName =>
    css(
      { label: 'viewtoggle' },
      stylesheet['.psds-viewtoggle'],
      stylesheet[`.psds-viewtoggle.psds-theme--${themeName}`]
    ),
  activePillBg: themeName =>
    css(
      { label: 'viewtoggle__option-bg' },
      stylesheet['.psds-viewtoggle__option-bg'],
      stylesheet[`.psds-viewtoggle__option-bg.psds-theme--${themeName}`]
    ),
  pillBgSpacer: () => css(stylesheet['.psds-viewtoggle__option-bg__spacer'])
}

const ViewToggle = forwardRef<HTMLDivElement, ViewToggleProps>(
  (props, forwardedRef) => {
    const { children, onSelect, ...rest } = props

    const ref = useRef<HTMLDivElement>()
    useImperativeHandle(forwardedRef, () => ref.current)

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
        <ActivePillBg style={activePillStyle}>
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
          active: activeIndex === i
        })
      })
    }

    return (
      <List ref={ref} role="radiogroup" {...rest}>
        {renderActivePill()}
        {renderChildren()}
      </List>
    )
  }
) as ViewToggleComponent

const ActivePillBg: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  const themeName = useTheme()
  return <div {...styles.activePillBg(themeName)} aria-hidden {...props} />
}

const List = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const themeName = useTheme()
    return <div ref={ref} {...styles.list(themeName)} {...props} />
  }
)

const PillBgSpacer: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  const themeName = useTheme()
  return <div {...styles.pillBgSpacer(themeName)} {...props} />
}

interface OptionButtonProps extends HTMLAttributes<HTMLButtonElement> {
  active: boolean
}
const OptionButton = forwardRef<HTMLButtonElement, OptionButtonProps>(
  (props, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { active, ...rest } = props
    const themeName = useTheme()

    return (
      <button ref={ref} {...styles.optionButton(themeName, props)} {...rest} />
    )
  }
)

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
      active={active}
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
