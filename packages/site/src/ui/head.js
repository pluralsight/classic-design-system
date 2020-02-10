import NextHead from 'next/head.js'
import React from 'react'

export default function Head() {
  return (
    <NextHead>
      <title>Pluralsight Design System</title>

      <link
        rel="shortcut icon"
        type="image/png"
        href="/static/img/favicon.png"
      />

      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        rel="stylesheet"
        href="https://cloud.typography.com/6966154/6397212/css/fonts.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Code+Pro:500"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/@pluralsight/ps-design-system-normalize@latest/dist/index.css"
      />
    </NextHead>
  )
}
