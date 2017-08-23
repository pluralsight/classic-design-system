import core from '@pluralsight/ps-design-system-core'

import Switcher from '../switcher'

export default props =>
  <div className="switcher">
    <Switcher.List onSelect={props.onClick} value={props.value}>
      <Switcher.Option value="react">REACT</Switcher.Option>
      <Switcher.Option value="html">HTML</Switcher.Option>
    </Switcher.List>
    <style jsx>{`
      .switcher {
        color: ${core.colors.white};
        margin-bottom: ${core.layout.spacingXLarge};
      }
    `}</style>
  </div>
