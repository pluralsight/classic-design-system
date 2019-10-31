import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import { Heading } from '@pluralsight/ps-design-system-text'
import PropTypes from 'prop-types'
import React from 'react'

const styleSize = ({ size }) =>
  ({
    [Heading.sizes.large]: {
      margin: '56px 0 0 0'
    },
    [Heading.sizes.xLarge]: {
      margin: '56px 0'
    }
  }[size])

const style = props =>
  glamor.css(
    {
      color: core.colors.gray06
    },
    styleSize(props)
  )

const HeadingComponent = props => (
  <div className={`heading ${props.size}`}>
    <Heading size={props.size}>{props.children}</Heading>
    <style jsx>{`
      /* TODO: style with jsx without global tag */
      .heading :global(h1),
      .heading :global(h2),
      .heading :global(h3),
      .heading :global(h4) {
        color: ${core.colors.gray06};
      }
      .heading.${Heading.sizes.large} :global(h1),
      .heading.${Heading.sizes.large} :global(h2),
      .heading.${Heading.sizes.large} :global(h3),
      .heading.${Heading.sizes.large} :global(h4) {
        margin: 56px 0 0 0;
      }
      .heading.${Heading.sizes.xLarge} :global(h1),
      .heading.${Heading.sizes.xLarge} :global(h2),
      .heading.${Heading.sizes.xLarge} :global(h3),
      .heading.${Heading.sizes.xLarge} :global(h4) {
        margin: 56px 0;
      }
    `}</style>
  </div>
)

HeadingComponent.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string
}
HeadingComponent.defaultProps = {
  size: Heading.sizes.large
}
HeadingComponent.sizes = Heading.sizes
export default HeadingComponent
