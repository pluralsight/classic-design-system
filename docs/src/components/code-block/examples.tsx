import Dropdown from '@pluralsight/ps-design-system-dropdown'
import * as Text from '@pluralsight/ps-design-system-text'

import frontmatter from '@github-docs/frontmatter'
import React, { useContext, useState } from 'react'

import { CodeBlockContext } from './index'
import { H2 } from '../mdx'

import {
  Actions,
  ActionsLeft,
  ActionsRight,
  CopyAction,
  CodeSandboxAction,
  ExpandAction
} from './actions'
import { Editor } from './editor'
import { Preview } from './preview'
import styles from './styles.module.css'

export interface ExampleData {
  code: string
  description: string
  id: string
  title: string
  value: string
}

interface ExamplesSwitcherProps {
  examples: ExampleData[]
}
export const ExamplesSwitcher: React.FC<ExamplesSwitcherProps> = props => {
  const [selectedOption, setSelectedOption] = useState(props.examples[0].value)

  function handleDropdownChange(_evt: React.ChangeEvent, value: string) {
    setSelectedOption(value)
  }

  return (
    <div>
      <header className={styles.header}>
        <H2 className={styles.title}>Examples</H2>

        <Dropdown
          menu={props.examples.map(example => {
            return (
              <Dropdown.Item key={example.id} value={example.value}>
                {example.title}
              </Dropdown.Item>
            )
          })}
          onChange={handleDropdownChange}
          value={selectedOption}
        />
      </header>

      <div>
        {props.examples
          .filter(example => example.value === selectedOption)
          .map(example => {
            return (
              <Example
                key={example.id}
                code={example.code}
                description={example.description}
              />
            )
          })}
      </div>
    </div>
  )
}

function calculateStartExpanded(code: string, startExpanded: boolean) {
  if (startExpanded) return startExpanded
  const AUTO_EXPAND_LINE_COUNT_THRESHOLD = 5
  const lineCount = code.split(/\r\n|\r|\n/).length
  return lineCount <= AUTO_EXPAND_LINE_COUNT_THRESHOLD
}

interface ExampleProps {
  description?: string
  code: string
}
export const Example: React.FC<ExampleProps> = props => {
  const context = useContext(CodeBlockContext)
  const [expanded, setExpanded] = useState<boolean>(
    calculateStartExpanded(props.code, context.startExpanded)
  )
  const toggleExpanded = () => setExpanded(!expanded)

  return (
    <div>
      {props.description && <Text.P>{props.description}</Text.P>}

      <div className={styles.example}>
        <Preview code={props.code} />

        <Actions>
          <ActionsLeft>
            <ExpandAction expanded={expanded} onClick={toggleExpanded} />
          </ActionsLeft>

          <ActionsRight>
            <CopyAction code={props.code} />
            <CodeSandboxAction code={props.code} />
          </ActionsRight>
        </Actions>

        <Editor expanded={expanded} onClick={toggleExpanded}>
          {props.code}
        </Editor>
      </div>
    </div>
  )
}

export function parseCode(
  code: string,
  delimiter = '\n\n===\n\n'
): ExampleData[] {
  return code.split(delimiter).map((str: string, index) => {
    const { content = '', data = {} } = frontmatter(str)
    const code = content.trim()

    const description = data.description || ''
    const title = data.title || `Example #${index}`
    const value = `value ${index}`

    return { id: `${index}`, code, description, title, value }
  })
}
