import { names, useTheme } from '@pluralsight/ps-design-system-theme'
import {
  RefForwardingComponent,
  ValueOf,
  combineFns,
  HTMLPropsFor,
  RefFor
} from '@pluralsight/ps-design-system-util'
import { StyleAttribute, compose, css } from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import * as vars from '../vars/index'

type StyleFn = (
  themeName: ValueOf<keyof typeof names>,
  props?: Record<string, any>
) => StyleAttribute

interface ViewToggleProps
  extends Omit<React.ComponentProps<typeof List>, 'onSelect'> {
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

const ViewToggle = React.forwardRef<HTMLDivElement, ViewToggleProps>(
  (props, forwardedRef) => {
    const { children, onSelect, ...rest } = props

    const ref = React.useRef<HTMLDivElement>(null)
    React.useImperativeHandle(forwardedRef, () => ref.current)

    const hasRenderedOnce = useHasRenderedOnce()

    const initialIndex = React.useMemo(() => findActiveIndex(children), [
      children
    ])
    const [activeIndex, setActiveIndex] = React.useState<number>(initialIndex)

    React.useEffect(() => {
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
      const activeEl = React.Children.toArray(children)[activeIndex]
      if (!React.isValidElement(activeEl)) return null

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
      return React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) return null
        if (i >= vars.maxOptionsCount) return null

        return React.cloneElement(child, {
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

const ActivePillBg: React.FC<HTMLPropsFor<'div'>> = props => {
  const themeName = useTheme()
  return <div {...styles.activePillBg(themeName)} aria-hidden {...props} />
}

const List = React.forwardRef<HTMLDivElement, HTMLPropsFor<'div'>>(
  (props, ref) => {
    const themeName = useTheme()
    return <div ref={ref} {...styles.list(themeName)} {...props} />
  }
)

const PillBgSpacer: React.FC<HTMLPropsFor<'div'>> = props => {
  const themeName = useTheme()
  return <div {...styles.pillBgSpacer(themeName)} {...props} />
}

interface OptionButtonProps extends HTMLPropsFor<'button'> {
  active: boolean
}
const OptionButton = React.forwardRef<HTMLButtonElement, OptionButtonProps>(
  (props, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { active, ...rest } = props
    const themeName = useTheme()

    return (
      <button ref={ref} {...styles.optionButton(themeName, props)} {...rest} />
    )
  }
)

interface OptionProps
  extends Omit<
    React.ComponentProps<typeof OptionButton>,
    '_i' | '_onselect' | 'active'
  > {
  _i?: number
  _onSelect?: (evt: React.MouseEvent<HTMLButtonElement>, index: number) => void
  active?: boolean
}
const Option = React.forwardRef<HTMLButtonElement, OptionProps>(
  (props, ref) => {
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
  }
)

ViewToggle.Option = Option

export default ViewToggle

function findActiveIndex(els: React.ReactNode): number {
  const index = React.Children.toArray(els).findIndex(
    (el: React.ReactElement) => el.props.active
  )
  return index >= 0 ? index : 0
}

function useHasRenderedOnce() {
  const [hasRenderedOnce, setHasRenderedOnce] = React.useState(false)

  React.useEffect(() => {
    setHasRenderedOnce(true)
  }, [])

  return hasRenderedOnce
}
