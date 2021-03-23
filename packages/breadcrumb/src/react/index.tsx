import Button from '@pluralsight/ps-design-system-button'
import { CaretLeftIcon } from '@pluralsight/ps-design-system-icon'
import {
  HTMLPropsFor,
  forwardRefWithAs
} from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React, { MouseEventHandler } from 'react'

import stylesheet from '../css'

const styles = {
  breadcrumb: () => css(stylesheet['.psds-breadcrumb'])
}

interface BreadcrumbProps extends Omit<HTMLPropsFor<'div'>, 'onClick'> {
  disabled?: boolean
  href?: string
  loading?: boolean
  onClick: MouseEventHandler
}

const Breadcrumb = forwardRefWithAs<BreadcrumbProps, 'div'>((props, ref) => {
  const {
    as: Comp = 'div',
    children,
    disabled,
    href,
    loading,
    onClick,
    ...rest
  } = props

  const buttonTag = href ? 'a' : 'button'

  return (
    <Comp ref={ref} {...styles.breadcrumb()} {...rest}>
      <Button
        appearance={Button.appearances.flat}
        as={buttonTag}
        icon={<CaretLeftIcon />}
        loading={loading}
        onClick={onClick}
        size={Button.sizes.small}
        {...(buttonTag === 'a' ? { href } : { disabled })}
      >
        {children}
      </Button>
    </Comp>
  )
})

export default Breadcrumb
