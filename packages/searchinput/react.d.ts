import React from 'react'
import { TextInputProps } from '@pluralsight/ps-design-system-textinput'
import '../css/index.css'
export interface SearchInputProps extends TextInputProps {
  loading?: boolean
  onClear?: (evt?: React.MouseEvent) => void
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void
}
declare const SearchInput: React.ForwardRefExoticComponent<SearchInputProps>
export default SearchInput
