import Badge from '@pluralsight/ps-design-system-badge/react'
import core from '@pluralsight/ps-design-system-core'

import ChangeLog from './change-log'
import Heading from './heading'

const renderBeta = ({ beta }) =>
  beta
    ? <Badge
        css={{ marginLeft: core.layout.spacingLarge }}
        color={Badge.colors.blue}
      >
        Beta
      </Badge>
    : null

const ChangeLogContainer = props =>
  <div className="container">
    {props.children}
    <style jsx>{`
      .container {
        font-size: 0.5em;
        margin-left: auto;
      }
    `}</style>
  </div>

const renderChangeLog = ({ packageName }) =>
  packageName
    ? <ChangeLogContainer>
        <ChangeLog packageName={packageName} />
      </ChangeLogContainer>
    : null

export default props =>
  <Heading size={Heading.sizes.xLarge}>
    <h1 style={{ display: 'flex', alignItems: 'center' }}>
      {props.children}
      {renderBeta(props)}
      {renderChangeLog(props)}
    </h1>
  </Heading>
