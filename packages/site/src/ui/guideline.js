import Badge from '@pluralsight/ps-design-system-badge/react'
import core from '@pluralsight/ps-design-system-core'
import { EqualColumnLayout } from '@pluralsight/ps-design-system-layout/react'

export default props => (
  <div className="guideline">
    <EqualColumnLayout count={EqualColumnLayout.counts.two}>
      <div className="box" style={props.doStyle}>
        {props.do}
        <div className="badgeWrapper">
          <Badge color={Badge.colors.green} className="badge">
            Do
          </Badge>
        </div>
      </div>
      <div className="box" style={props.dontStyle}>
        {props.dont}
        <div className="badgeWrapper">
          <Badge color={Badge.colors.red} className="badge">
            Don't
          </Badge>
        </div>
      </div>
    </EqualColumnLayout>

    <style jsx>{`
      .guideline {
        padding: ${core.layout.spacingXSmall} 0 ${core.layout.spacingXLarge} 0;
      }
      .box {
        height: 100%;
        position: relative;
        background: ${core.colors.bone};
        border-radius: 12px;
        padding: ${core.layout.spacingXLarge};
      }
      .badgeWrapper {
        position: absolute;
        top: 0;
        left: 0;
      }
    `}</style>
  </div>
)
