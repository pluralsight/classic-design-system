import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React from 'react'

import * as core from '@pluralsight/ps-design-system-core'
import Theme, { names } from '@pluralsight/ps-design-system-theme'

export default function FrameComponent({ children, theme = names.light }) {
  useInjectStylesheet(
    'https://cloud.typography.com/6966154/6397212/css/fonts.css'
  )
  useInjectStylesheet(
    'https://unpkg.com/@pluralsight/ps-design-system-normalize'
  )

  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
          }
        `}
      />

      <Theme name={theme}>
        <Container theme={theme}>{children}</Container>
      </Theme>
    </>
  )
}

FrameComponent.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(Object.keys(names))
}

const Container = styled.div`
  background-color: ${props =>
    props.theme === names.light
      ? core.colorsBackgroundLight[2]
      : core.colorsBackgroundDark[2]};
  height: 100vh;
  overflow: auto;
  width: 100%;
`

function useInjectStylesheet(url) {
  React.useEffect(() => {
    const link = document.createElement('link')
    const head = document.getElementsByTagName('head')[0]

    link.href = url
    link.rel = 'stylesheet'
    head.appendChild(link)

    return function() {
      head.removeChild(link)
    }
  }, [url])
}
