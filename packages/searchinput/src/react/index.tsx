import { css } from 'glamor'
import React, { useRef, useState } from 'react'

import Button from '@pluralsight/ps-design-system-button'
import CircularProgress from '@pluralsight/ps-design-system-circularprogress'
import { CloseIcon, SearchIcon } from '@pluralsight/ps-design-system-icon'
import TextInput, {
  TextInputProps
} from '@pluralsight/ps-design-system-textinput'
import { callAll } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'

const styles = {
  clear: (clearVisible: boolean) =>
    css(
      stylesheet['.psds-searchinput-clear'],
      clearVisible && stylesheet['.psds-searchinput-clear__visible']
    ),
  field: () => css(stylesheet['.psds-searchinput-field'])
}

export interface SearchInputProps extends TextInputProps {
  loading?: boolean
  onClear?: (evt?: React.MouseEvent) => void
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ loading = false, onClear, onChange, ...rest }, forwardedRef) => {
    const [clearVisible, toggleClear] = useState(false)
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      ;(evt.currentTarget as HTMLInputElement).value.length > 0
        ? toggleClear(true)
        : toggleClear(false)
    }
    const ref = useRef<HTMLInputElement>((null as unknown) as HTMLInputElement)
    React.useImperativeHandle(forwardedRef, () => ref.current)

    const handleClear = (evt: React.MouseEvent) => {
      if (ref.current) {
        ref.current.value = ''
        ref.current.focus()
      }

      onClear && onClear(evt)
    }

    const clearBtn = onClear && (
      <Button
        onClick={handleClear}
        {...styles.clear(clearVisible)}
        appearance={Button.appearances.flat}
        icon={<CloseIcon />}
        size={Button.sizes.small}
      />
    )

    const icon = loading ? (
      <CircularProgress size={CircularProgress.sizes.small} />
    ) : (
      <SearchIcon />
    )

    return (
      <TextInput
        {...styles.field()}
        appearance={TextInput.appearances.subtle}
        fieldAfter={clearBtn}
        icon={icon}
        ref={ref}
        onChange={callAll(handleChange, onChange)}
        {...rest}
        type="search"
      />
    )
  }
)

SearchInput.displayName = 'SearchInput'

export default SearchInput
