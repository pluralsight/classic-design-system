import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import cx from 'classnames'
import React, { HTMLAttributes } from 'react'
import { Language } from 'prism-react-renderer'

import { ExamplesSwitcher, Example, parseCode } from './examples'
import styles from './styles.module.css'

interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  children: string
  noRender?: boolean
  switcher?: boolean
  startExpanded?: boolean
}
export const CodeBlock: React.FC<CodeBlockProps> = props => {
  const { children, noRender, switcher = false, startExpanded, ...rest } = props
  const language = props.className?.replace(/language-/, '') as Language

  const theme = useTheme()
  const isDarkTheme = theme === Theme.names.dark
  const className = cx(
    {
      [styles.codeBlock]: true,
      [styles.dark]: isDarkTheme,
      [styles.light]: !isDarkTheme
    },
    props.className
  )

  const examples = parseCode(children)
  const firstExample = examples[0]

  return (
    <div {...rest} className={className}>
      {switcher ? (
        <ExamplesSwitcher
          language={language}
          examples={examples}
          noRender={noRender}
          startExpanded={startExpanded}
        />
      ) : (
        <>
          <Example
            description={firstExample.description}
            language={language}
            code={firstExample.code}
            noRender={noRender}
            startExpanded={startExpanded}
          />
        </>
      )}
    </div>
  )
}
