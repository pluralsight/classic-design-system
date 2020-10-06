import React, { HTMLAttributes } from 'react'
import {
  layout,
  colorsBorder,
  colorsOrange
} from '@pluralsight/ps-design-system-core'
import { CloseIcon, CaretRightIcon } from '@pluralsight/ps-design-system-icon'
import Tag from '@pluralsight/ps-design-system-tag'
import Link from '@pluralsight/ps-design-system-link'
import Switch from '@pluralsight/ps-design-system-switch'
import Checkbox from '@pluralsight/ps-design-system-checkbox'
import * as Text from '@pluralsight/ps-design-system-text'

import { omit } from '../../components/util'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const FormFocusable: React.FC<Props> = props => (
  <div className="focusable">
    <style>{`
      
    `}</style>
    {props.children}
    <style>{`
      .focusable {
        position: relative;
        z-index: 0;
      }
      .comp {
        padding-bottom: ${layout.spacingLarge};
        border-bottom: 1px solid ${colorsBorder.lowOnDark};
        margin-bottom: ${layout.spacingXLarge};
      }
      .label {
        margin-bottom: ${layout.spacingLarge};
      }
      .desc {
        display: inline-block;
        margin-right: ${layout.spacingXSmall};
      }
      .link {
        display: inline-flex;
        align-items: center;
        color: ${colorsOrange[6]};
      }
      @media (min-width: 769px) {
        .comp {
          display: grid;
          grid-template-columns: 50% 50%;
          gap: ${layout.spacingLarge};
        }
      }
    `}</style>
  </div>
)

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
          (name as unknown) as string
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

export const Comp = props => (
  <div className="comp">
    <div className="label">
      <Text.Heading size={Text.Heading.sizes.medium}>
        <h3>{props.title}</h3>
      </Text.Heading>
      <div>
        <span className="desc">{props.desc}</span>
        <span className="link">
          <Link>
            <a href={props.href}>Docs</a>
          </Link>
          <CaretRightIcon size={CaretRightIcon.sizes.small} />
        </span>
      </div>
    </div>
    <div>{props.children}</div>
  </div>
)
