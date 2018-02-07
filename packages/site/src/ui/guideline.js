import Badge from '@pluralsight/ps-design-system-badge/react'
import core from '@pluralsight/ps-design-system-core'
import { EqualColumnLayout } from '@pluralsight/ps-design-system-layout/react'

export default props => (
  <div className="guideline">
    <EqualColumnLayout count={EqualColumnLayout.counts.two}>
      <div className="box">
        <div className="badgeWrapper">
          <Badge color={Badge.colors.green} className="badge">
            Do
          </Badge>
        </div>
        {props.do}
      </div>
      <div className="box">
        <div className="badgeWrapper">
          <Badge color={Badge.colors.red} className="badge">
            Don't
          </Badge>
        </div>
        {props.dont}
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
