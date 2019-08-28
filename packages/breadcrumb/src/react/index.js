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
  const { disabled, href, loading, onClick, ...rest } = props
  return (
    <div {...filterReactProps(rest)} {...styles.breadcrumb(props)}>
      <Button
        appearance={Button.appearances.flat}
        href={href}
        disabled={disabled}
        icon={<Icon id={Icon.ids.caretLeft} />}
        loading={loading}
        onClick={onClick}
        ref={ref}
        size={Button.sizes.small}
      >
        {props.children}
      </Button>
    </div>
  )
})

Breadcrumb.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object
}
Breadcrumb.defaultProps = {
  disabled: false
}

export default Breadcrumb
