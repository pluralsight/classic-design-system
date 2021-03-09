import { css } from 'glamor'
import React, { useRef } from 'react'

import Button from '@pluralsight/ps-design-system-button'
import CircularProgress from '@pluralsight/ps-design-system-circularprogress'
import { CloseIcon, SearchIcon } from '@pluralsight/ps-design-system-icon'
import TextInput from '@pluralsight/ps-design-system-textinput'
import { callAll, RefFor } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'

const styles = {
  clear: (isClearBtnVisible: boolean) =>
    css(
      stylesheet['.psds-searchinput-clear'],
      isClearBtnVisible && stylesheet['.psds-searchinput-clear--visible']
    ),
  field: () => css(stylesheet['.psds-searchinput-field'])
}

export interface SearchInputProps
  extends React.ComponentProps<typeof TextInput> {
  loading?: boolean
  onClear?: (evt?: React.MouseEvent) => void
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ loading = false, onClear, ...rest }, forwardedRef) => {
    const isClearable = typeof onClear === 'function'
    const hasVisibleValue = !!rest.value && String(rest.value).length > 0
    const isClearBtnVisible = isClearable && hasVisibleValue

    const ref = useRef<HTMLInputElement | null>(null)
    React.useImperativeHandle(
      forwardedRef,
      () => (ref.current as unknown) as HTMLInputElement
    )

    const handleClear = (evt: React.MouseEvent) => {
      ref.current?.focus()
      typeof onClear === 'function' && onClear(evt)
    }

    const clearBtn = isClearable && (
      <Button
        onClick={handleClear}
        {...styles.clear(isClearBtnVisible)}
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
        ref={ref as RefFor<'input'>}
        {...rest}
        type="search"
      />
    )
  }
)

SearchInput.displayName = 'SearchInput'

export default SearchInput
