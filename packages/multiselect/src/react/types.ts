import {
  UseComboboxState,
  UseComboboxStateChange,
  UseComboboxStateChangeOptions
} from 'downshift'

export interface Option {
  label: string
  value: string
}

export type FilterFn = (term: string, options: Option[]) => Option[]

export type OnStateChangeFn<T = any> = (
  changes: UseComboboxStateChange<T>
) => void

export type StateReducer<T = any> = (
  state: UseComboboxState<T>,
  actionAndChanges: UseComboboxStateChangeOptions<T>
) => Partial<UseComboboxState<T>>
