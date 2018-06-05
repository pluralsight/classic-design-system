import PropTypes from 'prop-types'
import React from 'react'

const propTypeTakesValue = type => ['oneOf'].includes(type)

export const generatePropTypes = propDefs =>
  Object.keys(propDefs).reduce((acc, key) => {
    acc[key] = propTypeTakesValue(propDefs[key].type)
      ? PropTypes[propDefs[key].type](propDefs[key].value)
      : PropTypes[propDefs[key].type]
    return acc
  }, {})

export const generateDefaultProps = propDefs =>
  Object.keys(propDefs).reduce((acc, key) => {
    if (propDefs[key].default) acc[key] = propDefs[key].default
    return acc
  }, {})
