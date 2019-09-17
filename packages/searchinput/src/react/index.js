import * as glamor from 'glamor'
import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import Button from '@pluralsight/ps-design-system-button/react.js'
import CircularProgress from '@pluralsight/ps-design-system-circularprogress/react.js'
import Icon from '@pluralsight/ps-design-system-icon/react.js'
import TextInput from '@pluralsight/ps-design-system-textinput/react.js'
import Theme, {
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react.js'

import css from '../css/index.js'

const styles = {
  clear: _ => glamor.css(css['.psds-searchinput-clear'])
}

const SearchInput = React.forwardRef((props, forwardedRef) => {
  const { loading, onClear, ...rest } = props

  const ref = useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const handleClear = evt => {
    if (ref.current) {
      ref.current.value = ''
      ref.current.focus()
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
      ref={ref}
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
