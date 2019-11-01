import { css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { Heading } from '@pluralsight/ps-design-system-text'
import { useTheme } from '@pluralsight/ps-design-system-theme'

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

const DataWell = React.forwardRef((props, ref) => {
  const themeName = useTheme()

  return (
    <div
      ref={ref}
      {...styles.dataWell(themeName, props)}
      {...filterReactProps(props)}
    >
      <Heading
        {...styles.label(themeName, props)}
        size={Heading.sizes.smallCaps}
      >
        <div>{props.label}</div>
      </Heading>

      <div {...styles.data(themeName, props)}>{props.children}</div>
      <div {...styles.subLabel(themeName, props)}>{props.subLabel}</div>
    </div>
  )
})

DataWell.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  subLabel: PropTypes.node
}

export default DataWell
