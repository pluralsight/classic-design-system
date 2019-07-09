import * as glamor from 'glamor'
import Button from '@pluralsight/ps-design-system-button/react.js'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Icon from '@pluralsight/ps-design-system-icon/react.js'
import PropTypes from 'prop-types'
import React from 'react'

import css from '../css/index.js'

const styles = {
  breadcrumb: _ => glamor.css(css['.psds-breadcrumb'])
}

const Breadcrumb = React.forwardRef((props, ref) => {
  const { onClick, ...rest } = props
  return (
    <div {...filterReactProps(rest)} {...styles.breadcrumb(props)}>
      <Button
        {...props}
        ref={ref}
        icon={<Icon id={Icon.ids.caretLeft} />}
        appearance={Button.appearances.flat}
        size={Button.sizes.small}
      />
    </div>
  )
})

Breadcrumb.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object
}
Breadcrumb.defaultProps = {
  disabled: false
}

export default Breadcrumb
