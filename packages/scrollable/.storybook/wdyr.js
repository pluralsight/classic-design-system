import React from 'react'

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render')

  whyDidYouRender(React, {
    collapseGroups: true,
    diffNameColor: 'red',
    include: [/^Scrollable/],
    onlyLogs: true,
    titleColor: 'green',
    trackAllPureComponents: true,
    trackHooks: true
  })
}
