import Theme from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'

import * as vars from '../vars/index.js'

export function select(
  themeName: ValueOf<typeof Theme.names>,
  appearance: ValueOf<typeof vars.appearances>,
  color: ValueOf<typeof vars.colors>
) {
  return (
    '.psds-badge--apearance-' +
    appearance +
    '.psds-badge--color-' +
    color +
    '.psds-theme--' +
    themeName
  )
}
