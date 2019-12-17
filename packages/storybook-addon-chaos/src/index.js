/* eslint-disable react/prop-types */

import { css } from 'glamor'
import React, { useEffect, useState } from 'react'
import pseudoLocalization from 'pseudo-localization'
import addons, { makeDecorator } from '@storybook/addons'

import { EVENTS, PARAM_KEY } from './constants.js'

export default makeDecorator({
  name: 'withChaos',
  parameterName: PARAM_KEY,
  wrapper: (getStory, context, options) => {
    const channel = addons.getChannel()

    return (
      <ChaosDecorator channel={channel}>{getStory(context)}</ChaosDecorator>
    )
  }
})

function ChaosDecorator({ channel, children }) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    channel.on(EVENTS.enable, () => {
      setEnabled(true)
    })
  }, [channel])

  useEffect(() => {
    if (!enabled) return

    addChaosStyles()

    pseudoLocalization.start()
  }, [enabled])

  return <div>{children}</div>
}

const addChaosStyles = () => {
  css.global('html,body', {
    fontSize: 30,
    lineHeight: 3.3
  })
}

if (module && module.hot && module.hot.decline) module.hot.decline()
