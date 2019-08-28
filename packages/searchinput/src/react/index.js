import * as glamor from 'glamor'
import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import Button from '@pluralsight/ps-design-system-button/react'
import CircularProgress from '@pluralsight/ps-design-system-circularprogress/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import TextInput from '@pluralsight/ps-design-system-textinput/react'
import Theme, {
  names as themeNames,
  withTheme
} from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'

const styles = {
  clear: _ => glamor.css(css['.psds-searchinput-clear'])
}

const SearchInput = withTheme(props => {
  const { loading, onClear, ...rest } = props
  const inputRef = useRef()

  const handleClear = evt => {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.focus()
    }
    onClear(evt)
  }

  const clearBtn = onClear && <ClearButton onClick={handleClear} />

  const icon = loading ? (
    <CircularProgress size={CircularProgress.sizes.small} />
  ) : (
    <Icon id={Icon.ids.search} />
  )

  return (
    <TextInput
      appearance={TextInput.appearances.subtle}
      fieldAfter={clearBtn}
      icon={icon}
      innerRef={inputRef}
      type="search"
      {...rest}
    />
  )
})

SearchInput.defaultProps = {
  loading: false
}

SearchInput.propTypes = {
  loading: PropTypes.bool,
  onClear: PropTypes.func
}

const ClearButton = props => (
  <div {...styles.clear()}>
    <Theme name={themeNames.light}>
      <Button
        appearance={Button.appearances.flat}
        icon={<Icon id={Icon.ids.close} />}
        iconOnly
        size={Button.sizes.small}
        {...props}
      />
    </Theme>
  </div>
)
ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default SearchInput
