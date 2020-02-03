import PropTypes from 'prop-types'
import React, { useEffect, useRef, useCallback } from 'react'
import shave from 'shave'

import { type } from '@pluralsight/ps-design-system-core'

const reset = (children, current) => {
  if (current) {
    current.innerHTML = children
  }
}
const Shave = ({ children, lineHeight, lines, character, ...rest }) => {
  const elRef = useRef()

  useEffect(() => {
    reset(children, elRef.current)
  }, [children])

  const truncate = useCallback(() => {
    const maxHeight = lineHeight * lines
    shave(elRef.current, maxHeight, { character: character })
  }, [lineHeight, lines, character])

  useEffect(() => {
    window.addEventListener('resize', truncate)
    truncate()

    return _ => {
      window.removeEventListener('resize', truncate)
    }
  }, [truncate])

  return (
    <div ref={elRef} {...rest}>
      {children}
    </div>
  )
}

Shave.defaultProps = {
  character: '&hellip;',
  lineHeight: parseInt(type.lineHeightStandard, 10),
  lines: 3
}

Shave.propTypes = {
  character: PropTypes.string,
  children: PropTypes.string.isRequired,
  lineHeight: PropTypes.number,
  lines: PropTypes.number
}

export default Shave
