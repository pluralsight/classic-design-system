import Head from 'next/head'
import React from 'react'

export default _ => (
  <Head>
    <title>Pluralsight Design System</title>
    <link rel="shortcut icon" type="image/png" href="/static/img/favicon.png" />

    <meta name="HandheldFriendly" content="True" />
    <meta name="MobileOptimized" content="320" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cloud.typography.com/6966154/691568/css/fonts.css"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Source+Code+Pro:500"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/@pluralsight/ps-design-system-normalize"
    />
  </Head>
)
