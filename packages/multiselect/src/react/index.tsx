import { useCombobox, useMultipleSelection } from 'downshift'
import { compose, css } from 'glamor'
import React, {
  ChangeEventHandler,
  ComponentProps,
  SyntheticEvent,
  ReactElement
} from 'react'

import Field from '@pluralsight/ps-design-system-field'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'

const styles = {
  multiSelectField: () => compose(css(stylesheet['.psds-multi-select-field']))
}

export type FilterFn = (searchTerm: string, suggestions: Option[]) => Option[]

export interface Option {
  label: string
  value: string
}

interface MultiSelectFieldProps
  extends Omit<ComponentProps<typeof Field>, 'onChange'> {
  filterFn?: FilterFn
  // loading?: boolean
  // menu: ReactElement<typeof Items>
  onChange: (evt: SyntheticEvent, nextValue: string) => void
  placeholder?: string
  value: Option[]
}

interface MultiSelectFieldStatics {
  Item: typeof Item
  Items: typeof Items
}

type MultiSelectFieldComponent = React.FC<MultiSelectFieldProps> &
  MultiSelectFieldStatics

const MultiSelectField: MultiSelectFieldComponent = props => {
  const { children, disabled, filterFn, onChange, placeholder, ...rest } = props

  // const suggestions = React.useMemo(() => {
  //   return Children.toArray(children)
  //     .filter(React.isValidElement)
  //     .map((child, index) => ({
  //       index,
  //       label: getSuggestionLabel(child),
  //       value: getSuggestionValue(child)
  //     }))
  // }, [children])

  // const filteredSuggestions = React.useMemo(
  //   () => filterFn(searchTerm, suggestions),
  //   [filterFn, searchTerm, suggestions]
  // )

  const handleChange: ChangeEventHandler = evt => {
    //
  }

  return (
    <Field disabled={disabled} {...styles.multiSelectField()} {...rest}>
      <Field.Input
        disabled={disabled}
        onChange={handleChange}
        placeholder={placeholder}
      />

      {/**/}
    </Field>
  )
}

interface ItemsProps extends HTMLPropsFor<'ul'> {}
const Items: React.FC<ItemsProps> = props => {
  return <ul {...props} />
}
Items.displayName = 'MultiSelectField.Items'
MultiSelectField.Items = Items

interface ItemProps extends HTMLPropsFor<'li'> {}
const Item: React.FC<ItemProps> = props => {
  const { children, ...rest } = props
  return <li {...rest}>{children}</li>
}
Item.displayName = 'MultiSelectField.Item'
MultiSelectField.Item = Item

// export const filterSuggestions: FilterFn = (searchTerm, suggestions) => {
//   if (!searchTerm || searchTerm.length <= 1) return suggestions

//   const term = searchTerm.toLowerCase()

//   return suggestions.filter(({ label, value }) => {
//     return (
//       label.toLowerCase().includes(term) || value.toLowerCase().includes(term)
//     )
//   })
// }

export default MultiSelectField
