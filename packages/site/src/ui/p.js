import * as core from '@pluralsight/ps-design-system-core'
import { P } from '@pluralsight/ps-design-system-text/react.js'
import PropTypes from 'prop-types'
import React from 'react'

export default function Paragraph(props) {
  return (
    <div className="p" {...props}>
      <P>{props.children}</P>
      <style jsx>{`
        .p :global(p) {
          color: ${core.colors.gray04};
        }
      `}</style>
    </div>
  )
}
Paragraph.propTypes = {
  children: PropTypes.node
}
