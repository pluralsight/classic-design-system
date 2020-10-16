import Button from '@pluralsight/ps-design-system-button'
import { CaretLeftIcon } from '@pluralsight/ps-design-system-icon'
import { RefForwardingComponent } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React from 'react'

import stylesheet from '../css'

const styles = {
  breadcrumb: () => css(stylesheet['.psds-breadcrumb'])
}

interface BreadcrumbProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'disabled' | 'href' | 'onClick'
  > {
  disabled?: boolean
  href?: string
  loading?: boolean
  onClick?: (
    evt: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>
  ) => void
}

interface BreadcrumbStatics {}

interface BreadcrumbComponent
  extends RefForwardingComponent<
    BreadcrumbProps,
    HTMLAnchorElement | HTMLButtonElement,
    BreadcrumbStatics
  > {}

const Breadcrumb = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  BreadcrumbProps
>((props, ref) => {
  const { disabled, href, loading, onClick, ...rest } = props
  return (
    <div {...rest} {...styles.breadcrumb()}>
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

export default Breadcrumb
