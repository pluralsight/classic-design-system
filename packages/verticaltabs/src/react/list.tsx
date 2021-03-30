import Collapsible from '@pluralsight/ps-design-system-collapsible'
import { css } from 'glamor'
import React from 'react'

import { useForceCollapsed } from './context'
import stylesheet from '../css/index'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'

const styles = {
  list: () => css(stylesheet['.psds-verticaltabs__list']),
  listCollapsible: () =>
    css(stylesheet['.psds-verticaltabs__list--collapsible'])
}

interface ListProps extends HTMLPropsFor<'ul'> {
  collapsed?: boolean
}

export const List: React.FC<ListProps> = props => {
  const { collapsed, ...rest } = props
  return <ul {...styles.list()} {...rest} />
}

interface CollapsibleListProps extends ListProps {
  collapsed?: boolean
}
export const CollapsibleList: React.FC<CollapsibleListProps> = props => {
  const { collapsed, ...rest } = props
  const forceCollapsed = useForceCollapsed()
  const [open, setOpen] = React.useState(!collapsed)

  React.useEffect(() => {
    setOpen(!props.collapsed)
  }, [props.collapsed])

  return (
    <Collapsible
      isOpen={!forceCollapsed && open}
      tagName="ul"
      {...rest}
      {...styles.list()}
      {...styles.listCollapsible()}
    />
  )
}
