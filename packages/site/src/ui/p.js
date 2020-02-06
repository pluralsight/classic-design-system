import PropTypes from 'prop-types'
import React from 'react'

import { colorsTextIcon } from '@pluralsight/ps-design-system-core'
import { P } from '@pluralsight/ps-design-system-text'

export default function Paragraph(props) {
  return (
    <>
      <div className="p" {...props}>
        <P>{props.children}</P>
      </div>

      <style jsx>{`
        .p :global(p) {
          color: ${colorsTextIcon.highOnLight};
        }
      `}</style>
    </>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node
}
