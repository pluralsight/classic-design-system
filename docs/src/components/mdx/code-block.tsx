import Carousel from '@pluralsight/ps-design-system-carousel'
import Card from '@pluralsight/ps-design-system-card'
import Button from '@pluralsight/ps-design-system-button'
import {
  CheckIcon,
  ChannelIcon,
  PencilIcon,
  PlayIcon,
  UserIcon,
} from '@pluralsight/ps-design-system-icon'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

import { transform } from '@babel/core'
import frontmatter from '@github-docs/frontmatter'
import Dropdown from '@pluralsight/ps-design-system-dropdown'
import * as Text from '@pluralsight/ps-design-system-text'
import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import cx from 'classnames'
import Prism from 'prismjs/components/prism-core'
import Highlight, { PrismTheme, defaultProps } from 'prism-react-renderer'
import React, { HTMLAttributes, useEffect, useState } from 'react'
import CodeSandboxer from 'react-codesandboxer'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { LiveError, LiveProvider, LivePreview } from 'react-live'

import pkg from '../../../package.json'
import { H2 } from '../mdx'
import styles from './code-block.module.css'
import { darkTheme, lightTheme } from './code-block-theme'

interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  metastring?: null
  live?: boolean
  startExpanded?: boolean
}
export const CodeBlock: React.FC<CodeBlockProps> = (props) => {
  const isSwitcher = /switcher/.test(props.metastring)
  const language = props.className.replace(/language-/, '')

  const examples = props.children.split('\n\n---\n\n').map((example, i) => {
    const { content, data } = frontmatter(example)
    return {
      i,
      code: content,
      meta: data || {},
    }
  })

  const [selectedOption, setSelectedOption] = React.useState(
    'value' + examples[0].i
  )

  if (isSwitcher) {
    return (
      <div>
        <div className={styles.title}>
          <H2>Examples</H2>
          <Dropdown
            onChange={(evt, value, label) => setSelectedOption(value)}
            menu={examples.map((example) => (
              <Dropdown.Item key={example.i} value={'value' + example.i}>
                {example.meta.title || 'Example #' + example.i}
              </Dropdown.Item>
            ))}
            value={selectedOption}
          />
        </div>

        <div>
          {examples.map((example, i) => {
            return 'value' + i === selectedOption ? (
              <React.Fragment key={i}>
                <Text.P>{example.meta.description}</Text.P>
                <Example
                  key={i}
                  language={language}
                  code={example.code}
                  className={props.className}
                  startExpanded={props.startExpanded}
                />
              </React.Fragment>
            ) : null
          })}
        </div>
      </div>
    )
  } else {
    return (
      <>
        <Text.P>{examples[0].meta.description}</Text.P>
        <Example
          language={language}
          className={props.className}
          code={examples[0].code}
        />
      </>
    )
  }
}

interface ExampleProps extends HTMLAttributes<HTMLDivElement> {
  code: string
  language: string
  startExpanded?: boolean
}
const Example: React.FC<ExampleProps> = (props) => {
  const { startExpanded = false } = props
  const theme = useTheme()
  const isDarkTheme = theme === Theme.names.dark
  const codeTheme = isDarkTheme ? darkTheme : lightTheme

  const [expanded, setExpanded] = useState<boolean>(startExpanded)
  const toggleExpanded = () => setExpanded(!expanded)

  const className = cx(
    {
      [styles.codeBlock]: true,
      [styles.dark]: isDarkTheme,
      [styles.light]: !isDarkTheme,
    },
    props.className
  )

  const preview = formatPreview(props.code)

  return (
    <div className={className}>
      <LiveProvider
        code={preview.code}
        scope={preview.scope}
        noInline
        transformCode={(code) => {
          const transformed = transform(code, {
            filename: 'example.tsx',
            presets: [require('@babel/preset-typescript')],
          }).code

          return transformed
        }}
      >
        <LiveError />
        <LivePreview className={styles.preview} />

        <Actions>
          <ActionsLeft>
            <ExpandAction expanded={expanded} onClick={toggleExpanded} />
          </ActionsLeft>

          <ActionsRight>
            <CopyAction code={props.code} />
            <CodeSandboxAction code={props.code} />
          </ActionsRight>
        </Actions>

        <Editor expanded={expanded} language={props.language} theme={codeTheme}>
          {props.code}
        </Editor>
      </LiveProvider>
    </div>
  )
}
CodeBlock.defaultProps = { className: '', live: false, startExpanded: false }

const Actions: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { className: cn, ...rest } = props
  const className = cx(styles.actions, cn)

  return <div className={className} {...rest} />
}
const ActionsLeft: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { className: cn, ...rest } = props
  const className = cx(styles.actionsLeft, cn)

  return <div className={className} {...rest} />
}
const ActionsRight: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { className: cn, ...rest } = props
  const className = cx(styles.actionsRight, cn)

  return <div className={className} {...rest} />
}

