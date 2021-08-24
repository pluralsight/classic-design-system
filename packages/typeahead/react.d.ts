import React from 'react'
import Field from '@pluralsight/ps-design-system-field'
export declare type TypeaheadFilterFunction = (
  options: {
    label: React.ReactText
    value: React.ReactText
  }[],
  inputValue?: string | undefined
) => {
  label: React.ReactText
  value: React.ReactText
}[]
interface TypeaheadFieldProps
  extends Omit<
    React.ComponentProps<typeof Field>,
    'children' | 'label' | 'onChange' | 'subLabel' | 'suffix'
  > {
  label?: string | React.ReactElement<typeof Field.Label>
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | null,
    selectedItem?: {
      label: React.ReactText
      value?: React.ReactText
    }
  ) => void
  options: {
    label: React.ReactText
    value: React.ReactText
  }[]
  placeholder?: string
  renderInputTag?: React.ComponentProps<typeof Field.Input>['renderTag']
  subLabel?: string | React.ReactNode
  value?: string
  renderOption?: React.FC
  filterFunction?: TypeaheadFilterFunction
}
interface TypeaheadFieldStatics {
  Label: typeof Field.Label
  SubLabel: typeof Field.SubLabel
  appearances: typeof Field.appearances
  sizes: typeof Field.sizes
}
declare const Typeahead: React.ForwardRefExoticComponent<
  TypeaheadFieldProps & React.RefAttributes<HTMLInputElement>
> &
  TypeaheadFieldStatics
export default Typeahead
