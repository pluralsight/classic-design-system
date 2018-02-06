import core from '@pluralsight/ps-design-system-core'

const Intro = props => (
  <div className="intro">
    {props.children}
    <style jsx>{`
      .intro {
        margin-bottom: ${core.layout.spacingLarge};
        font-size: ${core.type.fontSizeMedium};
        line-height: ${core.type.lineHeightExtra};
        font-weight: ${core.type.fontWeightXLight};
      }
    `}</style>
  </div>
)

export default Intro
