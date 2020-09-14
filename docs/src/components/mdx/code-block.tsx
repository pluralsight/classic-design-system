import Button from '@pluralsight/ps-design-system-button'
import Dropdown from '@pluralsight/ps-design-system-dropdown'
import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import cx from 'classnames'
import Prism from 'prismjs/components/prism-core'
import Highlight, { PrismTheme, defaultProps } from 'prism-react-renderer'
import React, { HTMLAttributes, useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { H2 } from '../mdx'
import styles from './code-block.module.css'
import { darkTheme, lightTheme } from './code-block-theme'

interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  metastring?: null
  live?: boolean
}

export const CodeBlock: React.FC<CodeBlockProps> = (props) => {
  const isSwitcher = /switcher/.test(props.metastring)
  const language = props.className.replace(/language-/, '')

  const codes = props.children.split('\n\n---\n\n')
  const options = isSwitcher
    ? Array.from(Array(codes.length)).map((_, i) => ({
        value: i,
        label: 'Example #' + i,
      }))
    : [{ value: 0, label: 'Single example' }]

  const [selectedOption, setSelectedOption] = React.useState(options[0].value)

  if (isSwitcher) {
    return (
      <div>
        <div className={styles.title}>
          <H2>Examples</H2>
          <Dropdown
            onChange={(evt, value, label) => setSelectedOption(value)}
            menu={options.map((opt) => (
              <Dropdown.Item key={opt.value} value={opt.value}>
                {opt.label}
              </Dropdown.Item>
            ))}
            value={selectedOption}
          />
        </div>
        <div>
          {codes.map((code, i) =>
            i === selectedOption ? (
              <Example
                key={i}
                language={language}
                code={code}
                className={props.className}
              />
            ) : null
          )}
        </div>
      </div>
    )
  } else {
    return (
      <Example
        language={language}
        className={props.className}
        code={codes[0]}
      />
    )
  }
}

interface ExampleProps {
  code: string
  language: string
}
const Example: React.FC<ExampleProps> = (props) => {
  const theme = useTheme()
  const isDarkTheme = theme === Theme.names.dark
  const codeTheme = isDarkTheme ? darkTheme : lightTheme

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return

    const timer = setTimeout(() => setCopied(false), 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [copied])

  const className = cx(
    {
      [styles.codeBlock]: true,
      [styles.dark]: isDarkTheme,
      [styles.light]: !isDarkTheme,
    },
    props.className
  )

  const handleCopy = () => {
    setCopied(true)
  }

  return (
    <div className={className}>
      <Actions>
        <div className={styles.actionsAlignRight}>
          {copied && (
            <Button
              appearance={Button.appearances.flat}
              disabled
              size={Button.sizes.xSmall}
            >
              Copied!
            </Button>
          )}

          {!copied && (
            <CopyToClipboard text={props.code} onCopy={handleCopy}>
              <Button
                appearance={Button.appearances.flat}
                size={Button.sizes.xSmall}
              >
                Copy
              </Button>
            </CopyToClipboard>
          )}
        </div>
      </Actions>

      <Editor language={props.language} theme={codeTheme}>
        {props.code}
      </Editor>
    </div>
  )
}

CodeBlock.defaultProps = { className: '', live: false }

const Actions: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { className: cn, ...rest } = props
  const className = cx(styles.actions, cn)

  return <div className={className} {...rest} />
}

interface EditorProps extends HTMLAttributes<HTMLPreElement> {
  language: string
  theme: PrismTheme
}
const Editor: React.FC<EditorProps> = (props) => {
  return (
    <Highlight
      {...defaultProps}
      code={props.children}
      language={props.language}
      theme={props.theme}
    >
      {(highlight) => {
        const { tokens, getLineProps, getTokenProps } = highlight

        const className = cx(highlight.className, styles.editor)

        return (
          <pre className={className}>
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
