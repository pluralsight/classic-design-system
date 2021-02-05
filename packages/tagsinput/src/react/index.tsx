import { useMultipleSelection } from 'downshift'
import { css } from 'glamor'
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
  useMemo
} from 'react'

import { CloseIcon } from '@pluralsight/ps-design-system-icon'
import Field from '@pluralsight/ps-design-system-field'
import Tag from '@pluralsight/ps-design-system-tag'
import { HTMLPropsFor, useUniqueId } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'

import { Option } from './types'
export { Option }

const styles = {
  tagsInput: () => css(stylesheet['.psds-tagsinput']),
  renderTag: () => css(stylesheet['.psds-tagsinput__render-tag']),

  inputContainer: () => css(stylesheet['.psds-tagsinput__input-container']),
  input: () => css(stylesheet['.psds-tagsinput__input']),

  pills: () => css(stylesheet['.psds-tagsinput__pills']),
  pill: () => css(stylesheet['.psds-tagsinput__pill'])
}

interface TagsInputProps
  extends Omit<
    ComponentProps<typeof Field>,
    'children' | 'label' | 'onChange' | 'subLabel'
  > {
  label: string | ReactElement<typeof Field.Label>
  onChange: (evt: SyntheticEvent | null, nextValue: Option[]) => void
  onSearchInputChange: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  searchInputValue: string
  subLabel?: string | ReactNode
  value: Option[]
}

interface TagsInputStatics {
  Label: typeof Field.Label
  SubLabel: typeof Field.SubLabel
}

type TagsInputComponent = React.FC<TagsInputProps> & TagsInputStatics

const TagsInput: TagsInputComponent = props => {
  const {
    disabled,
    label,
    onChange,
    onSearchInputChange,
    placeholder,
    searchInputValue,
    subLabel,
    value = [],
    ...rest
  } = props

  const inputId = useUniqueId('tagsinput__input-')

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

  const handleRemoveSelected = (evt: MouseEvent<unknown>, item: Option) => {
    evt.stopPropagation()
    removeSelectedItem(item)
  }

  const Label = useMemo(() => {
    if (isValidElement(label)) {
      return cloneElement<any>(label, { htmlFor: inputId })
    }

    return <Field.Label htmlFor={inputId}>{label}</Field.Label>
  }, [label, inputId])

  const SubLabel = useMemo(() => {
    if (isValidElement(subLabel)) return subLabel

    return <Field.SubLabel>{subLabel}</Field.SubLabel>
  }, [subLabel])

  return (
    <Field
      disabled={disabled}
      label={Label}
      renderTag={RenderTagNoPadding}
      size={Field.sizes.small}
      subLabel={SubLabel}
      {...styles.tagsInput()}
      {...rest}
    >
      <Pills>
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

TagsInput.Label = Field.Label
TagsInput.SubLabel = Field.SubLabel

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
