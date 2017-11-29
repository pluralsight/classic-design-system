import core from '@pluralsight/ps-design-system-core'

import { EqualColumnLayout as vars } from '../vars'

export default {
  ['.psds-equal-column-layout']: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: `calc(${core.layout.spacingMedium} / -2)`
  },
  ['.psds-equal-column-layout__column']: {
    margin: `calc(${core.layout.spacingMedium} / 2)`
  },
  [`.psds-equal-column-layout__column--count-${vars.counts.three}`]: {
    width: '100%'
  },
  [`.psds-equal-column-layout__column--count-${vars.counts.four}`]: {
    width: `calc(50% - ${core.layout.spacingMedium})`
  },
  [`.psds-equal-column-layout__column--count-${vars.counts.six}`]: {
    width: `calc(50% - ${core.layout.spacingMedium})`
  },
  '@media (min-width: 769px)': {
    [`.psds-equal-column-layout__column--count-${vars.counts.three}`]: {
      width: `calc(33.33% - ${core.layout.spacingMedium})`
    },
    [`.psds-equal-column-layout__column--count-${vars.counts.four}`]: {
      width: `calc(25% - ${core.layout.spacingMedium})`
    },
    [`.psds-equal-column-layout__column--count-${vars.counts.six}`]: {
      width: `calc(16.66% - ${core.layout.spacingMedium})`
    }
  }
}
