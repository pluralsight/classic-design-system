import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import { Button } from '../../button'
import { CircularProgress } from '../../circularprogress'
import { CloseIcon, SearchIcon } from '../../icon'
import { TextInput, TextInputProps } from '../../textinput'
import { RefFor } from '../../util'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  clear: (isClearBtnVisible: boolean) =>
    glamor.css(
      stylesheet['.psds-searchinput-clear'],
      isClearBtnVisible && stylesheet['.psds-searchinput-clear--visible']
    ),
  field: () => glamor.css(stylesheet['.psds-searchinput-field'])
}

export interface SearchInputProps extends TextInputProps {
  loading?: boolean
  onClear?: (evt?: React.MouseEvent) => void
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ loading = false, onClear, ...rest }, forwardedRef) => {
    const isClearable = typeof onClear === 'function'
    const hasVisibleValue = !!rest.value && String(rest.value).length > 0
    const isClearBtnVisible = isClearable && hasVisibleValue

    const ref = React.useRef<HTMLInputElement | null>(null)
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
