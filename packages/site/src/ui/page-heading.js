import React from 'react'

import Badge from '@pluralsight/ps-design-system-badge'
import * as core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'

import ChangeLog from './change-log.js'
import Heading from './heading.js'

const BadgeSpacer = () => <span style={{ width: core.layout.spacingLarge }} />

function Beta(props) {
  return (
    <>
      <BadgeSpacer />
      <Badge color={Badge.colors.blue}>Beta</Badge>
    </>
  )
}

const ChangeLogContainer = props => (
  <div className="container">
    {props.children}
    <style jsx>{`
      .container {
        font-size: 0.5em;
        margin-left: auto;
      }
    `}</style>
  </div>
)
ChangeLogContainer.propTypes = {
  children: PropTypes.node
}

export default function PageHeading(props) {
  return (
    <Heading size={Heading.sizes.xLarge}>
      <h1 style={{ display: 'flex', alignItems: 'center' }}>
        {props.children}
        {props.beta && <Beta />}
        {props.packageName && (
          <ChangeLogContainer>
            <ChangeLog packageName={props.packageName} />
          </ChangeLogContainer>
        )}
      </h1>
    </Heading>
  )
}
PageHeading.propTypes = {
  beta: PropTypes.bool,
  children: PropTypes.node,
  packageName: PropTypes.string
}
