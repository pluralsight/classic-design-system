import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import { BelowLeft } from '@pluralsight/ps-design-system-position'
import TextInput from '@pluralsight/ps-design-system-textinput'
import {
  RefForwardingComponent,
  combineFns,
  usePortal
} from '@pluralsight/ps-design-system-util'
import React from 'react'

import SuggestionsMenu from './menu'
import Suggestion, {
  FilterFn,
  filterSuggestions,
  getSuggestionLabel,
  getSuggestionValue
} from './suggestion'
import useOnDocumentClick from './use-on-document-click'
import * as vars from '../vars/index'

interface TypeaheadProps
  extends Pick<
    React.ComponentProps<typeof TextInput>,
    | 'appearance'
    | 'disabled'
    | 'error'
    | 'label'
    | 'name'
    | 'placeholder'
    | 'size'
    | 'subLabel'
  > {
  children?:
    | React.ReactElement<typeof Suggestion>
    | React.ReactElement<typeof Suggestion>[]
  filterFn?: FilterFn
  loading?: boolean
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onChange?: (
    evt:
      | React.FormEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLDivElement>,
    value: string
  ) => void

  onFocus?: React.FocusEventHandler<HTMLInputElement>
  value?: string
}
interface TypeaheadStatics {
  Suggestion: typeof Suggestion
  appearances: typeof vars.appearances
  sizes: typeof vars.sizes
}

type TypeaheadComponent = RefForwardingComponent<
  TypeaheadProps,
  HTMLDivElement,
  TypeaheadStatics
>

const Typeahead = React.forwardRef<HTMLDivElement, TypeaheadProps>(
  (props, forwardedRef) => {
    const {
      appearance,
      children,
      disabled,
      error,
      filterFn = filterSuggestions,
      label,
      name,
      onChange,
      placeholder,
      size,
      subLabel,
      value,
      ...rest
    } = props

    const portal = usePortal()
    const containerRef = React.useRef<HTMLDivElement>(null)

    const [target, setTarget] = React.useState<HTMLElement>()
    const inputRef = React.useRef<HTMLInputElement | null>()
    const setInputRef = React.useCallback(node => {
      inputRef.current = node
      setTarget(node ? node.parentNode : undefined)
    }, [])

    React.useImperativeHandle(
      forwardedRef,
      () => (inputRef.current as unknown) as HTMLInputElement
    )
    const [controlled] = React.useState<boolean>(typeof value !== 'undefined')
    const [open, setOpen] = React.useState<boolean>(false)

    const [innerValue, setInnerValue] = React.useState<string | undefined>(
      value || ''
    )
    const [searchTerm, setSearchTerm] = React.useState<string>('')

    React.useEffect(
      function updateControlledValue() {
        if (controlled) setInnerValue(value)
      },
      [controlled, value]
    )

    React.useEffect(
      function clearSearchTermOnClose() {
        if (!open) setSearchTerm('')
      },
      [open]
    )

    useOnDocumentClick(evt => {
      const target = evt.target as HTMLElement
      const portalEl = portal.current as HTMLElement

      const isInnerClick =
        !containerRef.current ||
        containerRef.current.contains(target) ||
        portalEl.contains(target)

      if (isInnerClick) return

      setOpen(false)
    })

    const suggestions = React.useMemo(() => {
      return React.Children.toArray(children)
        .filter(React.isValidElement)
        .map((child, index) => ({
          index,
          label: getSuggestionLabel(child),
          value: getSuggestionValue(child)
        }))
    }, [children])

    const filteredSuggestions = React.useMemo(
      () => filterFn(searchTerm, suggestions),
      [filterFn, searchTerm, suggestions]
    )

    const handleChange = (
      evt:
        | React.FormEvent<HTMLInputElement>
        | React.MouseEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLDivElement>,
      nextValue: string
    ) => {
      setSearchTerm(nextValue)

      if (!controlled) setInnerValue(nextValue)
      if (onChange) onChange(evt, nextValue)
    }

    const handleInputFocus = combineFns(_evt => {
      setOpen(true)
    }, props.onFocus)

    const handleInputChange: React.FormEventHandler<HTMLInputElement> = evt => {
      const target = evt.target as HTMLInputElement
      const nextValue = target.value

      handleChange(evt, nextValue)
    }

    const handleSuggestionMenuChange = (
      evt:
        | React.MouseEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLDivElement>,
      nextValue: string
    ) => {
      setOpen(false)
      handleChange(evt, nextValue)
    }

    return (
      <div ref={containerRef} {...rest}>
        <BelowLeft
          inNode={portal.current || undefined}
          when={open}
          show={
            <SuggestionsMenu
              activeValue={innerValue}
              onChange={handleSuggestionMenuChange}
              suggestions={filteredSuggestions}
            />
          }
          target={target}
        >
          <TextInput
            appearance={appearance}
            disabled={disabled}
            error={error}
            icon={<CaretDownIcon />}
            iconAlign={TextInput.iconAligns.right}
            label={label}
            name={name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            placeholder={placeholder}
            ref={setInputRef}
            size={size}
            subLabel={subLabel}
            value={innerValue}
          />
        </BelowLeft>
      </div>
    )
  }
) as TypeaheadComponent

Typeahead.appearances = vars.appearances
Typeahead.sizes = vars.sizes

Typeahead.Suggestion = Suggestion

export const sizes = vars.sizes
export const appearances = vars.appearances

export default Typeahead
