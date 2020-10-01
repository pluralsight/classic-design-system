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
  />
]

const BodyAttributes = {}

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes
}) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
  setBodyAttributes(BodyAttributes)
}
