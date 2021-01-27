import { Meta, Story } from '@storybook/react/types-6-0'
import { CloseIcon } from '@pluralsight/ps-design-system-icon'
import Tag from '@pluralsight/ps-design-system-tag'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { useMultipleSelection } from 'downshift'
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

import { sizes } from '../../vars'
import { Option, periodicElements } from '../__fixtures__/options'
import Field from '..'

const GUTTER_SIZE = 4

interface TagsFieldProps extends ComponentProps<typeof Field> {
  options: Option[]
}

const TagsField: React.FC<TagsFieldProps> = props => {
  const { options, ...rest } = props

  const [filterTerm, setFilterTerm] = useState<string>('')
  const handleFilterTermChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    evt => {
      setFilterTerm(evt.target.value)
    },
    [setFilterTerm]
  )

  const initialSelectedItems = useMemo(() => [options[1].value], [options])
  const {
    addSelectedItem,
    getDropdownProps,
    getSelectedItemProps,
    removeSelectedItem,
    selectedItems
  } = useMultipleSelection({ initialSelectedItems })

  const handleAddSelected = useCallback(
    (evt: MouseEvent<unknown>, item: string) => {
      evt.stopPropagation()

      setFilterTerm('')
      addSelectedItem(item)
    },
    [addSelectedItem]
  )

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

  const filterResults = useMemo(() => {
    if (!filterTerm) return unselectedOptions

    return unselectedOptions.filter(option =>
      option.label.toLowerCase().includes(filterTerm)
    )
  }, [filterTerm, unselectedOptions])

  return (
    <>
      <Field renderTag={CustomFieldTag} size={sizes.small} {...rest}>
        <div
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
        >
          {selectedItems.map((selectedItem, index) => {
            const option = options.find(o => o.value === selectedItem)
            if (!option) return null

            return (
              <TagsFieldTag
                key={`selected-item-${index}`}
                onRequestRemove={e => handleRemoveSelected(e, selectedItem)}
                {...getSelectedItemProps({ selectedItem, index })}
              >
                {option.label}
              </TagsFieldTag>
            )
          })}

          <TagsFieldInput
            onChange={handleFilterTermChange}
            value={filterTerm}
            {...getDropdownProps()}
          />
        </div>
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

const CustomFieldTag = forwardRef<HTMLDivElement, HTMLPropsFor<'div'>>(
  (props, ref) => <div ref={ref} {...props} {...css({ padding: 0 })} />
)

interface TagsFieldTagProps extends HTMLPropsFor<'div'> {
  onRequestRemove: MouseEventHandler
}
const TagsFieldTag = forwardRef<HTMLDivElement, TagsFieldTagProps>(
  (props, ref) => {
    const { children, onRequestRemove, ...rest } = props

    return (
      <div
        ref={ref}
        {...rest}
        {...css({ margin: `calc(${GUTTER_SIZE}px / 2)` })}
      >
        <Tag
          isPressed
          icon={<CloseIcon onClick={onRequestRemove} />}
          size={Tag.sizes.small}
        >
          {children}
        </Tag>
      </div>
    )
  }
)

const TagsFieldInputContainer = forwardRef<HTMLDivElement, HTMLPropsFor<'div'>>(
  (props, ref) => (
    <div
      ref={ref}
      {...props}
      {...css({ margin: `calc(${GUTTER_SIZE}px / 2)` })}
    />
  )
)
interface TagsFieldInputProps extends ComponentProps<typeof Field.Input> {}
const TagsFieldInput = forwardRef<HTMLInputElement, TagsFieldInputProps>(
  (props, ref) => {
    return (
      <Field.Input
        renderContainer={TagsFieldInputContainer}
        ref={ref}
        type="text"
        {...props}
        {...css({ minWidth: 50 })}
      />
    )
  }
)

const ConstrainWidthDecorator = (Story: Story) => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <Story />
    </div>
  )
}

export default {
  title: 'Components/Field/TagsField',
  component: TagsField,
  decorators: [ConstrainWidthDecorator],
  args: {
    label: <Field.Label>Select an option</Field.Label>,
    options: periodicElements
  }
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
