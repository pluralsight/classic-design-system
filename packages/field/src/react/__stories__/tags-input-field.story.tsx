import { Meta, Story } from '@storybook/react/types-6-0'
import { useUniqueId } from '@pluralsight/ps-design-system-util'
import { useMultipleSelection } from 'downshift'
import { css } from 'glamor'
import React, {
  ChangeEventHandler,
  ComponentProps,
  MouseEvent,
  useMemo,
  useState
} from 'react'

import { sizes } from '../../vars'
import { Option, periodicElements } from '../__fixtures__/options'
import { ConstrainWidthDecorator, Pills } from './shared'

import Field from '..'

const GUTTER_SIZE = 4

interface TagsFieldProps extends ComponentProps<typeof Field> {
  options: Option[]
  placeholder?: string
}

const TagsField: React.FC<TagsFieldProps> = props => {
  const { disabled, options, placeholder, ...rest } = props

  const labelId = useUniqueId('tags-input__label-')
  const inputId = useUniqueId('tags-input__input-')

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

  const handleAddSelected = (evt: MouseEvent<unknown>, item: string) => {
    evt.stopPropagation()

    setFilterTerm('')
    addSelectedItem(item)
  }

  const handleRemoveSelected = (evt: MouseEvent<unknown>, item: string) => {
    evt.stopPropagation()
    removeSelectedItem(item)
  }

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
      <Field
        label={
          <Field.Label htmlFor={inputId} id={labelId}>
            Some label text
          </Field.Label>
        }
        renderTag={RenderTagNoPadding}
        size={sizes.small}
        {...rest}
      >
        <Pills>
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
            placeholder={placeholder}
            id={inputId}
            onChange={handleFilterTermChange}
            value={filterTerm}
            {...getDropdownProps()}
          />
        </Pills>
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
          {filterResults.map((option, index) => (
            <li key={`filter-result-${index}`}>
              <span>{option.label} </span>
              <button onClick={e => handleAddSelected(e, option.value)}>
                add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
const RenderTagNoPadding: React.FC = p => (
  <div {...p} {...css({ padding: 0 })} />
)

export default {
  title: 'Components/Field/TagsField',
  component: TagsField,
  decorators: [ConstrainWidthDecorator],
  args: { options: periodicElements }
} as Meta

const Template: Story<ComponentProps<typeof TagsField>> = args => {
  return <TagsField {...args} />
}

export const Basic = Template.bind({})

export const WithSuffix = Template.bind({})
WithSuffix.args = {
  suffix: (
    <div
      {...css({
        alignItems: 'center',
        display: 'flex',
        margin: GUTTER_SIZE,
        outline: '2px dashed pink',
        padding: 4
      })}
      onClick={e => {
        e.stopPropagation()
      }}
    >
      <p {...css({ fontSize: 10 })}>custom suffix</p>
    </div>
  )
}
