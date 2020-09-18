import Dropdown from '@pluralsight/ps-design-system-dropdown'
import cx from 'classnames'
import * as Text from '@pluralsight/ps-design-system-text'

import frontmatter from '@github-docs/frontmatter'
import { Language } from 'prism-react-renderer'
import React, { HTMLAttributes, useState } from 'react'

import { H2 } from '../mdx'

import styles from './styles.module.css'
import { Editor } from './editor'
import { Preview } from './preview'

import {
  Actions,
  ActionsLeft,
  ActionsRight,
  CopyAction,
  CodeSandboxAction,
  ExpandAction
} from './actions'

export interface ExampleData {
  code: string
  description: string
  id: string
  title: string
  value: string
}

interface ExamplesSwitcherProps extends HTMLAttributes<HTMLDivElement> {
  examples: ExampleData[]
  language: Language
  startExpanded: boolean
}
export const ExamplesSwitcher: React.FC<ExamplesSwitcherProps> = props => {
  const { examples, language, className, startExpanded, ...rest } = props

  const [selectedOption, setSelectedOption] = React.useState(examples[0].value)

  function handleDropdownChange(_evt: React.ChangeEvent, value: string) {
    setSelectedOption(value)
  }

  return (
    <div {...rest}>
      <div className={styles.title}>
        <H2>Examples</H2>

        <Dropdown
          menu={examples.map(example => {
            return (
              <Dropdown.Item key={example.id} value={example.value}>
                {example.title}
              </Dropdown.Item>
            )
          })}
          onChange={handleDropdownChange}
          value={selectedOption}
        />
      </div>

      <div>
        {examples
          .filter(example => example.value === selectedOption)
          .map(example => {
            return (
              <Example
                key={example.id}
                className={className}
                code={example.code}
                description={example.description}
                language={language}
                startExpanded={startExpanded}
              />
            )
          })}
      </div>
    </div>
  )
}

interface ExampleProps extends HTMLAttributes<HTMLDivElement> {
  description?: string
  code: string
  language: Language
  startExpanded?: boolean
}
export const Example: React.FC<ExampleProps> = props => {
  const { code, description, language, startExpanded = true, ...rest } = props

  const [expanded, setExpanded] = useState<boolean>(startExpanded)
  const toggleExpanded = () => setExpanded(!expanded)

  const className = cx(styles.example, props.className)

  return (
    <div>
      {description && <Text.P>{description}</Text.P>}

      <div {...rest} className={className}>
        <Preview code={code} language={language} />

        <Actions>
          <ActionsLeft>
            <ExpandAction expanded={expanded} onClick={toggleExpanded} />
          </ActionsLeft>

          <ActionsRight>
            <CopyAction code={props.code} />
            <CodeSandboxAction code={props.code} />
          </ActionsRight>
        </Actions>

        <Editor expanded={expanded} language={language}>
          {props.code}
        </Editor>
      </div>
    </div>
  )
}

export function parceCode(
  code: string,
  delimiter = '\n\n===\n\n'
): ExampleData[] {
  return code.split(delimiter).map((str: string, index) => {
    const { content: code, data = {} } = frontmatter(str)

    const description = data.description || ''
    const title = data.title || `Example #${index}`
    const value = `value ${index}`

    return { id: `${index}`, code, description, title, value }
  })
}
