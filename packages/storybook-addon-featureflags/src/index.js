import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import addons, { makeDecorator } from '@storybook/addons'
import { STORY_CHANGED } from '@storybook/core-events'

import FeatureFlags from '@pluralsight/ps-design-system-featureflags'

import { EVENTS, featFlags } from './constants.js'

const flagsObj = featFlags.reduce((acc, cur) => ({ ...acc, [cur]: false }), {})

const FeatureFlagsDecorator = ({ channel, children, ...props }) => {
  const [flags, setFlags] = React.useState(flagsObj)
  useEffect(() => {
    const updateFlags = arg => setFlags({ ...flags, ...arg })
    const reset = _ => updateFlags(flagsObj)
    channel.addListener(STORY_CHANGED, reset)
    channel.addListener(EVENTS.change, updateFlags)

    return () => {
      channel.removeListener(STORY_CHANGED, reset)
      channel.removeListener(EVENTS.change, updateFlags)
    }
  }, [channel, flags])
  return <FeatureFlags flags={flags}>{children}</FeatureFlags>
}

FeatureFlagsDecorator.propTypes = {
  channel: PropTypes.shape({
    addListener: PropTypes.func.isRequired,
    removeListener: PropTypes.func.isRequired
  }).isRequired,
  children: PropTypes.node
}

export default makeDecorator({
  name: 'withFeatureFlags',
  parameterName: 'flags',
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel()

    return (
      <FeatureFlagsDecorator channel={channel}>
        {getStory(context)}
      </FeatureFlagsDecorator>
    )
  }
})
