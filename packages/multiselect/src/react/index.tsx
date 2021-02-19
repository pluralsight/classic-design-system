import { useCombobox, useMultipleSelection } from 'downshift'
import { compose, css } from 'glamor'
import React, {
  ChangeEventHandler,
  ComponentProps,
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import { CaretDownIcon, CloseIcon } from '@pluralsight/ps-design-system-icon'
import Field from '@pluralsight/ps-design-system-field'
import { BelowLeft } from '@pluralsight/ps-design-system-position'
import Tag from '@pluralsight/ps-design-system-tag'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'

import { Menu } from './menu'
import { FilterFn, OnStateChangeFn, Option, StateReducer } from './types'
import { noop, simpleTextFilter, switchcase } from './utils'
import { useKeybinding } from './use-keybinding'

export { Option }

const { stateChangeTypes } = useCombobox

const styles = {
  multiSelect: (opts: { disabled?: boolean }) =>
    compose(
      css(stylesheet['.psds-multi-select']),
      opts.disabled && css(stylesheet['.psds-multi-select--disabled'])
    ),

  prefix: () => css(stylesheet['.psds-multi-select__prefix']),
  caret: () => css(stylesheet['.psds-multi-select__caret']),

  menu: () => css(stylesheet['.psds-multi-select__menu']),

  inputContainer: () => css(stylesheet['.psds-multi-select__input-container']),
  input: () => css(stylesheet['.psds-multi-select__input']),

  pills: () => css(stylesheet['.psds-multi-select__pills']),
  pill: () => css(stylesheet['.psds-multi-select__pill'])
}

interface MultiSelectFieldProps
  extends Omit<
    ComponentProps<typeof Field>,
    'children' | 'label' | 'onChange' | 'subLabel' | 'suffix'
  > {
  filterFn?: FilterFn
  label?: string | ReactElement<typeof Field.Label>
  onChange: (evt: SyntheticEvent | null, nextValue: Option[]) => void
  options: Option[]
  placeholder?: string
  subLabel?: string | ReactNode
  value: Option[]
}

interface MultiSelectFieldStatics {
  Label: typeof Field.Label
  SubLabel: typeof Field.SubLabel
}

type MultiSelectFieldComponent = React.FC<MultiSelectFieldProps> &
  MultiSelectFieldStatics

const MultiSelect: MultiSelectFieldComponent = props => {
  const {
    disabled,
    filterFn = simpleTextFilter,
    label,
    onChange,
    options,
    placeholder,
    prefix,
    subLabel,
    value = [],
    ...rest
  } = props

  const [searchTerm, setSearchTerm] = useState('')
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = evt => {
    setSearchTerm(evt.target.value)
  }

  const {
    addSelectedItem,
    getDropdownProps,
    getSelectedItemProps,
    removeSelectedItem,
    selectedItems
  } = useMultipleSelection({
    onSelectedItemsChange: changes => {
      const { selectedItems: nextValue = [] } = changes
      onChange(null, nextValue)
    },
    selectedItems: value
  })

  const handleRemoveSelected = (evt: MouseEvent<unknown>, item: Option) => {
    evt.stopPropagation()
    removeSelectedItem(item)
  }

  const unselectedOptions = useMemo(() => {
    return options.filter(option => value.indexOf(option) < 0)
  }, [options, value])

  const filteredOptions = useMemo(() => {
    return filterFn(searchTerm, unselectedOptions)
  }, [unselectedOptions, filterFn, searchTerm])

  const {
    closeMenu,
    getComboboxProps,
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    isOpen,
    openMenu
  } = useCombobox({
    defaultHighlightedIndex: 0,
    inputValue: searchTerm,
    items: filteredOptions,
    selectedItem: null,
    onStateChange: changes => {
      const updateSearchTerm: OnStateChangeFn = ({ inputValue = '' }) => {
        setSearchTerm(inputValue)
      }

      const resetSearch: OnStateChangeFn = () => {
        setSearchTerm('')
      }

      const selectItemAndResetSearch: OnStateChangeFn = ({ selectedItem }) => {
        setSearchTerm('')
        if (selectedItem) addSelectedItem(selectedItem)
      }

      const fn = switchcase<OnStateChangeFn>(
        {
          [stateChangeTypes.InputBlur]: resetSearch,
          [stateChangeTypes.InputChange]: updateSearchTerm,
          [stateChangeTypes.InputKeyDownEnter]: selectItemAndResetSearch,
          [stateChangeTypes.ItemClick]: selectItemAndResetSearch
        },
        noop,
        changes.type
      )

      return fn(changes)
    },
    stateReducer: (state, action) => {
      const fn = switchcase<StateReducer>(
        {
          [stateChangeTypes.ItemClick]: (_, { changes }) => ({
            ...changes,
            isOpen: true
          }),
          [stateChangeTypes.InputKeyDownEnter]: (_, { changes }) => ({
            ...changes,
            isOpen: true
          })
        },
        (_, { changes }) => changes,
        action.type
      )

      return fn(state, action)
    }
  })

  const positionTarget = useRef<HTMLDivElement>(null)
  const RenderTag = useCallback(p => <div ref={positionTarget} {...p} />, [
    positionTarget
  ])

  const Label = useMemo(() => {
    if (isValidElement(label)) {
      return cloneElement<any>(label, { ...getLabelProps() })
    }

    return <Field.Label {...getLabelProps()}>{label}</Field.Label>
  }, [label, getLabelProps])

  const SubLabel = useMemo(() => {
    if (isValidElement(subLabel)) return subLabel

    return <Field.SubLabel>{subLabel}</Field.SubLabel>
  }, [subLabel])

  const inputProps = getInputProps(
    getDropdownProps({
      onFocus: () => {
        if (!isOpen) openMenu()
      }
    })
  )

  useKeybinding(
    ['alt', 'arrowdown'],
    () => {
      if (!isOpen) return

      window.requestAnimationFrame(closeMenu)
    },
    inputProps.ref.current
  )

  useLayoutEffect(
    function keepInputInView() {
      if (!isOpen) return

      const el = document.getElementById(inputProps.id)
      if (!el?.scrollIntoView) return

      el.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      })
    },
    [isOpen, inputProps.id, selectedItems]
  )

  return (
    <>
      <Field
        disabled={disabled}
        label={Label}
        subLabel={SubLabel}
        renderTag={RenderTag}
        size={Field.sizes.small}
        prefix={prefix && <Prefix>{prefix}</Prefix>}
        suffix={<CaretSuffix />}
        {...styles.multiSelect({ disabled })}
        {...rest}
      >
        <div>
          <Pills {...getComboboxProps()}>
            {selectedItems.map((option, index) => (
              <Pill
                key={`selected-item-${index}`}
                onRequestRemove={e => handleRemoveSelected(e, option)}
                {...getSelectedItemProps({ selectedItem: option, index })}
              >
                {option.label}
              </Pill>
            ))}

            <PillAdjacentInput
              {...inputProps}
              disabled={disabled}
              onChange={handleInputChange}
              placeholder={placeholder}
              value={searchTerm}
            />
          </Pills>

          <BelowLeft
            target={positionTarget}
            show={
              <div>
                <Menu {...getMenuProps()} open={isOpen}>
                  {filteredOptions.length < 1 && (
                    <Menu.Item
                      highlighted={false}
                      key={`menu-option-empty-label`}
                    >
                      No results found
                    </Menu.Item>
                  )}

                  {filteredOptions.map((option, index) => (
                    <Menu.Item
                      key={`menu-option-${index}`}
                      highlighted={highlightedIndex === index}
                      {...getItemProps({ item: option, index })}
                    >
                      {option?.label}
                    </Menu.Item>
                  ))}
                </Menu>
              </div>
            }
          >
            <div />
          </BelowLeft>
        </div>
      </Field>
    </>
  )
}

