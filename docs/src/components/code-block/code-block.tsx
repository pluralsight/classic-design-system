import Theme from '@pluralsight/ps-design-system-theme'
import cx from 'classnames'
import React, { HTMLAttributes } from 'react'
import { Language } from 'prism-react-renderer'

import { CodeBlockContext } from './context'
import { ExamplesSwitcher, Example, parseCode } from './examples'
import styles from './styles.module.css'

interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  children: string
  noRender?: boolean
  switcher?: boolean
  startExpanded?: boolean
  themeName?: ValueOf<typeof Theme.names>
}
export const CodeBlock: React.FC<CodeBlockProps> = props => {
  const className = cx(styles.codeBlock, props.className)

  const language = props.className?.replace(/language-/, '') as Language
  const examples = parseCode(props.children)
  const firstExample = examples[0]

  return (
    <CodeBlockContext.Provider
      value={{
        language,
        noRender: props.noRender,
        startExpanded: props.startExpanded,
        themeNameOverride: props.themeName
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
