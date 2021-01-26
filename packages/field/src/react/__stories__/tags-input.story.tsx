import { Meta, Story } from '@storybook/react/types-6-0'
import { CloseIcon } from '@pluralsight/ps-design-system-icon'
import Tag from '@pluralsight/ps-design-system-tag'
import { useMultipleSelection } from 'downshift'
import React, {
  ComponentProps,
  ChangeEventHandler,
  MouseEventHandler,
  useMemo,
  useState
} from 'react'

import Field from '..'

interface TagsInputProps extends ComponentProps<typeof Field> {
  options: Option[]
}

interface Option {
  label: string
  value: string
}

const TagsInput: React.FC<TagsInputProps> = props => {
  const { options, ...rest } = props
  const [filterTerm, setFilterTerm] = useState<string>('')
  const handleFilterTermChange: ChangeEventHandler<HTMLInputElement> = evt => {
    setFilterTerm(evt.target.value)
  }

  const initialSelectedItems = useMemo(() => [options[1].value], [options])
  const {
    addSelectedItem,
    getDropdownProps,
    getSelectedItemProps,
    removeSelectedItem,
    selectedItems
  } = useMultipleSelection({ initialSelectedItems })

  const unselectedOptions = useMemo(() => {
    return options.filter(option => !selectedItems.includes(option.value))
  }, [options, selectedItems])

  const filterResults = useMemo(() => {
    if (!filterTerm) return unselectedOptions

    return unselectedOptions.filter(option =>
      option.label.toLowerCase().includes(filterTerm)
    )
  }, [filterTerm, unselectedOptions])

  return (
    <>
      <Field {...rest}>
        {selectedItems.map((selectedItem, index) => {
          const option = options.find(o => o.value === selectedItem)
          if (!option) return null

          const handleRemove: MouseEventHandler = evt => {
            evt.stopPropagation()
            removeSelectedItem(selectedItem)
          }

          return (
            <Tag
              icon={<CloseIcon onClick={handleRemove} />}
              key={`selected-item-${index}`}
              size={Tag.sizes.small}
              {...getSelectedItemProps({ selectedItem, index })}
            >
              {option.label}
            </Tag>
          )
        })}

        <input
          onChange={handleFilterTermChange}
          type="text"
          value={filterTerm}
          {...getDropdownProps()}
        />
      </Field>

      <div
        style={{
          border: '2px dashed pink',
          margin: '20px 0',
          maxHeight: 200,
          overflow: 'scroll',
          padding: 20
        }}
      >
        <ul>
          {filterResults.map((option, index) => {
            const handleAdd: MouseEventHandler = evt => {
              evt.stopPropagation()
              addSelectedItem(option.value)
            }

            return (
              <li key={`filter-result-${index}`}>
                <span>{option.label} </span>
                <button onClick={handleAdd}>add</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default {
  title: 'Components/Field/with downshift/TagsInput',
  component: TagsInput,
  args: {
    options: [
      { label: 'Hydrogen', value: 'H' },
      { label: 'Helium', value: 'He' },
      { label: 'Lithium', value: 'Li' },
      { label: 'Beryllium', value: 'Be' },
      { label: 'Boron', value: 'B' },
      { label: 'Carbon', value: 'C' },
      { label: 'Nitrogren', value: 'N' },
      { label: 'Oxygen', value: 'O' }
    ],
    label: <Field.Label>Select an option</Field.Label>,
    subLabel: <Field.SubLabel>some hint text</Field.SubLabel>
  }
} as Meta

const Template: Story<ComponentProps<typeof TagsInput>> = args => {
  return <TagsInput {...args} />
}

export const Basic = Template.bind({})
