import React, { FC } from 'react'
import { layout } from '@pluralsight/ps-design-system-core'
import { CloseIcon, CaretRightIcon } from '@pluralsight/ps-design-system-icon'
import Tag from '@pluralsight/ps-design-system-tag'
import Switch from '@pluralsight/ps-design-system-switch'
import Checkbox from '@pluralsight/ps-design-system-checkbox'
import * as Text from '@pluralsight/ps-design-system-text'

import { omit } from '../../components/util'
import { A } from '../../components/mdx'

import * as styles from './form-controls.module.css'

export const TagExample = () => {
  const [tags, setTags] = React.useState([
    'javascript',
    'flowtype',
    'static-types'
  ])
  const handleClick = tag => () => {
    setTags(tags.filter(t => t !== tag))
  }
  return (
    <div>
      {tags.map(tag => (
        <div
          key={tag}
          style={{
            display: 'inline-block',
            margin: `0 ${layout.spacingXSmall} ${layout.spacingXSmall} 0`
          }}
        >
          <Tag icon={<CloseIcon onClick={handleClick(tag)} />}>{tag}</Tag>
        </div>
      ))}
    </div>
  )
}

export const CheckboxExample = () => {
  const [values, setValues] = React.useState({})

  const handleCheck = (evt, checked, value, name) => {
    if (checked) {
      setValues({ ...values, [name]: value })
    } else {
      setValues(
        omit<Record<string, unknown>, string[]>(values, [
          name as unknown as string
        ])
      )
    }
  }

  const features = Object.keys(values)
  const checked = name => features.includes(name)
  return (
    <div>
      <Checkbox
        onCheck={handleCheck}
        name="demo"
        value="yes"
        label="Has demo?"
        checked={checked('demo')}
      />
      <Checkbox
        onCheck={handleCheck}
        name="assessment"
        value="of-course"
        label="Has assessment?"
        checked={checked('assessment')}
      />
      <Checkbox
        onCheck={handleCheck}
        name="slides"
        value="who-doesnt"
        label="Has slides?"
        checked={checked('slides')}
      />
    </div>
  )
}

export const SwitchExample = () => {
  const [checked, setChecked] = React.useState(false)
  const handleClick = checked => setChecked(checked)
  return (
    <Switch checked={checked} onClick={handleClick}>
      Profile is {checked ? 'public' : 'private'}
    </Switch>
  )
}

interface ControlExampleProps {
  title: string
  desc: string
  href: string
}
export const ControlExample: FC<ControlExampleProps> = props => (
  <div className={styles.control}>
    <div className={styles.label}>
      <Text.Heading size={Text.Heading.sizes.xSmall}>
        <h3>{props.title}</h3>
      </Text.Heading>
      <div>
        <span className={styles.desc}>{props.desc}</span>
        <span className="link">
          <A href={props.href}>Docs</A>
        </span>
      </div>
    </div>
    <div>{props.children}</div>
  </div>
)
