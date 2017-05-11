'use strict'

const frontMatter = require('front-matter'),
  Remarkable = require('remarkable'),
  escapeHtml = require('remarkable/lib/common/utils').escapeHtml,
  md = new Remarkable()

/**
 * Wraps the code and jsx in an html component
 * for styling it later
 * @param   {string} runOutput Code to be run in the styleguide
 * @param   {string} sourceOutput Source that will be shown as example
 * @param   {string} langClass  CSS class for the code block
 * @returns {string}            Code block with souce and run code
 */
function codeBlockTemplate({ runOutput, sourceOutput, langClass }) {
  const runHtml = runOutput ? `<div class="run">${runOutput}</div>` : ''
  const sourceHtml = sourceOutput
    ? `<div class="source">
        <pre><code${langClass ? ` class="${langClass}"` : ''}>
          ${sourceOutput}
        </code></pre>
      </div>`
    : ''
  return `
<div class="example">
  ${runHtml}
  ${sourceHtml}
</div>`
}

const formatEscape = src => escapeHtml(src)

const formatReact = src =>
  src
    .replace(/{/g, '{"{"{')
    .replace(/}/g, '{"}"}')
    .replace(/{"{"{/g, '{"{"}')
    .replace(/(\n)/g, '{"\\n"}')
    .replace(/class=/g, 'className=')

/**
 * Parse a code block to have a source and a run code
 * @param   {String}   code       - Raw html code
 * @param   {String}   lang       - Language indicated in the code block
 * @param   {String}   langPrefix - Language prefix
 * @returns {String}                Code block with souce and run code
 */
function parseCodeBlock(code, lang, langPrefix) {
  return codeBlockTemplate({
    runOutput: lang === 'react' ? formatReact(code) : null,
    sourceOutput: formatEscape(code),
    langClass: lang
      ? lang === 'react' ? `${langPrefix}html` : `${langPrefix}${lang}`
      : null
  })
}

/**
 * @typedef MarkdownObject
 * @type {Object}
 * @property {Object} attributes - Map of properties from the front matter
 * @property {String} body       - Markdown
 */

/**
 * @typedef HTMLObject
 * @type {Object}
 * @property {String} html    - HTML parsed from markdown
 * @property {Object} imports - Map of dependencies
 */

/**
 * Parse Markdown to HTML with code blocks
 * @param   {MarkdownObject} markdown - Markdown attributes and body
 * @returns {HTMLObject}                HTML and imports
 */
function parseMarkdown(markdown) {
  return new Promise((resolve, reject) => {
    let html

    const options = {
      xhtmlOut: true
    }

    md.set(options)

    md.renderer.rules.fence_custom.render = (tokens, idx, options) => {
      // gets tags applied to fence blocks ```react html
      const codeTags = tokens[idx].params.split(/\s+/g)
      return parseCodeBlock(
        tokens[idx].content,
        codeTags[codeTags.length - 1],
        options.langPrefix
      )
    }

    try {
      html = md.render(markdown.body)
      resolve({ html, attributes: markdown.attributes })
    } catch (err) {
      return reject(err)
    }
  })
}

/**
 * Extract FrontMatter from markdown
 * and return a separate object with keys
 * and a markdown body
 * @param   {String} markdown - Markdown string to be parsed
 * @returns {MarkdownObject}    Markdown attributes and body
 */
function parseFrontMatter(markdown) {
  return frontMatter(markdown)
}

/**
 * Parse markdown, extract the front matter
 * and return the body and imports
 * @param  {String} markdown - Markdown string to be parsed
 * @returns {HTMLObject}       HTML and imports
 */
function parse(markdown) {
  return parseMarkdown(parseFrontMatter(markdown))
}

module.exports = {
  codeBlockTemplate,
  parse,
  parseCodeBlock,
  parseFrontMatter,
  parseMarkdown
}
