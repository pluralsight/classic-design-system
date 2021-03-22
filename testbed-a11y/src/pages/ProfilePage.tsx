import Avatar from '@pluralsight/ps-design-system-avatar'
import Breadcrumb from '@pluralsight/ps-design-system-breadcrumb'
import {
  AsideLayout,
  PageWidthLayout
} from '@pluralsight/ps-design-system-layout'
import Form from '@pluralsight/ps-design-system-form'
import Button from '@pluralsight/ps-design-system-button'
import Checkbox from '@pluralsight/ps-design-system-checkbox'
import { DatePicker } from '@pluralsight/ps-design-system-datepicker'
import TextInput from '@pluralsight/ps-design-system-textinput'
import MultiSelect from '@pluralsight/ps-design-system-multiselect'
import TextArea from '@pluralsight/ps-design-system-textarea'
import Radio from '@pluralsight/ps-design-system-radio'
import { Heading } from '@pluralsight/ps-design-system-text'

import faker from 'faker'
import { FC, useMemo, useState } from 'react'

import styles from './ProfilePage.module.css'

type FormFieldType =
  | 'checkbox'
  | 'date'
  | 'multiselect'
  | 'radio'
  | 'switch'
  | 'text'
  | 'textarea'

interface FormField {
  label?: string
  options?: { value: string; label: string }[]
  placeholder?: string
  required?: Boolean
  type: FormFieldType
  value: any
}

function useForm() {
  const interests = useMemo(
    () =>
      Array(40)
        .fill(null)
        .map(() => ({
          label: faker.random.word(),
          value: faker.random.uuid()
        })),
    []
  )

  const initialFields = useMemo<Record<string, FormField>>(
    () => ({
      fullName: {
        label: 'Name',
        type: 'text',
        required: true,
        value: 'sdf asdf'
      },
      bio: {
        label: 'Bio',
        type: 'textarea',
        required: false,
        placeholder: '',
        value: ''
      },
      dateOfBirth: { label: 'Date of Birth', type: 'date', value: '' },
      role: {
        label: 'Role',
        type: 'radio',
        options: [
          { label: 'Software Developer', value: 'role-sd' },
          { label: 'IT Professional', value: 'role-it-prof' },
          { label: 'Other', value: 'role-other' }
        ],
        required: false,
        placeholder: '',
        value: null
      },
      visibilty: {
        label: 'Profile visibilty',
        type: 'radio',
        options: [
          { label: 'Public', value: 'public' },
          { label: 'Private', value: 'private' }
        ],
        required: true,
        placeholder: '',
        value: 'private'
      },
      interests: {
        label: 'Interests',
        type: 'multiselect',
        options: interests,
        required: false,
        placeholder: '',
        value: interests.slice(2, 10)
      },
      notificationNewContent: {
        label: 'New content from authors you follow',
        type: 'switch',
        value: true
      },
      notificationLearningRecommendations: {
        label: 'Learning Recommendations',
        type: 'switch',
        value: true
      }
    }),
    [interests]
  )
  const [fields, setFields] = useState(initialFields)

  const getFormProps = () => {
    return {}
  }

  const updateField = (field: string, value: any) => {
    setFields(prev => {
      const prevField = prev[field]
      const nextField = { ...prevField, value }
      return { ...prev, [field]: nextField }
    })
  }

  return { fields, getFormProps, updateField }
}

export const ProfilePage: FC = props => {
  const { children, ...rest } = props
  const { fields, getFormProps, updateField } = useForm()

  return (
    <PageWidthLayout className={styles.page} {...rest}>
      <Breadcrumb>Profile</Breadcrumb>

      <Heading size={Heading.sizes.small}>
        <h1>Edit Profile</h1>
      </Heading>

      <AsideLayout
        aside={
          <AsideLayout.Aside>
            <Avatar
              alt={`profile photo of ${fields.fullName.value}`}
              name={fields.fullName.value}
              size={Avatar.sizes.xLarge}
            />
          </AsideLayout.Aside>
        }
        main={
          <AsideLayout.Main>
            <form {...getFormProps()}>
              <Form.VerticalLayout>
                {Object.keys(fields).map(name => {
                  const field = fields[name]

                  const cases = {
                    checkbox: (
                      <Checkbox
                        key={name}
                        name={name}
                        label={field.label}
                        placeholder={field.placeholder}
                        onCheck={(nextValue: boolean) =>
                          updateField(name, nextValue)
                        }
                        checked={field.value}
                      />
                    ),
                    date: (
                      <DatePicker
                        key={name}
                        label={field.label}
                        placeholder={field.placeholder}
                      />
                    ),
                    multiselect: (
                      <MultiSelect
                        key={name}
                        label={field.label}
                        placeholder={field.placeholder}
                        onChange={(_evt, nextValue) =>
                          updateField(name, nextValue)
                        }
                        options={field.options!}
                        value={field.value}
                      />
                    ),
                    radio: (
                      <Radio.Group
                        key={name}
                        name={name}
                        label={field.label}
                        value={field.value}
                      >
                        {(field.options || []).map(option => (
                          <Radio.Button
                            key={option.value}
                            value={option.value}
                            label={option.label}
                          />
                        ))}
                      </Radio.Group>
                    ),
                    // TODO: figure out why Switch throws errors
                    switch: <>{field.label}</>,
                    textarea: (
                      <TextArea
                        key={name}
                        name={name}
                        label={field.label}
                        onChange={evt => updateField(name, evt.target.value)}
                        placeholder={field.placeholder}
                        value={field.value}
                      />
                    ),
                    text: (
                      <TextInput
                        key={name}
                        name={name}
                        label={field.label}
                        onChange={evt => updateField(name, evt.target.value)}
                        placeholder={field.placeholder}
                        value={field.value}
                      />
                    )
                  }

                  return cases[field.type] ?? null
                })}

                <Form.ButtonRow>
                  <Button type="submit">Save Changes</Button>
                  <Button appearance={Button.appearances.secondary}>
                    Cancel
                  </Button>
                </Form.ButtonRow>
              </Form.VerticalLayout>
            </form>
          </AsideLayout.Main>
        }
      />
    </PageWidthLayout>
  )
}
