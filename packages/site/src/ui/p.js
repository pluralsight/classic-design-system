import core from '@pluralsight/ps-design-system-core'
import { P } from '@pluralsight/ps-design-system-text/react'

// TODO: is there a better way to get this color right?
export default props =>
  <div className="p">
    <P>{props.children}</P>
    <style jsx>{`.p :global(p) { color: ${core.colors.gray04}; }`}</style>
  </div>
