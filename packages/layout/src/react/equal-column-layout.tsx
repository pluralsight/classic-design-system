import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import glamor from 'glamor'
import React from 'react'

import { equalColumnLayoutCSS as stylesheet } from '../css/index'
import { equalColumnLayout as vars } from '../vars/index'

const styleLayout = () => glamor.css(stylesheet['.psds-equal-column-layout'])

const styleColumn = (count: ValueOf<typeof vars.counts>) => {
  const label = 'psds-equal-column-layout__column'
  const labelCount = `${label}--count-${count}`

  return glamor.compose(
    glamor.css(stylesheet[`.${label}`]),
    glamor.css(stylesheet[`.${labelCount}`]),

    glamor.media(
      '(min-width: 769px)',
      glamor.css(stylesheet['@media (min-width: 769px)'][`.${labelCount}`])
    )
  )
}

interface EqualColumnLayoutProps extends HTMLPropsFor<'div'> {
  count: ValueOf<typeof vars.counts>
}
interface EqualColumnLayoutStatics {
  counts: typeof vars.counts
}
const EqualColumnLayout: React.FC<EqualColumnLayoutProps> &
  EqualColumnLayoutStatics = props => {
  const { count = vars.counts.four, ...rest } = props
  const useCustomMarkup = React.Children.count(props.children) === 1
  const parentProps = {
    ...styleLayout(),
    ...rest
  }
  const children = React.Children.map(
    useCustomMarkup
      ? (props.children as React.ReactElement).props.children
      : props.children,
    child => React.cloneElement(child, styleColumn(count))
  )
  return useCustomMarkup ? (
    React.cloneElement(
      props.children as React.ReactElement,
      parentProps,
      children
    )
  ) : (
    <div {...parentProps}>{children}</div>
  )
}
EqualColumnLayout.displayName = 'EqualColumnLayout'
EqualColumnLayout.counts = vars.counts

export const counts = vars.counts
export default EqualColumnLayout
