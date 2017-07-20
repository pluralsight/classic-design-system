import React from 'react'

import { Code, Color } from '../../common/components'

export default props =>
  <div>
    <Color.Palette>
      <Color.DarkSwatch hex="E80A89" var="Pink" />
      <Color.DarkSwatch hex="DE3636" var="Red" />
      <Color.DarkSwatch hex="F96816" var="Orange" />
      <Color.DarkSwatch hex="FF7B39" var="OrangeLight" />
      <Color.DarkSwatch hex="FFC200" var="Yellow" />
      <Color.DarkSwatch hex="86CE21" var="GreenLight" />
      <Color.DarkSwatch hex="23AA5A" var="Green" />
      <Color.DarkSwatch hex="137BC2" var="Blue" />
    </Color.Palette>

    <br />
    <Code language="css">{`@import "@pluralsight/ps-design-system-core";

.mySelector {
  color: var(--psColorsOrange);
}`}</Code>
  </div>
