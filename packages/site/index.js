import { StaticRouter, Route, BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

import Chrome from './layouts/chrome'
import Components from './components'
import ComponentDetail from './components/detail'
import Home from './home'
import './index.css'

const routes = (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/components/" component={Components} />
    <Route path="/components/:componentId/" component={ComponentDetail} />
  </div>
)

const Html = props => (
  <html>
    <head>
      <title>{props.title || 'design-system'}</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/atom-one-dark.min.css"
        type="text/css"
        media="all"
      />
      <link rel="stylesheet" href="/design-system/styles.css" />
    </head>
    <body>
      <div id="app">
        {props.children}
      </div>
      <script src="/design-system/index.js" />
    </body>
  </html>
)

export default locals => {
  return ReactDOMServer.renderToStaticMarkup(
    <StaticRouter basename="/design-system" location={locals.path} context={{}}>
      <Html>
        {routes}
      </Html>
    </StaticRouter>
  )
}

if (typeof document != 'undefined') {
  ReactDOM.render(
    <BrowserRouter basename="/design-system">{routes}</BrowserRouter>,
    document.getElementById('app')
  )
}
