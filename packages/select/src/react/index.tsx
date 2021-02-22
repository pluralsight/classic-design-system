import { useSelect } from 'downshift'
import { compose, css } from 'glamor'
import React, {
  ComponentProps,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useMemo,
  useRef
} from 'react'

import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import Field from '@pluralsight/ps-design-system-field'
import { BelowLeft } from '@pluralsight/ps-design-system-position'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'

import { Menu } from './menu'

export interface Option {
  description?: string
  label: string
  value: string
}

const styles = {
  select: (opts: { disabled?: boolean }) =>
    compose(
      css(stylesheet['.psds-select']),
      opts.disabled && css(stylesheet['.psds-select--disabled'])
    ),
  button: () => css(stylesheet['.psds-select__button']),
  value: () => css(stylesheet['.psds-select__value']),

  prefix: () => css(stylesheet['.psds-select__prefix']),
  caret: () => css(stylesheet['.psds-select__caret']),

  menu: () => css(stylesheet['.psds-select__menu'])
}

interface SelectProps
  extends Omit<
    ComponentProps<typeof Field>,
    'children' | 'label' | 'onChange' | 'subLabel' | 'suffix'
  > {
  label?: string | ReactElement<typeof Field.Label>
  onChange: (evt: SyntheticEvent | null, nextValue?: Option | null) => void
  options: Option[]
  position?: typeof BelowLeft
  placeholder?: string
  renderOption?: typeof defaultRenderOption
  subLabel?: string | ReactNode
  value?: Option | null
}

interface SelectStatics {
  Label: typeof Field.Label
  SubLabel: typeof Field.SubLabel
}

type SelectComponent = React.FC<SelectProps> & SelectStatics

const Select: SelectComponent = props => {
  const {
    disabled,
    label,
    onChange,
    options,
    placeholder = 'Select...',
    prefix,
    position = BelowLeft,
    renderOption = defaultRenderOption,
    subLabel,
    value,
    ...rest
  } = props

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({
    onSelectedItemChange: changes => {
      const { selectedItem: nextValue } = changes
      onChange(null, nextValue)
    },
    items: options,
    selectedItem: value
  })

  const positionTarget = useRef<HTMLDivElement>(null)
  const RenderTag = useCallback(
    p => (
      <div ref={positionTarget} {...p}>
        <button {...getToggleButtonProps()} {...styles.button()}>
          {p.children}
        </button>
      </div>
    ),
    [getToggleButtonProps, positionTarget]
  )

  const Label = useMemo(() => {
    if (isValidElement(label)) {
      return cloneElement<any>(label, { ...getLabelProps() })
    }

    return <Field.Label {...getLabelProps()}>{label}</Field.Label>
  }, [label, getLabelProps])

  const SubLabel = useMemo(() => {
    if (isValidElement(subLabel)) return subLabel

    return <Field.SubLabel>{subLabel}</Field.SubLabel>
  }, [subLabel])

  const Position = useMemo(() => position, [position])

  const RenderOption = useMemo(() => renderOption, [renderOption])

  return (
    <>
      <Field
        disabled={disabled}
        label={Label}
        subLabel={SubLabel}
        renderTag={RenderTag}
        size={Field.sizes.small}
        prefix={prefix && <Prefix>{prefix}</Prefix>}
        suffix={<CaretSuffix />}
        {...styles.select({ disabled })}
        {...rest}
      >
        <Value item={selectedItem} placeholder={placeholder} />
      </Field>

      <div>
        <Position
          target={positionTarget}
          show={
            <div>
              <Menu {...getMenuProps()} open={isOpen}>
                {options.map((option, index) => (
                  <RenderOption
                    key={`menu-option-${index}`}
                    option={option}
                    highlighted={highlightedIndex === index}
                    selected={selectedItem === option}
                    {...getItemProps({ item: option, index })}
                  />
                ))}
              </Menu>
            </div>
          }
        >
          <div />
        </Position>
      </div>
    </>
  )
}

const defaultRenderOption = forwardRef<
  HTMLLIElement,
  {
    highlighted: boolean
    selected: boolean
    option: Option
  }
>((props, ref) => {
  const {
    highlighted,
    option,
    // eslint-disable-next-line
    selected,
    ...rest
  } = props

  return (
    <Menu.Item highlighted={highlighted} ref={ref} {...rest}>
      <Menu.ItemLabel>{option.label}</Menu.ItemLabel>

      {option.description && (
        <Menu.ItemDesc>{option.description}</Menu.ItemDesc>
      )}
    </Menu.Item>
  )
})

Select.Label = Field.Label
Select.SubLabel = Field.SubLabel

export default Select

interface ValueProps extends HTMLPropsFor<'span'> {
  item?: Option | null
  placeholder?: string
}
const Value: React.FC<ValueProps> = props => {
  const { item, placeholder = 'Select...', ...rest } = props

  return (
    <span {...rest} {...styles.value()}>
      {item ? item.label : placeholder}
    </span>
  )
}
const Prefix: React.FC = props => <div {...props} {...styles.prefix()} />

const CaretSuffix: React.FC = props => (
  <div {...props} {...styles.caret()}>
    <CaretDownIcon />
  </div>
)
