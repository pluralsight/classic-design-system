import { useMultipleSelection } from 'downshift'
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
  useMemo
} from 'react'

import { CloseIcon } from '@pluralsight/ps-design-system-icon'
import Field from '@pluralsight/ps-design-system-field'
import Tag from '@pluralsight/ps-design-system-tag'
import { HTMLPropsFor, useUniqueId } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'

import { Option } from './types'

const styles = {
  tagsInput: () => css(stylesheet['.psds-tagsinput']),
  renderTag: () => css(stylesheet['.psds-tagsinput__render-tag']),

  inputContainer: () => css(stylesheet['.psds-tagsinput__input-container']),
  input: () => css(stylesheet['.psds-tagsinput__input']),

  pills: () => css(stylesheet['.psds-tagsinput__pills']),
  pill: () => css(stylesheet['.psds-tagsinput__pill'])
}

interface MultiSelectFieldProps
  extends Omit<
    ComponentProps<typeof Field>,
    'children' | 'label' | 'onChange' | 'subLabel'
  > {
  label: string
  menu: ReactElement<typeof Item>[]
  onChange: (evt: SyntheticEvent | null, nextValue: string[]) => void
  onSearchInputChange: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  searchInputValue: string
  subLabel?: string
  value: string[]
}

interface MultiSelectFieldStatics {
  Item: typeof Item
  Items: typeof Items
}

type MultiSelectFieldComponent = React.FC<MultiSelectFieldProps> &
  MultiSelectFieldStatics

const TagsInput: MultiSelectFieldComponent = props => {
  const {
    disabled,
    label,
    menu,
    onChange,
    onSearchInputChange,
    placeholder,
    searchInputValue,
    subLabel,
    value = [],
    ...rest
  } = props

  const labelId = useUniqueId('tagsinput__label-')
  const inputId = useUniqueId('tagsinput__input-')

  const options = useMemo(() => {
    return Children.toArray(menu).reduce<Option[]>((acc, child) => {
      if (!isValidElement(child)) return acc

      const { children: label, value } = child.props
      return acc.concat([{ label, value }])
    }, [])
  }, [menu])

  const {
    getDropdownProps,
    getSelectedItemProps,
    removeSelectedItem,
    selectedItems
  } = useMultipleSelection({
    onSelectedItemsChange: changes => {
      onChange(null, changes.selectedItems ?? [])
    },
    selectedItems: value
  })

  const handleRemoveSelected = (evt: MouseEvent<unknown>, item: string) => {
    evt.stopPropagation()
    removeSelectedItem(item)
  }

  return (
    <Field
      disabled={disabled}
      label={
        <Field.Label htmlFor={inputId} id={labelId}>
          {label}
        </Field.Label>
      }
      subLabel={subLabel && <Field.SubLabel>{subLabel}</Field.SubLabel>}
      renderTag={RenderTagNoPadding}
      size={Field.sizes.small}
      {...styles.tagsInput()}
      {...rest}
    >
      <Pills>
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
          id={inputId}
          onChange={onSearchInputChange}
          placeholder={placeholder}
          value={searchInputValue}
          {...getDropdownProps()}
        />
      </Pills>
    </Field>
  )
}

interface ItemsProps extends HTMLPropsFor<'ul'> {}
const Items: React.FC<ItemsProps> = props => {
  return <ul {...props} />
}
Items.displayName = 'TagsInput.Items'
TagsInput.Items = Items

interface ItemProps extends HTMLPropsFor<'li'> {
  children: string
  value: string
}
const Item: React.FC<ItemProps> = props => {
  const { children, ...rest } = props
  return <li {...rest}>{children}</li>
}
Item.displayName = 'TagsInput.Item'
TagsInput.Item = Item

export default TagsInput

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
