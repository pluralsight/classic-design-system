import { css } from 'glamor'
import React, { useEffect, useState } from 'react'

import { useChannel } from '@storybook/api'

import Button from '@pluralsight/ps-design-system-button'
import { layout } from '@pluralsight/ps-design-system-core'

import { EVENTS } from '../constants.js'

const stylesheet = {
  panel: css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  }),
  inner: css({ padding: layout.spacingXSmall })
}

export default function Panel(props) {
  const [enabled, setEnabled] = useState(false)
  const emit = useChannel({})

  useEffect(() => {
    emit(EVENTS.enable, '')
  }, [enabled, emit])

  return (
    <div {...stylesheet.panel} {...props}>
      <div {...stylesheet.inner}>
        {enabled ? (
          <h2>Chaos Enabled</h2>
        ) : (
          <Button
            appearance={Button.appearances.primary}
            onClick={() => setEnabled(true)}
            size={Button.sizes.large}
          >
            enable chaos
          </Button>
        )}
      </div>
    </div>
  )
}
