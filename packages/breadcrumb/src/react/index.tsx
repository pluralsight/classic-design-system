import Button from '@pluralsight/ps-design-system-button'
import { CaretLeftIcon } from '@pluralsight/ps-design-system-icon'

import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  breadcrumb: () => glamor.css(stylesheet['.psds-breadcrumb'])
}

interface BreadcrumbProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'disabled' | 'href' | 'onClick' | 'target' | 'rel'
  > {
  disabled?: boolean
  href?: string
  loading?: boolean
  onClick?: (
    evt: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>
  ) => void
}

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
        ref={ref as any}
        size={Button.sizes.small}
      >
        {props.children}
      </Button>
    </div>
  )
})

export default Breadcrumb
