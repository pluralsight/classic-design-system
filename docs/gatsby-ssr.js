// Import React so that you can use JSX in HeadComponents
const Theme = require('@pluralsight/ps-design-system-theme')
const React = require('react')

const HtmlAttributes = {
  lang: 'en'
}

const HeadComponents = [
  <link
    key="docsearch-css"
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
  />
]

const BodyComponents = [
  <script
    key="docsearch-js"
    src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
  />
]

function FirstRenderTheme() {
  const codeToRunOnClient = `
(function setThemeOnBody() {
function getCookie(name) {
  const cookie = {}
  document.cookie.split(';').forEach(function (el) {
    const [k, v] = el.split('=')
    cookie[k.trim()] = v
  })
  return cookie[name]
}

const cookieThemeName = getCookie('psds-docs-theme')

const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches

const initialThemeName = cookieThemeName || (prefersLight && '${Theme.names.light}') || '${Theme.names.dark}'

document.body.setAttribute('data-psds-theme', initialThemeName)
})()
  `
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setPostBodyComponents,
  setPreBodyComponents
}) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
  setPostBodyComponents(BodyComponents)
  setPreBodyComponents(<FirstRenderTheme />)
}
