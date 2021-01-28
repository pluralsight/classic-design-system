import { Meta, Story } from '@storybook/react/types-6-0'
import Button from '@pluralsight/ps-design-system-button'
import { layout } from '@pluralsight/ps-design-system-core'
import { CaretDownIcon, CloseIcon } from '@pluralsight/ps-design-system-icon'
import Tag from '@pluralsight/ps-design-system-tag'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { useCombobox, useMultipleSelection } from 'downshift'
import { css } from 'glamor'
import React, {
  ChangeEventHandler,
  ComponentProps,
  MouseEvent,
  MouseEventHandler,
  forwardRef,
  useCallback,
  useMemo,
  useState
} from 'react'

import { Option, periodicElements } from '../__fixtures__/options'
import Field from '..'

const GUTTER_SIZE = 4

interface MultiSelectFieldProps extends ComponentProps<typeof Field> {
  options: Option[]
  placeholder?: string
}
const MultiSelectField: React.FC<MultiSelectFieldProps> = props => {
  const { options, disabled, placeholder, ...rest } = props

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

  const handleRemoveSelected = useCallback(
    (evt: MouseEvent<unknown>, item: string) => {
      evt.stopPropagation()
      removeSelectedItem(item)
    },
    [removeSelectedItem]
  )

  const unselectedOptions = useMemo(() => {
    return options.filter(option => !selectedItems.includes(option.value))
  }, [options, selectedItems])

  const filteredOptions = useMemo(() => {
    if (!filterTerm) return unselectedOptions

    return unselectedOptions.filter(option =>
      option.label.toLowerCase().includes(filterTerm)
    )
  }, [filterTerm, unselectedOptions])

  const filteredItems = useMemo(() => filteredOptions.map(o => o.value), [
    filteredOptions
  ])

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
        renderTag={CustomRenderTag}
        size={Field.sizes.small}
        suffix={
          <div
            {...css({
              alignItems: 'center',
              display: 'flex',
              margin: layout.spacingSmall
            })}
            onClick={e => {
              e.stopPropagation()
            }}
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
        <TagsContainer {...getComboboxProps()}>
          {selectedItems.map((selectedItem, index) => {
            const option = options.find(o => o.value === selectedItem)
            if (!option) return null

            return (
              <CustomTag
                key={`selected-item-${index}`}
                onRequestRemove={e => handleRemoveSelected(e, selectedItem)}
                {...getSelectedItemProps({ selectedItem, index })}
              >
                {option.label}
              </CustomTag>
            )
          })}

          <CustomInput
            disabled={disabled}
            onChange={handleFilterTermChange}
            placeholder={placeholder}
            value={filterTerm}
            {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
          />
        </TagsContainer>
      </Field>

      {isOpen && (
        <div
          style={{
            border: '2px dashed pink',
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
      )}
    </>
  )
}

const CustomInputContainer = forwardRef<HTMLDivElement, HTMLPropsFor<'div'>>(
  (props, ref) => (
    <div
      ref={ref}
      {...props}
      {...css({ margin: `calc(${GUTTER_SIZE}px / 2)` })}
    />
  )
)
interface CustomInputProps extends ComponentProps<typeof Field.Input> {}
const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (props, ref) => {
    return (
      <Field.Input
        renderContainer={CustomInputContainer}
        ref={ref}
        type="text"
        {...props}
        {...css({ minWidth: 50 })}
      />
    )
  }
)
const CustomRenderTag = forwardRef<HTMLDivElement, HTMLPropsFor<'div'>>(
  (props, ref) => <div ref={ref} {...props} {...css({ padding: 0 })} />
)

interface CustomTagProps extends HTMLPropsFor<'div'> {
  onRequestRemove: MouseEventHandler
}
const CustomTag = forwardRef<HTMLDivElement, CustomTagProps>((props, ref) => {
  const { children, onRequestRemove, ...rest } = props

  return (
    <div ref={ref} {...rest} {...css({ margin: `calc(${GUTTER_SIZE}px / 2)` })}>
      {/*
          NOTE: Using isPressed prop to get blue background...
                Tag should have additional variants if this is something we want
                to officially support
        */}
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

const TagsContainer: React.FC<HTMLPropsFor<'div'>> = props => (
  <div
    {...props}
    {...css({
      alignItems: 'center',
      display: 'flex',
      flex: 1,
      flexWrap: 'wrap',
      maxHeight: 75,
      overflowY: 'scroll',
      padding: GUTTER_SIZE,
      width: '100%'
    })}
  />
)

const ConstrainWidthDecorator = (Story: Story) => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <Story />
    </div>
  )
}

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
