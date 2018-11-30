import React from 'react'

import Badge from '@pluralsight/ps-design-system-badge/react'
import core from '@pluralsight/ps-design-system-core'

import ChangeLog from './change-log'
import Heading from './heading'

const BadgeSpacer = () => <span style={{ width: core.layout.spacingLarge }} />

const renderBeta = ({ beta }) => {
  if (!beta) return null

  return (
    <React.Fragment>
      <BadgeSpacer />
      <Badge color={Badge.colors.blue}>Beta</Badge>
    </React.Fragment>
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

const renderChangeLog = ({ packageName }) =>
  packageName ? (
    <ChangeLogContainer>
      <ChangeLog packageName={packageName} />
    </ChangeLogContainer>
  ) : null

export default props => (
  <Heading size={Heading.sizes.xLarge}>
    <h1 style={{ display: 'flex', alignItems: 'center' }}>
      {props.children}
      {renderBeta(props)}
      {renderChangeLog(props)}
    </h1>
  </Heading>
)
