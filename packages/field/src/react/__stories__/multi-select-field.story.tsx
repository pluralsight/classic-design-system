import { Meta, Story } from '@storybook/react/types-6-0'
import Button from '@pluralsight/ps-design-system-button'
import { layout } from '@pluralsight/ps-design-system-core'
import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import { useCombobox, useMultipleSelection } from 'downshift'
import { css } from 'glamor'
import React, {
  ChangeEventHandler,
  ComponentProps,
  MouseEvent,
  useCallback,
  useMemo,
  useState
} from 'react'

import { Option, periodicElements } from '../__fixtures__/options'
import { ConstrainWidthDecorator, Pills } from './shared'

import Field from '..'

interface MultiSelectFieldProps extends ComponentProps<typeof Field> {
  options: Option[]
  placeholder?: string
}
const MultiSelectField: React.FC<MultiSelectFieldProps> = props => {
  const { disabled, options, placeholder, ...rest } = props

  const [filterTerm, setFilterTerm] = useState<string>('')
  const handleFilterTermChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    evt => {
      setFilterTerm(evt.target.value)
    },
    [setFilterTerm]
  )

  const initialSelectedItems = useMemo(() => {
    const initialOptions = options.slice(1, 3)
    return initialOptions.map(o => o.value)
  }, [options])

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems
  } = useMultipleSelection({ initialSelectedItems })

  const handleRemoveSelected = (evt: MouseEvent<unknown>, item: string) => {
    evt.stopPropagation()
    removeSelectedItem(item)
  }

  const filteredItems = useMemo(() => {
    const unselected = options.filter(
      option => !selectedItems.includes(option.value)
    )

    if (!filterTerm) return unselected.map(o => o.value)

    return unselected
      .filter(o => o.label.toLowerCase().includes(filterTerm))
      .map(o => o.value)
  }, [options, filterTerm, selectedItems])

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
    inputValue: filterTerm,
    items: filteredItems,
    onStateChange: ({ inputValue = '', type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setFilterTerm(inputValue)
          break
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          setFilterTerm('')
          if (selectedItem) addSelectedItem(selectedItem)
          break
        default:
          break
      }
    },
    stateReducer: (_state, { changes, type }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return { ...changes, isOpen: true }
        default:
          return changes
      }
    }
  })

  return (
    <>
      <Field
        disabled={disabled}
        label={
          <Field.Label {...getLabelProps()}>Choose an element</Field.Label>
        }
        renderTag={RenderTagNoPadding}
        size={Field.sizes.small}
        suffix={
          <div
            {...css({
              alignItems: 'center',
              display: 'flex',
              margin: layout.spacingSmall
            })}
          >
            <Button
              appearance={Button.appearances.flat}
              aria-label="toggle menu"
              disabled={disabled}
              icon={<CaretDownIcon />}
              size={Button.sizes.xSmall}
              {...getToggleButtonProps()}
            />
          </div>
        }
        {...rest}
      >
        <Pills {...getComboboxProps()}>
          {selectedItems.map((selectedItem, index) => {
            const option = options.find(o => o.value === selectedItem)
            if (!option) return null

            return (
              <Pills.Pill
                key={`selected-item-${index}`}
                onRequestRemove={e => handleRemoveSelected(e, selectedItem)}
                {...getSelectedItemProps({ selectedItem, index })}
              >
                {option.label}
              </Pills.Pill>
            )
          })}

          <Pills.Input
            disabled={disabled}
            onChange={handleFilterTermChange}
            placeholder={placeholder}
            value={filterTerm}
            {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
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

const RenderTagNoPadding: React.FC = p => (
  <div {...p} {...css({ padding: 0 })} />
)

export default {
  title: 'Components/Field/MultiSelectField',
  component: MultiSelectField,
  decorators: [ConstrainWidthDecorator],
  args: { placeholder: 'Do something', options: periodicElements }
} as Meta

const Template: Story<ComponentProps<typeof MultiSelectField>> = args => {
  return <MultiSelectField {...args} />
}

export const Basic = Template.bind({})
