import * as glamor from 'glamor'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  layout,
  colorsBlue,
  colorsBorder,
  colorsTextIcon
} from '@pluralsight/ps-design-system-core'

const styles = {
  container: _ =>
    glamor.css({
      border: `1px solid ${colorsBorder.highOnLight}`,
      borderRadius: 4,
      color: 'inherit',
      cursor: 'pointer',
      display: 'inline-block',
      overflow: 'hidden',
      padding: 0,
      margin: layout.spacingXSmall,
      textAlign: 'left',
      width: 150,
      wordWrap: 'break-word'
    }),
  preview: checked =>
    glamor.css({
      height: 60,
      background: checked ? colorsBlue.base : colorsBlue[1]
    }),
  info: _ =>
    glamor.css({
      borderTop: `1px solid ${colorsBorder.highOnLight}`,
      color: colorsTextIcon.highOnLight,
      padding: '0 10px'
    }),
  title: _ =>
    glamor.css({
      color: 'inherit',
      fontWeight: 'bold',
      fontSize: 12,
      padding: `${layout.spacingXSmall} 0`,
      textTransform: 'uppercase'
    }),
  input: _ =>
    glamor.css({
      position: 'absolute',
      width: 0,
      height: 0,
      opacity: 0,
      left: 0,
      top: 0
    })
}

export const Switch = ({ onChange, name, ...props }) => {
  const [checked, setChecked] = useState()
  function handleChange(evt) {
    setChecked(evt.target.checked)
    onChange(evt, { [name]: evt.target.checked })
  }

  return (
    <label {...styles.container()}>
      <input onChange={handleChange} type="checkbox" {...styles.input()} />
      <div {...styles.preview(checked)} />
      <div {...styles.info()}>
        <h2 {...styles.title()}>{name}</h2>
      </div>
    </label>
  )
}

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
