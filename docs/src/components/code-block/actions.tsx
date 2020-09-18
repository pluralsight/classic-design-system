import Button from '@pluralsight/ps-design-system-button'
import cx from 'classnames'
import React, { HTMLAttributes, useEffect, useState } from 'react'
import CodeSandboxer from 'react-codesandboxer'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import pkg from '../../../package.json'
import styles from './styles.module.css'

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
        '@babel/runtime': 'latest'
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
export const CopyAction: React.FC<CopyActionProps> = props => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) return

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