MultiSelect.Label = Field.Label
MultiSelect.SubLabel = Field.SubLabel

export default MultiSelect

const Pills = forwardRef<HTMLDivElement, HTMLPropsFor<'div'>>((props, ref) => {
  const { children, ...rest } = props

  return (
    <div ref={ref} {...rest} {...styles.pills()}>
      {children}
    </div>
  )
})

interface PillProps extends ComponentProps<typeof Tag> {
  onRequestRemove: MouseEventHandler
}
const Pill = forwardRef<HTMLDivElement, PillProps>((props, ref) => {
  const { children, onRequestRemove, ...rest } = props

  return (
    <div ref={ref} {...rest} {...styles.pill()}>
      <Tag
        icon={<CloseIcon onClick={onRequestRemove} />}
        isPressed
        size={Tag.sizes.small}
      >
        {children}
      </Tag>
    </div>
  )
})

const PillAdjacentInputContainer = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} {...props} {...styles.inputContainer()} />
})

const PillAdjacentInput = forwardRef<
  HTMLInputElement,
  ComponentProps<typeof Field.Input>
>((props, ref) => {
  return (
    <Field.Input
      ref={ref}
      renderContainer={PillAdjacentInputContainer}
      type="text"
      {...props}
      {...styles.input()}
    />
  )
})

const Prefix: React.FC = props => <div {...props} {...styles.prefix()} />

const CaretSuffix: React.FC = props => (
  <div {...props} {...styles.caret()}>
    <CaretDownIcon />
  </div>
)
