import ScreenReaderOnly from '@pluralsight/ps-design-system-screenreaderonly'
import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'

import cx from 'classnames'
import Highlight, { defaultProps } from 'prism-react-renderer'
import React, { useContext, MouseEvent } from 'react'

import { CodeBlockContext } from './index'
import styles from './styles.module.css'
import { darkTheme, lightTheme } from './theme'

interface EditorProps {
  children: string
  expanded: boolean
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}
export const Editor: React.FC<EditorProps> = props => {
  const context = useContext(CodeBlockContext)
  const themeName = useTheme()
  const isDarkTheme = themeName === Theme.names.dark
  const codeTheme = isDarkTheme ? darkTheme : lightTheme

  return (
    <Highlight
      {...defaultProps}
      code={props.children}
      language={context.language}
      theme={codeTheme}
    >
      {highlight => {
        const { tokens, getLineProps, getTokenProps } = highlight

        const className = cx({
          [highlight.className]: true,
          [styles.editor]: true,
          [styles.editorExpanded]: props.expanded
        })

        return (
          <pre className={className}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
            {!props.expanded && (
              <>
                <button
                  className={styles.clickToExpand}
                  onClick={(evt: MouseEvent<HTMLButtonElement>) => {
                    if (!props.expanded) props.onClick(evt)
                  }}
                >
                  <ScreenReaderOnly>Click to expand</ScreenReaderOnly>
                </button>
                <div className={styles.editorFade} />
              </>
            )}
          </pre>
        )
      }}
    </Highlight>
  )
}
