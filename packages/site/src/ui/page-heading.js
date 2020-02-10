import React from 'react'

import Badge from '@pluralsight/ps-design-system-badge'
import { layout } from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'

import ChangeLog from './change-log.js'
import Heading from './heading.js'

export default function PageHeading(props) {
  const { beta, children, packageName } = props

  return (
    <Heading size={Heading.sizes.xLarge}>
      <h1 style={{ display: 'flex', alignItems: 'center' }}>
        {children}

        {beta && <Beta />}

        {packageName && (
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

const BadgeSpacer = () => <span style={{ width: layout.spacingLarge }} />

function Beta(props) {
  return (
    <>
      <BadgeSpacer />
      <Badge color={Badge.colors.blue}>Beta</Badge>
    </>
  )
}

function ChangeLogContainer(props) {
  return (
    <>
      <div className="container" {...props} />

      <style jsx>{`
        .container {
          font-size: 0.5em;
          margin-left: auto;
        }
      `}</style>
    </>
  )
}
