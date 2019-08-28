import core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'
import React from 'react'

function Intro(props) {
  return (
    <div className="intro">
      {props.children}
      <style jsx>{`
        .intro {
          margin-bottom: ${core.layout.spacingLarge};
          font-size: ${core.type.fontSizeMedium};
          line-height: ${core.type.lineHeightExtra};
          font-weight: ${core.type.fontWeightLight};
        }
      `}</style>
    </div>
  )
}
Intro.propTypes = {
  children: PropTypes.node
}

export default Intro
