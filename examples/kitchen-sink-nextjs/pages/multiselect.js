import { useMemo, useState } from 'react'
import MultiSelect from '@pluralsight/ps-design-system-multiselect'

const Comp = () => {
  const options = useMemo(
    () => [
      { label: 'Hydrogen', value: 'H' },
      { label: 'Helium', value: 'He' },
      { label: 'Lithium', value: 'Li' },
      { label: 'Beryllium', value: 'Be' },
      { label: 'Boron', value: 'B' },
      { label: 'Carbon', value: 'C' },
      { label: 'Nitrogren', value: 'N' },
      { label: 'Oxygen', value: 'O' },
      { label: 'Fluorine', value: 'F' },
      { label: 'Neon', value: 'Ne' },
      { label: 'Sodium', value: 'Na' },
      { label: 'Magnesium', value: 'Mg' },
      { label: 'Aluminum', value: 'Al' },
      { label: 'Silicon', value: 'Si' },
      { label: 'Phosphorus', value: 'P' },
    ],
    []
  )
  const [value, setValue] = useState(options.slice(0, 2))

  return (
    <MultiSelect
      onChange={(_, nextValue) => {
        setValue(nextValue)
      }}
      options={options}
      value={value}
    />
  )
}

export default Comp
