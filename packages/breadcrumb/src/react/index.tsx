import Button from '@pluralsight/ps-design-system-button'
// TODO: rm
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { CaretLeftIcon } from '@pluralsight/ps-design-system-icon'
import { RefForwardingComponent } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React from 'react'
// TODO: rm packagej
/* import PropTypes from 'prop-types' */

import stylesheet from '../css'

const styles = {
  breadcrumb: () => css(stylesheet['.psds-breadcrumb'])
}

interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  disabled?: boolean
  // TODO: why is this required for tsc? Doesn't it get included by HTMLAnchorElement
  href?: string
  loading?: boolean
}

interface BreadcrumbStatics {}

interface BreadcrumbComponent
  extends RefForwardingComponent<
    BreadcrumbProps,
    HTMLAnchorElement | HTMLButtonElement,
    BreadcrumbStatics
  > {}

const Breadcrumb = React.forwardRef((props, ref) => {
  const { disabled, href, loading, onClick, ...rest } = props
  return (
    <div {...filterReactProps(rest)} {...styles.breadcrumb()}>
      <Button
        appearance={Button.appearances.flat}
        href={href}
        disabled={disabled}
        icon={<CaretLeftIcon />}
        loading={loading}
        onClick={onClick}
        ref={ref}
        size={Button.sizes.small}
      >
        {props.children}
      </Button>
    </div>
  )
}) as BreadcrumbComponent

// TODO: replace
Breadcrumb.defaultProps = {
  disabled: false
}

export default Breadcrumb
