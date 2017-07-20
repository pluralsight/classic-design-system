import React from 'react'

import { Code, Color } from '../../common/components'

export default props =>
  <div>
    <Color.Palette>
      <Color.HorzGradient start="F05A28" stop="E80A89" var="Horz" />
      <Color.VertGradient start="F05A28" stop="E80A89" var="Vert" />
    </Color.Palette>
    <br />
    <Code language="css">{`@import "@pluralsight/ps-design-system-core";

.mySelector {
  background: var(--psColorsGradientHorz);
}`}</Code>
  </div>
