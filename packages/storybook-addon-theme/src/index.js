import { compose, css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import addons, { makeDecorator } from '@storybook/addons'
import { STORY_CHANGED } from '@storybook/core-events'

import core from '@pluralsight/ps-design-system-core'
import Theme, { names } from '@pluralsight/ps-design-system-theme/react'

import { EVENTS } from './constants.js'

const styles = {
  decorator: ({ themeName }) => {
    const base = css({
      overflow: 'scroll',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      transition: `background ${core.motion.speedNormal}`,
      backgroundSize: 'cover',
      background: 'transparent'
    })

    const theme = css(
      themeName === names.dark && { background: core.colors.gray06 },
      themeName === names.light && { background: core.colors.bone }
    )

    return compose(
      base,
      theme
    )
  }
}

export default makeDecorator({
  name: 'withTheme',
  parameterName: 'theme',
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel()

    return (
      <ThemeDecorator channel={channel}>{getStory(context)}</ThemeDecorator>
    )
  }
})

function ThemeDecorator({ channel, children, ...props }) {
  const [themeName, setTheme] = React.useState(names.dark)

  React.useEffect(() => {
    channel.addListener(STORY_CHANGED, reset)
    channel.addListener(EVENTS.change, setTheme)

    return () => {
      channel.removeListener(STORY_CHANGED, reset)
      channel.removeListener(EVENTS.change, setTheme)
    }
  }, [channel])

  function reset() {
    setTheme(names.dark)
  }

  return (
    <div {...styles.decorator({ themeName })}>
      <Theme name={themeName}>{children}</Theme>
    </div>
  )
}

ThemeDecorator.propTypes = {
  channel: PropTypes.shape({
    addListener: PropTypes.func.isRequired,
    removeListener: PropTypes.func.isRequired
  }).isRequired,
  children: PropTypes.node
}
