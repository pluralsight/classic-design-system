import { css } from 'glamor'
import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@pluralsight/ps-design-system-button'
import CircularProgress from '@pluralsight/ps-design-system-circularprogress'
import { CloseIcon, SearchIcon } from '@pluralsight/ps-design-system-icon'
import TextInput from '@pluralsight/ps-design-system-textinput'
import { callAll } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css/index.js'

const styles = {
  clear: clearVisible =>
    css(
      stylesheet['.psds-searchinput-clear'],
      clearVisible && stylesheet['.psds-searchinput-clear__visible']
    ),
  field: _ => css(stylesheet['.psds-searchinput-field'])
}

const SearchInput = React.forwardRef(
  ({ loading, onClear, onChange, ...rest }, forwardedRef) => {
    const [clearVisible, toggleClear] = useState(false)
    const handleChange = e => {
      e.currentTarget.value.length > 0 ? toggleClear(true) : toggleClear(false)
    }
    const ref = useRef()
    React.useImperativeHandle(forwardedRef, () => ref.current)

    const handleClear = evt => {
      if (ref.current) {
        ref.current.value = ''
        ref.current.focus()
      }

      onClear(evt)
    }

    const clearBtn = onClear && (
      <Button
        onClick={handleClear}
        {...styles.clear(clearVisible)}
        appearance={Button.appearances.flat}
        icon={<CloseIcon />}
        iconOnly
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
        type="search"
        {...rest}
      />
    )
  }
)

SearchInput.displayName = 'SearchInput'

SearchInput.defaultProps = {
  loading: false
}

SearchInput.propTypes = {
  loading: PropTypes.bool,
  onClear: PropTypes.func,
  onChange: PropTypes.func
}

export default SearchInput
