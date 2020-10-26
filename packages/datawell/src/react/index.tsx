// TODO: rm
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { Heading } from '@pluralsight/ps-design-system-text'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import { RefForwardingComponent } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React from 'react'
// TODO: rm
import PropTypes from 'prop-types'

// TODO: rm ext
import stylesheet from '../css/index.js'

const styles = {
  dataWell: themeName =>
    css(
      stylesheet['.psds-datawell'],
      stylesheet[`.psds-datawell.psds-theme--${themeName}`]
    ),
  label: themeName =>
    css(
      stylesheet['.psds-datawell__label'],
      stylesheet[`.psds-datawell__label.psds-theme--${themeName}`]
    ),
  data: themeName =>
    css(
      stylesheet['.psds-datawell__data'],
      stylesheet[`.psds-datawell__data.psds-theme--${themeName}`]
    ),
  subLabel: themeName =>
    css(
      stylesheet['.psds-datawell__sublabel'],
      stylesheet[`.psds-datawell__sublabel.psds-theme--${themeName}`]
    )
}

interface DataWellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  label: string
  subLabel?: React.ReactNode
}

interface DataWellStatics {}

interface DataWellComponent
  extends RefForwardingComponent<
    DataWellProps,
    HTMLDivElement,
    DataWellStatics
  > {}

const DataWell = React.forwardRef((props, ref) => {
  const themeName = useTheme()

  return (
    <div ref={ref} {...styles.dataWell(themeName)} {...filterReactProps(props)}>
      <Heading {...styles.label(themeName)} size={Heading.sizes.smallCaps}>
        <div>{props.label}</div>
      </Heading>

      <div {...styles.data(themeName)}>{props.children}</div>
      <div {...styles.subLabel(themeName)}>{props.subLabel}</div>
    </div>
  )
}) as DataWellComponent

export default DataWell
