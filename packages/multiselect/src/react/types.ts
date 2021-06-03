import {
  UseComboboxState,
  UseComboboxStateChange,
  UseComboboxStateChangeOptions
} from 'downshift'

export interface MultiSelectOption {
  label: string
  value: string
}

export type FilterFn = (
  term: string,
  options: MultiSelectOption[]
) => MultiSelectOption[]

export type OnStateChangeFn<T = any> = (
  changes: UseComboboxStateChange<T>
) => void

export type StateReducer<T = any> = (
  state: UseComboboxState<T>,
  actionAndChanges: UseComboboxStateChangeOptions<T>
) => Partial<UseComboboxState<T>>
