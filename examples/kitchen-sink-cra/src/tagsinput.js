import React from 'react'
import TagsInput from '@pluralsight/ps-design-system-tagsinput'

const Comp = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    evt
  ) => {
    setSearchTerm(evt.target.value)
  }

  const [value, setValue] = React.useState([
    { label: 'first', value: 'first' },
    { label: 'second', value: 'second' },
  ])

  const handleOnKeyPress: React.KeyboardEventHandler = (evt) => {
    if (evt.key !== 'Enter') return

    if (evt.target instanceof HTMLInputElement) {
      const { value: targetValue } = evt.target
      if (targetValue.length < 1) return

      const nextOption = { label: targetValue, value: targetValue }
      const nextValue = uniqBy([...value, nextOption], 'value')

      setSearchTerm('')
      setValue(nextValue)
    }
  }

  return (
    <TagsInput
      label="Label area"
      onChange={(_, nextValue) => {
        setValue(nextValue)
      }}
      onKeyPress={handleOnKeyPress}
      onSearchInputChange={handleInputChange}
      searchInputValue={searchTerm}
      value={value}
    />
  )
}

const uniqBy = (arr: any[], key: string) =>
  Array.from(new Set(arr.map((item) => item[key]))).map((k) =>
    arr.find((i) => i[key] === k)
  )

export default Comp
