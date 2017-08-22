import core from '@pluralsight/ps-design-system-core'

export const cssVars = {
  topBarHeight: '8px'
}

export default _ =>
  <div className="bar">
    <style jsx>{`
      .bar {
        display: block;
        height: ${cssVars.topBarHeight};
        background: ${core.colors.gradientHorz};
      }
    `}</style>
  </div>
