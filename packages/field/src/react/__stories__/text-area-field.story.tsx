import { PlaceholderIcon } from '@pluralsight/ps-design-system-icon'
import { useUniqueId } from '@pluralsight/ps-design-system-util'
import { Meta, Story } from '@storybook/react/types-6-0'
import React, {
  ComponentProps,
  RefObject,
  useEffect,
  useRef,
  useState
} from 'react'

import { sizes } from '../../vars'
import Field from '..'

interface TextAreaFieldProps extends ComponentProps<typeof Field> {}

const TextAreaField: React.FC<TextAreaFieldProps> = props => {
  const { disabled, placeholder, ...rest } = props

  const [value, setValue] = useState<string>('')

  const labelId = useUniqueId('text-area__label-')
  const areaId = useUniqueId('text-area__area-')

  const areaRef = useRef<HTMLTextAreaElement>(null)
  useAutoGrow(areaRef, value)

  return (
    <Field
      disabled={disabled}
      label={
        <Field.Label htmlFor={areaId} id={labelId}>
          Text area label area
        </Field.Label>
      }
      subLabel={
        <Field.SubLabel>Area for additional information</Field.SubLabel>
      }
      {...rest}
    >
      <Field.TextArea
        ref={areaRef}
        disabled={disabled}
        id={areaId}
        onChange={evt => {
          setValue(evt.target.value)
        }}
        placeholder={placeholder}
        value={value}
      />
    </Field>
  )
}

function useAutoGrow(
  ref: RefObject<HTMLTextAreaElement | undefined>,
  value: string
) {
  useEffect(() => {
    if (!ref.current) return
    const { current: el } = ref

    el.style.height = 'inherit'

    const computed = window.getComputedStyle(el)

    const height =
      parseInt(computed.getPropertyValue('border-top-width'), 10) +
      parseInt(computed.getPropertyValue('padding-top'), 10) +
      el.scrollHeight +
      parseInt(computed.getPropertyValue('padding-bottom'), 10) +
      parseInt(computed.getPropertyValue('border-bottom-width'), 10)

    el.style.height = String(height) + 'px'
  }, [ref, value])
}

export default {
  title: 'Components/Field/TextAreaField',
  component: TextAreaField,
  args: { size: sizes.medium }
} as Meta

const Template: Story<ComponentProps<typeof TextAreaField>> = args => {
  return <TextAreaField {...args} />
}

export const Basic = Template.bind({})

export const SizeSmall = Template.bind({})
SizeSmall.args = { size: sizes.small }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const Error = Template.bind({})
Error.args = { error: true }

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = { placeholder: 'Enter some text here' }

export const IconPrefix = Template.bind({})
IconPrefix.args = { prefix: <PlaceholderIcon /> }

export const IconSuffix = Template.bind({})
IconSuffix.args = { suffix: <PlaceholderIcon /> }
