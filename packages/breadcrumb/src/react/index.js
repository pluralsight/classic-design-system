import * as glamor from 'glamor'
import Button from '@pluralsight/ps-design-system-button/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'

import css from '../css'

const styles = {
  breadcrumb: _ => glamor.css(css['.psds-breadcrumb'])
}

const Breadcrumb = props => {
  const breadcrumbProps = {
    ...styles.breadcrumb(props),
    ...(props.style ? { style: props.style } : null),
    ...(props.className ? { className: props.className } : null)
  }
  return (
    <div {...breadcrumbProps}>
      <Button
        {...props}
        icon={<Icon id={Icon.ids.caretLeft} />}
        appearance={Button.appearances.flat}
        size={Button.sizes.small}
      />
    </div>
  )
}

Breadcrumb.propTypes = {
  disabled: PropTypes.bool,
  innerRef: PropTypes.func
}
Breadcrumb.defaultProps = {
  disabled: false
}

export default Breadcrumb
