import Highlight, { defaultProps } from 'prism-react-renderer'
import PropTypes from 'prop-types'
import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

import scope from './scope.js'
import theme from './theme.js'

function CodeBlock(props) {
  const { children: code, language = 'jsx', live = false, ...rest } = props

  // NOTE: if using mdx we can get the language from the className
  // const language = className.replace(/language-/, '')

  return (
    <div className="code-block" {...rest}>
      {live && (
        <LiveProvider
          code={code}
          language={language}
          scope={scope}
          theme={theme}
        >
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      )}

      {!live && (
        <Highlight
          {...defaultProps}
          code={code}
          language={language}
          theme={theme}
        >
          {({ tokens, getLineProps, getTokenProps }) => (
            <>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </>
          )}
        </Highlight>
      )}
    </div>
  )
}

CodeBlock.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.string,
  live: PropTypes.bool
}

export default CodeBlock
