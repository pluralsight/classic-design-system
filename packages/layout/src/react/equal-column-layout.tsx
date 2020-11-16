import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import { compose, css, media } from 'glamor'
import React from 'react'

import { equalColumnLayout as vars } from '../vars'
import { equalColumnLayoutCSS as stylesheet } from '../css'

const styleLayout = () => css(stylesheet['.psds-equal-column-layout'])

const styleColumn = (count: ValueOf<typeof vars.counts>) => {
  const label = 'psds-equal-column-layout__column'
  const labelCount = `${label}--count-${count}`

  return compose(
    css(stylesheet[`.${label}`]),
    css(stylesheet[`.${labelCount}`]),

    media(
      '(min-width: 769px)',
      css(stylesheet['@media (min-width: 769px)'][`.${labelCount}`])
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
