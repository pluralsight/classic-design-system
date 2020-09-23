import React, { HTMLAttributes } from 'react'
import Icon from '@pluralsight/ps-design-system-icon'
import * as Icons from '@pluralsight/ps-design-system-icon/dist/esm/react/icons/index.js'
import * as core from '@pluralsight/ps-design-system-core'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const IconCommonSet: React.FC<Props> = () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      borderRadius: 12,
      backgroundColor: core.colorsBackgroundLight[2]
    }}
  >
    {Object.keys(Icons).map((id, i) => {
      const Comp = Icons[id]
      return (
        <div
          className="icon"
          key={i}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 140,
            flexBasis: 140,
            flexGrow: 1,
            alignItems: 'center',
            margin: core.layout.spacingLarge
          }}
        >
          <Comp size={Icon.sizes.medium} />
          <div
            style={{
              fontSize: core.type.fontSizeXSmall,
              marginTop: core.layout.spacingXSmall
            }}
          >
            {id}
          </div>
        </div>
      )
    })}
  </div>
)

export default IconCommonSet
