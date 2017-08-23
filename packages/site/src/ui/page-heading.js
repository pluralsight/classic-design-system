import Badge from '@pluralsight/ps-design-system-badge/react'
import core from '@pluralsight/ps-design-system-core'

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

export default props =>
  <div className="pageHeading">
    <Heading size="xxLarge">
      <h1>
        {props.children}{renderBeta(props)}
      </h1>
    </Heading>
    <style jsx>{`
      .pageHeading h1 {
        display: flex;
        align-items: center;
      }
    `}</style>
  </div>