interface CodeSandboxActionProps extends HTMLAttributes<HTMLButtonElement> {
  code: string
}
const CodeSandboxAction: React.FC<CodeSandboxActionProps> = (props) => {
  const gitInfo = {
    account: 'pluralsight',
    repository: 'design-system',
    branch: 'master',
    host: 'github',
  }

  return (
    <CodeSandboxer
      example={props.code}
      examplePath="does/not/do/anything/but/is/required.tsx"
      dependencies={{
        '@babel/runtime': 'latest',
      }}
      gitInfo={gitInfo}
      pkgJSON={pkg}
      template="create-react-app-typescript"
    >
      {(props: { error: string; isDeploying: boolean; isLoading: boolean }) => {
        const { error, isDeploying, isLoading } = props
        const deploying = isDeploying || isLoading || false

        const buttonText = deploying ? 'Opening...' : 'Open in Codesandbox'

        if (error) console.log(error)

        return (
          <Button
            appearance={Button.appearances.flat}
            disabled={deploying}
            size={Button.sizes.xSmall}
            type="submit"
          >
            {error ? 'Error' : buttonText}
          </Button>
        )
      }}
    </CodeSandboxer>
  )
}

interface CopyActionProps extends HTMLAttributes<HTMLButtonElement> {
  code: string
}
const CopyAction: React.FC<CopyActionProps> = (props) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return

    const timer = setTimeout(() => setCopied(false), 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [copied])

  const handleCopy = () => {
    setCopied(true)
  }

  return copied ? (
    <Button
      appearance={Button.appearances.flat}
      disabled
      size={Button.sizes.xSmall}
    >
      Copied!
    </Button>
  ) : (
    <CopyToClipboard text={props.code} onCopy={handleCopy}>
      <Button appearance={Button.appearances.flat} size={Button.sizes.xSmall}>
        Copy
      </Button>
    </CopyToClipboard>
  )
}

interface ExpandActionProps extends HTMLAttributes<HTMLButtonElement> {
  expanded: boolean
}
const ExpandAction: React.FC<ExpandActionProps> = (props) => {
  const { expanded, ...rest } = props

  return (
    <Button
      appearance={Button.appearances.flat}
      size={Button.sizes.xSmall}
      {...rest}
    >
      {expanded ? 'Collapse' : 'Expand'} code
    </Button>
  )
}

interface EditorProps extends HTMLAttributes<HTMLPreElement> {
  expanded: boolean
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

        const className = cx({
          [highlight.className]: true,
          [styles.editor]: true,
          [styles.editorExpanded]: props.expanded,
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
          </pre>
        )
      }}
    </Highlight>
  )
}

interface PreviewData {
  code: string
  scope: Record<string, unknown>
}
export function formatPreview(code: string): PreviewData {
  function replaceExport(data: PreviewData): PreviewData {
    return {
      ...data,
      code: data.code.replace(/export default (.*)/, 'render(<$1 />)'),
    }
  }

  function moveImportsToScope(data: PreviewData): PreviewData {
    const findAllImports = /import .+ from '.+'/g
    let singleImportMatch = null
    const newData = { ...data }

    const imports = []
    while ((singleImportMatch = findAllImports.exec(data.code)) !== null) {
      const singleImportString = singleImportMatch[0]
      const findPackageName = /.*'(.+)'.*/
      const packageName = singleImportString.replace(findPackageName, '$1')

      imports.push({
        start: singleImportMatch.index,
        end: singleImportMatch.index + singleImportMatch[0].length,
        packageName,
      })
    }

    imports.reverse().forEach((range) => {
      const codeWithoutImport =
        newData.code.slice(0, range.start) + newData.code.slice(range.end)
      newData.code = codeWithoutImport
      newData.scope = {
        ...newData.scope,
        ...mapPackageNameToScopes(range.packageName),
      }
    })

    return newData
  }

  function mapPackageNameToScopes(
    packageName: string
  ): Record<string, unknown> | undefined {
    return {
      // NOTE: as needed, add other common imports for packages used in examples
      '@pluralsight/ps-design-system-carousel': { Carousel },
      '@pluralsight/ps-design-system-card': { Card },
      '@pluralsight/ps-design-system-button': { Button },
      '@pluralsight/ps-design-system-icon': {
        CheckIcon,
        ChannelIcon,
        PencilIcon,
        PlayIcon,
        UserIcon,
      },
      react: { React },
      'react-router-dom': { Router, withRouter },
    }[packageName]
  }

  return moveImportsToScope(
    replaceExport({
      code,
      scope: {},
    })
  )
}
