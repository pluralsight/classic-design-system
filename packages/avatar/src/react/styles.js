import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import { sizes } from '../vars'
import { getColorByName } from './utils'

const body = ({ size }) =>
  glamor.css(
    {
      overflow: 'hidden',
      display: 'inline-block',
      textAlign: 'center',
      position: 'relative'
    },
    bodySizes[size]
  )

const bodySizes = {
  [sizes.xSmall]: {
    width: '32px',
    height: '32px',
    borderRadius: '32px',
    fontSize: core.type.fontSizeExtraSmall
  },
  [sizes.small]: {
    width: '48px',
    height: '48px',
    borderRadius: '48px',
    fontSize: core.type.fontSizeSmall
  },
  [sizes.medium]: {
    width: '72px',
    height: '72px',
    borderRadius: '72px',
    fontSize: core.type.fontSizeMedium
  },
  [sizes.large]: {
    width: '96px',
    height: '96px',
    borderRadius: '96px',
    fontSize: core.type.fontSizeLarge
  },
  [sizes.xLarge]: {
    width: '160px',
    height: '160px',
    borderRadius: '160px',
    fontSize: core.type.fontSizeXLarge
  }
}

const img = glamor.css({
  position: 'absolute',
  top: '0',
  left: '0',
  width: 'auto',
  height: '100%'
})

const initials = ({ name }) =>
  glamor.css({
    width: 'auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: core.colors.white,
    fontWeight: core.type.fontWeightXLight,
    backgroundColor: getColorByName(name) || core.colors.bone
  })

export default {
  body,
  img,
  initials
}
