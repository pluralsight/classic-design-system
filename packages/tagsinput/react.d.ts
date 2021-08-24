import Field from '@pluralsight/ps-design-system-field'
import React from 'react'
import { Option } from './dist/esm/react/types'
export { Option }
interface TagsInputProps
  extends Omit<
    React.ComponentProps<typeof Field>,
    'children' | 'label' | 'onChange' | 'subLabel'
  > {
  label?: string | React.ReactElement<typeof Field.Label>
  onChange: (evt: React.SyntheticEvent | null, nextValue: Option[]) => void
  onSearchInputChange: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  renderInputTag?: React.ComponentProps<typeof Field.Input>['renderTag']
  searchInputValue: string
  subLabel?: string | React.ReactNode
  value: Option[]
}
interface TagsInputStatics {
  Label: typeof Field.Label
  SubLabel: typeof Field.SubLabel
}
declare type TagsInputComponent = React.FC<TagsInputProps> & TagsInputStatics
declare const TagsInput: TagsInputComponent
export default TagsInput
