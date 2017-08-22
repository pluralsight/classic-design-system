import core from '@pluralsight/ps-design-system-core'

export default props =>
  <div className="content">
    {props.children}
    <style jsx>{`
      .content {
        margin: 0 auto;
        width: 100%;
        padding: ${core.layout.spacingSmall} ${core.layout.spacingLarge} ${core
      .layout.spacingLarge} ${core.layout.spacingLarge};
      }
      @media screen and (min-width: 769px) {
        .content {
          max-width: 900px;
          min-width: 300px;
        }
      }
    `}</style>
  </div>
