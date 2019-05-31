import { css } from 'glamor'
import React from 'react'
import { Heading } from '@pluralsight/ps-design-system-text/react'
import PropTypes from 'prop-types'
import { useTheme } from '@pluralsight/ps-design-system-theme/react'

import stylesheet from '../css/index.js'

const styles = {
  dataWell: props =>
    css(
      stylesheet['.psds-datawell'],
      stylesheet[`.psds-datawell.psds-theme--${props.themeName}`]
    ),
  label: props =>
    css(
      stylesheet['.psds-datawell__label'],
      stylesheet[`.psds-datawell__label.psds-theme--${props.themeName}`]
    ),
  data: props =>
    css(
      stylesheet['.psds-datawell__data'],
      stylesheet[`.psds-datawell__data.psds-theme--${props.themeName}`]
    ),
  subLabel: props =>
    css(
      stylesheet['.psds-datawell__sublabel'],
      stylesheet[`.psds-datawell__sublabel.psds-theme--${props.themeName}`]
    )
}

function Datawell(props) {
  const themeName = useTheme()
  const allProps = { ...props, themeName }
  return (
    <div {...styles.dataWell(allProps)}>
      <Heading {...styles.label(allProps)} size={Heading.sizes.smallCaps}>
        <div>{props.label}</div>
      </Heading>
      <div {...styles.data(allProps)}>{props.children}</div>
      <div {...styles.subLabel(allProps)}>{props.subLabel}</div>
    </div>
  )
}

Datawell.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  subLabel: PropTypes.node
}

export default Datawell
