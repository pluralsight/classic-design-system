import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import cx from 'classnames'
import React, { HTMLAttributes } from 'react'
import { Language } from 'prism-react-renderer'

import { ExamplesSwitcher, Example, parseCode } from './examples'
import styles from './styles.module.css'

interface CodeBlockContextValue {
  language: Language
  noRender: boolean
  startExpanded: boolean
}
export const CodeBlockContext = React.createContext<CodeBlockContextValue>({
  language: 'typescript',
  noRender: false,
  startExpanded: false
})

interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  children: string
  noRender?: boolean
  switcher?: boolean
  startExpanded?: boolean
}
export const CodeBlock: React.FC<CodeBlockProps> = props => {
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

  const language = props.className?.replace(/language-/, '') as Language
  const examples = parseCode(props.children)
  const firstExample = examples[0]

  return (
    <CodeBlockContext.Provider
      value={{
        language,
        noRender: props.noRender,
        startExpanded: props.startExpanded
      }}
    >
      <div className={className}>
        {props.switcher ? (
          <ExamplesSwitcher examples={examples} />
        ) : (
          <>
            <Example
              description={firstExample.description}
              code={firstExample.code}
            />
          </>
        )}
      </div>
    </CodeBlockContext.Provider>
  )
}
