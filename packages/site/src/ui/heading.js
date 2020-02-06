import PropTypes from 'prop-types'
import React from 'react'

import { colorsTextIcon } from '@pluralsight/ps-design-system-core'
import { Heading as DSHeading } from '@pluralsight/ps-design-system-text'

const { sizes } = DSHeading

function Heading(props) {
  return (
    <div className={`heading ${props.size}`}>
      <DSHeading size={props.size}>{props.children}</DSHeading>

      <style jsx>{`
        /* TODO: style with jsx without global tag */
        .heading :global(h1),
        .heading :global(h2),
        .heading :global(h3),
        .heading :global(h4) {
          color: ${colorsTextIcon.highOnLight};
        }
        .heading.${sizes.large} :global(h1),
        .heading.${sizes.large} :global(h2),
        .heading.${sizes.large} :global(h3),
        .heading.${sizes.large} :global(h4) {
          margin: 56px 0 0 0;
        }
        .heading.${sizes.xLarge} :global(h1),
        .heading.${sizes.xLarge} :global(h2),
        .heading.${sizes.xLarge} :global(h3),
        .heading.${sizes.xLarge} :global(h4) {
          margin: 56px 0;
        }
      `}</style>
    </div>
  )
}

Heading.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.values(sizes))
}

Heading.defaultProps = {
  size: sizes.large
}

Heading.sizes = sizes

export default Heading
