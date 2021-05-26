import { Button } from '../../../button'
import { Checkbox } from '../../../checkbox'
import * as core from '../../../core'
import {
  Calendar,
  CalendarDates,
  useDateSelectChange,
  slides
} from '../../../datepicker'
import { Select } from '../../../select'
import { Menu } from '../../../menu'
import { Radio } from '../../../radio'
import { Switch } from '../../../switch'
import { Tag } from '../../../tag'
import * as Text from '../../../text'
import { TextArea } from '../../../textarea'
import { TextInput } from '../../../textinput'
import { RefFor, ValueOf } from '../../../util'
import { storiesOf } from '@storybook/react'
import { useDayzed, DateObj } from 'dayzed'
import React from 'react'

import { Form } from '../index'

const useInputClientRect = (
  inputRef: React.MutableRefObject<HTMLInputElement | undefined>
) => {
  const [menuPosition, setMenuPosition] = React.useState({
    left: 0,
    top: 0
  })
  React.useEffect(() => {
    if (inputRef.current) {
      const { left, bottom } = inputRef.current.getBoundingClientRect()
      setMenuPosition({ left: left - 18, top: bottom + 10 })
    }
  }, [inputRef])
  return menuPosition
}
const DatePicker = ({ label }: { label: string }) => {
  const [selected, setSelected] = React.useState<Date | undefined>()
  const onDateSelected = (dateObj: DateObj, evt: React.SyntheticEvent) => {
    setSelected(dateObj.date)
  }
  const { getDateProps, ...dayzedData } = useDayzed({
    date: selected || new Date('05/30/2020'),
    selected,
    onDateSelected
  })
  const inputRef = React.useRef<HTMLInputElement | undefined>(undefined)
  const [open, setOpen] = React.useState<boolean>(false)
  const onFocus: React.FocusEventHandler<HTMLInputElement> = evt => {
    if (evt.target === inputRef.current) {
      setOpen(true)
    }
  }
  const menuPosition = useInputClientRect(inputRef)
  const [slide, setSlide] = React.useState<ValueOf<typeof slides>>()
  const [value, onChange] = useDateSelectChange({
    selected,
    setSlide,
    setSelected
  })
  return (
    <div style={{ position: 'relative' }}>
      <TextInput
        ref={inputRef as RefFor<'input'>}
        onChange={onChange}
        value={value}
        onFocus={onFocus}
        label={label}
      />
      {open && (
        <Calendar
          {...dayzedData}
          style={{ position: 'fixed', ...menuPosition }}
          slide={slide}
        >
          <CalendarDates getDateProps={getDateProps}>
            {renderProps => {
              return <button {...renderProps} />
            }}
          </CalendarDates>
        </Calendar>
      )}
    </div>
  )
}

const PaddingDecorator = (storyFn: () => React.ReactNode) => (
  <div style={{ padding: core.layout.spacingLarge, width: '50%' }}>
    {storyFn()}
  </div>
)
const FormContainer = (storyFn: () => React.ReactNode) => (
  <div style={{ border: '1px solid blue' }}>{storyFn()}</div>
)

storiesOf('Sample Form', module)
  .addDecorator(FormContainer)
  .addDecorator(PaddingDecorator)
  .add('sample', () => (
    <Form.VerticalLayout>
      <Text.Heading>
        <h2>Sample form</h2>
      </Text.Heading>

      <TextInput label="Name" placeholder="What's your name?" />

      <TextInput
        label="Alias"
        placeholder="Do you have a nick name?"
        subLabel="*Optional"
      />

      <TextInput
        error
        label="Email address"
        value="steve@example.com"
        subLabel="Not a valid email address"
      />

      <Select placeholder="Select your occupation...">
        <Menu.Item>Engineer</Menu.Item>
        <Menu.Item>Craftsperson</Menu.Item>
        <Menu.Item>Artisan</Menu.Item>
        <Menu.Item>Creator</Menu.Item>
      </Select>

      <div style={{ display: 'flex' }}>
        <Tag href="http://google.com">Foo</Tag>
        <span style={{ marginRight: core.layout.spacingXSmall }} />
        <Tag href="http://google.com">Bar</Tag>
        <span style={{ marginRight: core.layout.spacingXSmall }} />
        <Tag href="http://google.com">Baz</Tag>
      </div>

      <DatePicker label="Choose a Date" />

      <Checkbox checked label="Checkbox selected" value="someVal" />

      <Form.Divider />

      <Radio.Group name="sample">
        <Radio.Button value="full" label="Full-time employement" />
        <Radio.Button value="part" label="Part-time employement" />
      </Radio.Group>

      <Form.Divider />

      <Switch>toggle</Switch>

      <Form.Divider />

      <TextArea label="Comment" placeholder="Anything else to report?" />

      <Form.ButtonRow>
        <Button>Save</Button>
        <Button appearance={Button.appearances.flat}>Cancel</Button>
      </Form.ButtonRow>
    </Form.VerticalLayout>
  ))
  .add('null children', () => (
    <Form.VerticalLayout>
      <Text.Heading>
        <h2>Sample form</h2>
      </Text.Heading>

      <TextInput label="Name" placeholder="What's your name?" />

      {null}

      <TextInput
        label="Alias"
        placeholder="Do you have a nick name?"
        subLabel="*Optional"
      />

      {null}

      <Form.Divider />

      <TextArea label="Comment" placeholder="Anything else to report?" />

      <Form.ButtonRow>
        <Button>Save</Button>
        <Button appearance={Button.appearances.flat}>Cancel</Button>
      </Form.ButtonRow>
    </Form.VerticalLayout>
  ))

const alignsStories = storiesOf('Form.ButtonRow | aligns', module)
  .addDecorator(FormContainer)
  .addDecorator(PaddingDecorator)

Object.values(Form.ButtonRow.aligns).forEach(a =>
  alignsStories.add(a, () => (
    <Form.VerticalLayout>
      <div>form stuff</div>
      <Form.ButtonRow align={a}>
        <Button>Save</Button>
        <Button appearance={Button.appearances.flat}>Cancel</Button>
      </Form.ButtonRow>
    </Form.VerticalLayout>
  ))
)

storiesOf('Form.ButtonRow', module)
  .addDecorator(FormContainer)
  .addDecorator(PaddingDecorator)
  .add('single form element with single button', () => (
    <Form.VerticalLayout>
      <Form.ButtonRow>
        <Button>Only One</Button>
      </Form.ButtonRow>
    </Form.VerticalLayout>
  ))
