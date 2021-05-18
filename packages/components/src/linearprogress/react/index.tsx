import { HTMLPropsFor, ValueOf } from '../../util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'
import { ScreenReaderOnly } from '../../screenreaderonly'
import { useTheme, themeNames } from '../../theme'

import stylesheet from '../css/index'
import { toPercentageString } from '../js/index'

const glamor = glamorDefault || glamorExports

const styles = {
  bg: ({ themeName }: { themeName: ValueOf<typeof themeNames> }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-linearprogress__bg']),
      glamor.css(
        stylesheet[`.psds-linearprogress__bg.psds-theme--${themeName}`]
      )
    ),
  fg: ({
    themeName,
    value
  }: {
    themeName: ValueOf<typeof themeNames>
    value?: number
  }) => {
    const percent = toPercentageString(value)
    const isComplete = percent === '100%'

    return glamor.compose(
      glamor.css(stylesheet['.psds-linearprogress__fg']),
      glamor.css(
        stylesheet[`.psds-linearprogress__fg.psds-theme--${themeName}`]
      ),
      isComplete &&
        glamor.css(stylesheet['.psds-linearprogress__fg--complete']),
      glamor.css({ width: percent })
    )
  }
}

interface LinearProgressProps extends HTMLPropsFor<'div'> {
  value?: number
}

export const LinearProgress: React.FC<LinearProgressProps> = ({
  value,
  ...rest
}) => {
  const themeName = useTheme()
  return (
    <div {...styles.bg({ themeName })} {...rest}>
      <ScreenReaderOnly role="region" aria-live="off">
        {`${value || 0}% complete`}
      </ScreenReaderOnly>
      <div {...styles.fg({ themeName, value })} />
    </div>
  )
}

LinearProgress.defaultProps = {
  value: 0
}
