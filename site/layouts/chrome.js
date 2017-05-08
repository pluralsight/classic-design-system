import React from 'react'

export default props => (
  <html>
    <head>
      <link rel="stylesheet" href="/roboto/styles.css" />
    </head>
    <body>
      <div>
        {props.children}
      </div>
      <script src="/roboto/index.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/atom-one-dark.min.css"
        type="text/css"
        media="all"
      />
      <script>hljs.initHighlightingOnLoad();</script>
    </body>
  </html>
)
