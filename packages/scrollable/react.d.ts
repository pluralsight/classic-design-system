import React from 'react'
interface ScrollableProps extends React.HTMLAttributes<HTMLDivElement> {
  renderContent?: (
    props: renderContentProps,
    ref: React.Ref<HTMLElement>
  ) => React.ReactNode
}
declare const Scrollable: React.ForwardRefExoticComponent<
  ScrollableProps & React.RefAttributes<HTMLElement>
>
export interface renderContentProps {
  children: React.ReactNode
  onScroll: React.UIEventHandler
  className: string
}
export default Scrollable
