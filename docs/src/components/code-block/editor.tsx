import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'

import cx from 'classnames'
import Highlight, { Language, defaultProps } from 'prism-react-renderer'
import React, { HTMLAttributes } from 'react'

import styles from './styles.module.css'
import { darkTheme, lightTheme } from './theme'

interface EditorProps extends HTMLAttributes<HTMLPreElement> {
  children: string
  expanded: boolean
  language: Language
}
export const Editor: React.FC<EditorProps> = props => {
  const { children: code, expanded, language, ...rest } = props

  const theme = useTheme()
  const isDarkTheme = theme === Theme.names.dark
  const codeTheme = isDarkTheme ? darkTheme : lightTheme

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={codeTheme}
    >
      {highlight => {
        const { tokens, getLineProps, getTokenProps } = highlight

        const className = cx({
          [highlight.className]: true,
          [styles.editor]: true,
          [styles.editorExpanded]: expanded
        })

        return (
          <pre className={className} {...rest}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )
      }}
    </Highlight>
  )
}
