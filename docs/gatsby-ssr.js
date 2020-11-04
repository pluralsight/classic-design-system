// Import React so that you can use JSX in HeadComponents
const React = require('react')

const HtmlAttributes = {
  lang: 'en'
}

const HeadComponents = [
  <link
    href="https://cloud.typography.com/6966154/6397212/css/fonts.css"
    key="font-import"
    referrerPolicy="strict-origin"
    rel="stylesheet"
  />,
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

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setPostBodyComponents
}) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
  setPostBodyComponents(BodyComponents)
}
