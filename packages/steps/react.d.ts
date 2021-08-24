import { ValueOf } from '@pluralsight/ps-design-system-util'
import React from 'react'
import * as vars from './dist/esm/vars/index'
interface StepsStatics {
  Step: typeof Step
  Marker: typeof Marker
  orientations: typeof vars.orientations
  sizes: typeof vars.sizes
  statuses: typeof vars.statuses
}
interface StepsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  counter?: boolean
  orientation?: ValueOf<typeof Steps.orientations>
  size?: ValueOf<typeof Steps.sizes>
}
declare const Steps: React.ForwardRefExoticComponent<StepsProps> & StepsStatics
interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  description?: React.ReactNode
  marker?: React.ComponentType<MarkerProps>
  renderMarkerContainer?: (
    props: React.HTMLAttributes<HTMLDivElement>
  ) => React.ReactElement
  status: ValueOf<typeof Steps.statuses>
}
declare const Step: React.ForwardRefExoticComponent<
  StepProps & React.RefAttributes<HTMLDivElement>
>
interface MarkerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'> {
  status: ValueOf<typeof Steps.statuses>
}
declare const Marker: React.ForwardRefExoticComponent<
  MarkerProps & React.RefAttributes<HTMLDivElement>
>
export default Steps
