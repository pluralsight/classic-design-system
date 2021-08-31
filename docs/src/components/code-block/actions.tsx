import Button from '@pluralsight/ps-design-system-button'
import cx from 'classnames'
import React, { HTMLAttributes, useEffect, useState } from 'react'
import CodeSandboxer from 'react-codesandboxer'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import pkg from '../../../package.json'
import usePrevious from '../../hooks/use-previous'
import styles from './styles.module.css'

const CODESANDBOX_CSS_FILE = `
html,
body {
  background: var(--ps-colors-background-dark-2);
}
`
const CODESANDBOX_INDEX_FILE = `
import "@pluralsight/ps-design-system-core";
import "@pluralsight/ps-design-system-normalize";
import "./styles.css"

import Theme from '@pluralsight/ps-design-system-theme'
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Example from './example';

function App(){
  return (
    <Theme>
      <Example />
    </Theme>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
`

export const Actions: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  const { className: cn, ...rest } = props
  const className = cx(styles.actions, cn)

  return <div className={className} {...rest} />
}

export const ActionsLeft: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  const { className: cn, ...rest } = props
  const className = cx(styles.actionsLeft, cn)

  return <div className={className} {...rest} />
}

export const ActionsRight: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  const { className: cn, ...rest } = props
  const className = cx(styles.actionsRight, cn)

  return <div className={className} {...rest} />
}

interface CodeSandboxActionProps extends HTMLAttributes<HTMLButtonElement> {
  code: string
}
export const CodeSandboxAction: React.FC<CodeSandboxActionProps> = props => {
  const gitInfo = {
    account: 'pluralsight',
    repository: 'design-system',
    branch: 'master',
    host: 'github'
  }

  return (
    <CodeSandboxer
      example={props.code}
      examplePath="does/not/do/anything/but/is/required.tsx"
      dependencies={{
        '@pluralsight/ps-design-system-core': 'latest',
        '@pluralsight/ps-design-system-featureflags': 'latest',
        '@pluralsight/ps-design-system-normalize': 'latest',
        '@pluralsight/ps-design-system-theme': 'latest',
        '@babel/runtime': 'latest',
        invariant: 'latest'
      }}
      gitInfo={gitInfo}
      pkgJSON={pkg}
      providedFiles={{
        'index.tsx': { content: CODESANDBOX_INDEX_FILE },
        'styles.css': { content: CODESANDBOX_CSS_FILE }
      }}
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
export const CopyAction: React.FC<CopyActionProps> = props => {
  const [copied, setCopied] = useState(false)
  const prevCopied = usePrevious(copied)

  useEffect(() => {
    if (prevCopied === copied) return
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
export const ExpandAction: React.FC<ExpandActionProps> = props => {
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
