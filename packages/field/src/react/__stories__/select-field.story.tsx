import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'

import { Meta, Story } from '@storybook/react/types-6-0'
import { useSelect } from 'downshift'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import { Option, periodicElements } from '../__fixtures__/options'
import Field from '../index'

const glamor = glamorDefault || glamorExports

interface SelectFieldProps extends React.ComponentProps<typeof Field> {
  options: Option[]
  placeholder?: string
}
const SelectField: React.FC<SelectFieldProps> = props => {
  const { placeholder, options, ...rest } = props
  const items = React.useMemo(() => options.map(o => o.value), [options])

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({ items })

  const selectedOption = React.useMemo(() => {
    return options.find(o => selectedItem === o.value)
  }, [options, selectedItem])

  const CustomFieldTag = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >((innerProps, innerRef) => {
    return (
      <div ref={innerRef} {...innerProps}>
        <button
          {...getToggleButtonProps()}
          {...glamor.css({
            all: 'unset',
            cursor: 'pointer',
            alignItems: 'center',
            display: 'flex',
            flex: 1,
            width: '100%'
          })}
        >
          {innerProps.children}
        </button>
      </div>
    )
  })

  return (
    <>
      <Field
        renderTag={CustomFieldTag}
        label={
          <Field.Label {...getLabelProps()}>Choose an element</Field.Label>
        }
        subLabel={
          <Field.SubLabel>Area for additional information</Field.SubLabel>
        }
        suffix={<CaretDownIcon />}
        {...rest}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
      </Field>

      {/* TODO: use ActionMenu and Position */}
      <div
        style={{
          border: '2px dashed pink',
          display: isOpen ? 'block' : 'none',
          margin: '20px 0',
          height: 200,
          overflow: 'scroll',
          padding: 20
        }}
      >
        <ul {...getMenuProps()}>
          {items.map((item, index) => {
            const option = options.find(o => item === o.value)

            return (
              <li
                key={`menu-option-${index}`}
                {...getItemProps({ item, index })}
                {...glamor.css({
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

export default {
  title: 'Components/Field/SelectField',
  component: SelectField,
  args: { placeholder: 'Do something', options: periodicElements }
} as Meta

const Template: Story<React.ComponentProps<typeof SelectField>> = args => {
  return <SelectField {...args} />
}

export const Basic = Template.bind({})
