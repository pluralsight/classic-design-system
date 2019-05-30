import * as glamor from 'glamor'
import Button from '@pluralsight/ps-design-system-button/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'

import css from '../css'

const styles = {
  breadcrumb: _ => glamor.css(css['.psds-breadcrumb'])
}

const Breadcrumb = React.forwardRef((props, ref) => {
  const breadcrumbProps = {
    ...styles.breadcrumb(props),
    ...(props.style ? { style: props.style } : null),
    ...(props.className ? { className: props.className } : null)
  }

  return (
    <div {...breadcrumbProps}>
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
  style: PropTypes.object
}
Breadcrumb.defaultProps = {
  disabled: false
}

export default Breadcrumb
