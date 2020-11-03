import { layout } from '@pluralsight/ps-design-system-core'

import { equalColumnLayout as vars } from '../vars'

export default {
  '.psds-equal-column-layout': {
    display: 'flex',
    flexWrap: 'wrap',
    margin: `calc(${layout.spacingLarge} / -2)`
  },
  '.psds-equal-column-layout__column': {
    margin: `calc(${layout.spacingLarge} / 2)`
  },
  [`.psds-equal-column-layout__column--count-${vars.counts.two}`]: {
    width: '100%'
  },
  [`.psds-equal-column-layout__column--count-${vars.counts.three}`]: {
    width: '100%'
  },
  [`.psds-equal-column-layout__column--count-${vars.counts.four}`]: {
    width: `calc(50% - ${layout.spacingLarge})`
  },
  [`.psds-equal-column-layout__column--count-${vars.counts.six}`]: {
    width: `calc(50% - ${layout.spacingLarge})`
  },
  '@media (min-width: 769px)': {
    [`.psds-equal-column-layout__column--count-${vars.counts.two}`]: {
      width: `calc(50% - ${layout.spacingLarge})`
    },
    [`.psds-equal-column-layout__column--count-${vars.counts.three}`]: {
      width: `calc(33.33% - ${layout.spacingLarge})`
    },
    [`.psds-equal-column-layout__column--count-${vars.counts.four}`]: {
      width: `calc(25% - ${layout.spacingLarge})`
    },
    [`.psds-equal-column-layout__column--count-${vars.counts.six}`]: {
      width: `calc(16.66% - ${layout.spacingLarge})`
    }
  }
}
