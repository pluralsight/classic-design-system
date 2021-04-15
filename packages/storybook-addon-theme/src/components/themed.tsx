import * as core from '@pluralsight/ps-design-system-core'
import Theme from '@pluralsight/ps-design-system-theme'
import { styled } from '@storybook/theming'
import React from 'react'

interface ThemedProps extends React.HTMLAttributes<HTMLDivElement> {
  themeName: keyof typeof Theme.names
}

export const Themed: React.FC<ThemedProps> = props => {
  const { themeName = Theme.defaultName, ...rest } = props

  return (
    <Theme name={themeName}>
      <Container themeName={themeName} {...rest} />
    </Theme>
  )
}

const Container = styled.div<{ themeName: keyof typeof Theme.names }>`
  background-color: ${({ themeName }) =>
    themeName === Theme.names.dark
      ? core.colorsBackgroundDark[1]
      : core.colorsBackgroundLight[3]};
  color: ${({ themeName }) =>
    themeName === Theme.names.dark
      ? core.colorsTextIcon.highOnDark
      : core.colorsTextIcon.highOnLight};
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
  overflow: 'auto';
  transition: background ${core.motion.speedNormal};
`
