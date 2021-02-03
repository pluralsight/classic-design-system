import { useCombobox, useMultipleSelection } from 'downshift'
import { compose, css } from 'glamor'
import React, {
  ChangeEventHandler,
  Children,
  ComponentProps,
  ReactElement,
  SyntheticEvent,
  isValidElement,
  useEffect,
  useState,
  useMemo
} from 'react'

import Field from '@pluralsight/ps-design-system-field'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'

import { FilterFn, OnStateChangeFn, Option, StateReducer } from './types'
import { arraysAreEqual, noop, simpleTextFilter, switchcase } from './utils'

const { stateChangeTypes } = useCombobox

const styles = {
  multiSelectField: () => compose(css(stylesheet['.psds-multi-select-field']))
}

interface MultiSelectFieldProps
  extends Omit<
    ComponentProps<typeof Field>,
    'children' | 'label' | 'onChange' | 'subLabel'
  > {
  label: string
  subLabel?: string
  filterFn?: FilterFn
  // loading?: boolean
  menu: ReactElement<typeof Item>[]
  onChange: (evt: SyntheticEvent, nextValue: string) => void
  placeholder?: string
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
    children,
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

  const [innerValue, setInnerValue] = useState(value)
  useEffect(
    function updateControlledValue() {
      if (arraysAreEqual<string>(value, innerValue)) return
      setInnerValue(value)
    },
    [innerValue, value]
  )

  const [searchTerm, setSearchTerm] = useState('')
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = evt => {
    setSearchTerm(evt.target.value)
  }

  const [options, initialSelectedItems] = useMemo(() => {
    const opts: Option[] = Children.toArray(menu).reduce<Option[]>(
      (acc, child) => {
        if (!isValidElement(child)) return acc

        const { children: label, value } = child.props
        return acc.concat([{ label, value }])
      },
      []
    )

    const initialItems: string[] = opts.map(o => o.value)

    return [opts, initialItems]
  }, [menu])

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems
  } = useMultipleSelection({ initialSelectedItems })

  const filteredItems = useMemo(() => {
    const results = filterFn(searchTerm, options)
    return results.map(o => o.value)
  }, [options, filterFn, searchTerm])

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps
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
    <Field
      disabled={disabled}
      label={<Field.Label {...getLabelProps()}>{label}</Field.Label>}
      {...styles.multiSelectField()}
      {...rest}
    >
      <Field.Input
        disabled={disabled}
        onChange={handleInputChange}
        placeholder={placeholder}
        value={searchTerm}
        {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
      />

      {/**/}
    </Field>
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
