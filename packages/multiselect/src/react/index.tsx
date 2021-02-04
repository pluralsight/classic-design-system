import { useCombobox, useMultipleSelection } from 'downshift'
import { css } from 'glamor'
import React, {
  ChangeEventHandler,
  Children,
  ComponentProps,
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  SyntheticEvent,
  forwardRef,
  isValidElement,
  useMemo,
  useState
} from 'react'

import { CaretDownIcon, CloseIcon } from '@pluralsight/ps-design-system-icon'
import Field from '@pluralsight/ps-design-system-field'
import Tag from '@pluralsight/ps-design-system-tag'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'

import { FilterFn, OnStateChangeFn, Option, StateReducer } from './types'
import { noop, simpleTextFilter, switchcase } from './utils'

const { stateChangeTypes } = useCombobox

const styles = {
  multiSelectField: () => css(stylesheet['.psds-multi-select']),
  renderTag: () => css(stylesheet['.psds-multi-select__render-tag']),
  caret: () => css(stylesheet['.psds-multi-select__caret']),

  inputContainer: () => css(stylesheet['.psds-multi-select__input-container']),
  input: () => css(stylesheet['.psds-multi-select__input']),

  pills: () => css(stylesheet['.psds-multi-select__pills']),
  pill: () => css(stylesheet['.psds-multi-select__pill'])
}

interface MultiSelectFieldProps
  extends Omit<
    ComponentProps<typeof Field>,
    'children' | 'label' | 'onChange' | 'subLabel'
  > {
  filterFn?: FilterFn
  label: string
  menu: ReactElement<typeof Item>[]
  onChange: (evt: SyntheticEvent | null, nextValue: string[]) => void
  placeholder?: string
  subLabel?: string
  value: string[]
}

interface MultiSelectFieldStatics {
  Item: typeof Item
  Items: typeof Items
}

type MultiSelectFieldComponent = React.FC<MultiSelectFieldProps> &
  MultiSelectFieldStatics

const MultiSelectField: MultiSelectFieldComponent = props => {
  const {
    disabled,
    filterFn = simpleTextFilter,
    label,
    menu,
    onChange,
    placeholder,
    subLabel,
    value = [],
    ...rest
  } = props

  const [searchTerm, setSearchTerm] = useState('')
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = evt => {
    setSearchTerm(evt.target.value)
  }

  const options = useMemo(() => {
    return Children.toArray(menu).reduce<Option[]>((acc, child) => {
      if (!isValidElement(child)) return acc

      const { children: label, value } = child.props
      return acc.concat([{ label, value }])
    }, [])
  }, [menu])

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

  const handleRemoveSelected = (evt: MouseEvent<unknown>, item: string) => {
    evt.stopPropagation()
    removeSelectedItem(item)
  }

  const unselectedOptions = useMemo(() => {
    return options.filter(o => !selectedItems.includes(o.value))
  }, [options, selectedItems])

  const filteredItems = useMemo(() => {
    const results = filterFn(searchTerm, unselectedOptions)
    return results.map(o => o.value)
  }, [unselectedOptions, filterFn, searchTerm])

  const {
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
    items: filteredItems,
    selectedItem: null,
    onStateChange: changes => {
      const updateSearchTerm: OnStateChangeFn = ({ inputValue = '' }) => {
        setSearchTerm(inputValue)
      }

      const selectItemAndResetSearch: OnStateChangeFn = ({ selectedItem }) => {
        setSearchTerm('')
        if (selectedItem) addSelectedItem(selectedItem)
      }

      const fn = switchcase<OnStateChangeFn>(
        {
          [stateChangeTypes.InputBlur]: selectItemAndResetSearch,
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

  return (
    <>
      <Field
        disabled={disabled}
        label={<Field.Label {...getLabelProps()}>{label}</Field.Label>}
        subLabel={subLabel && <Field.SubLabel>{subLabel}</Field.SubLabel>}
        renderTag={RenderTagNoPadding}
        size={Field.sizes.small}
        suffix={
          <div {...styles.caret()}>
            <CaretDownIcon />
          </div>
        }
        {...styles.multiSelectField()}
        {...rest}
      >
        <Pills {...getComboboxProps()}>
          {selectedItems.map((selectedItem, index) => {
            const option = options.find(o => o.value === selectedItem)
            if (!option) return null

            return (
              <Pill
                key={`selected-item-${index}`}
                onRequestRemove={e => handleRemoveSelected(e, selectedItem)}
                {...getSelectedItemProps({ selectedItem, index })}
              >
                {option.label}
              </Pill>
            )
          })}
          <PillAdjacentInput
            disabled={disabled}
            onChange={handleInputChange}
            placeholder={placeholder}
            value={searchTerm}
            {...getInputProps({
              ...getDropdownProps({ preventKeyAction: isOpen }),
              onFocus: () => {
                openMenu()
              }
            })}
          />
        </Pills>
      </Field>

      <div
        style={{
          border: '2px dashed pink',
          display: isOpen ? 'block' : 'none',
          margin: '20px 0',
          maxHeight: 200,
          overflow: 'scroll',
          padding: 20
        }}
      >
        <ul {...getMenuProps()}>
          {filteredItems.map((item, index) => {
            const option = options.find(o => item === o.value)
            if (!option) return null

            return (
              <li
                key={`menu-option-${index}`}
                {...getItemProps({ item, index })}
                {...css({
                  backgroundColor: highlightedIndex === index ? 'blue' : ''
                })}
              >
                <span>{option?.label} </span>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

interface ItemsProps extends HTMLPropsFor<'ul'> {}
const Items: React.FC<ItemsProps> = props => {
  return <ul {...props} />
}
Items.displayName = 'MultiSelectField.Items'
MultiSelectField.Items = Items

interface ItemProps extends HTMLPropsFor<'li'> {
  children: string
  value: string
}
const Item: React.FC<ItemProps> = props => {
  const { children, ...rest } = props
  return <li {...rest}>{children}</li>
}
Item.displayName = 'MultiSelectField.Item'
MultiSelectField.Item = Item

export default MultiSelectField

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

const RenderTagNoPadding: React.FC = p => {
  return <div {...p} {...styles.renderTag()} />
}
