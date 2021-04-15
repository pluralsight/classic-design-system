import React from 'react'
import Form from '@pluralsight/ps-design-system-form'
import Button from '@pluralsight/ps-design-system-button'
import Banner from '@pluralsight/ps-design-system-banner'
import Checkbox from '@pluralsight/ps-design-system-checkbox'
import { DatePicker } from '@pluralsight/ps-design-system-datepicker'
import Dropdown from '@pluralsight/ps-design-system-dropdown'
import { Heading } from '@pluralsight/ps-design-system-text'
import TextInput from '@pluralsight/ps-design-system-textinput'
import TextArea from '@pluralsight/ps-design-system-textarea'
import Radio from '@pluralsight/ps-design-system-radio'
import Switch from '@pluralsight/ps-design-system-switch'
import { capitalize } from '@pluralsight/ps-design-system-util'

const validate = (state) => {
  const rules = {
    name: { rule: /.+/, message: 'Required' },
    level: {
      rule: /beginner|intermediate|advanced/,
      message: 'Select a valid option',
    },
    slides: {
      rule: /false|true/,
      message: 'Turn on or off',
    },
    demo: {
      rule: /false|true/,
      message: 'Select a demo option',
    },
    assessment: {
      rule: /false|true/,
      message: 'Select an assessment option',
    },
    desc: { rule: /.+/, message: 'Required' },
    publish: { rule: /^\d{2}\/\d{2}\/\d{4}$/, message: 'Required' },
  }
  return Object.keys(rules).reduce(
    (errors, ruleName) => {
      if (rules[ruleName].rule.test(state[ruleName])) {
        delete errors[ruleName]
      } else {
        errors[ruleName] = rules[ruleName].message
      }
      return errors
    },
    { ...state.errors }
  )
}

const initialState = {
  errors: {},
  isSubmitting: false,
  isSubmitted: false,
  name: '',
  level: null,
  slides: false,
  slidestech: null,
  demo: false,
  assessment: false,
  desc: '',
  publish: undefined,
}

class InAppExample extends React.Component {
  constructor() {
    super()
    this.state = initialState
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleChange(evt) {
    const { name, value } = evt.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()

    const errors = validate(this.state)
    const hasErrors = Object.keys(errors).length > 0

    this.setState({ errors })

    if (!hasErrors) {
      this.setState({ isSubmitting: true }, (_) => {
        setTimeout(
          (_) =>
            this.setState({ isSubmitting: false, isSubmitted: true }, (_) =>
              setTimeout((_) => this.reset(), 800)
            ),
          1500
        )
      })
    }
  }

  reset(evt) {
    this.setState(initialState)
  }

  render() {
    const { state } = this
    const errorMsg = (name) => state.errors[name]
    const isError = (name) => !!errorMsg(name)
    const hasErrors = Object.keys(state.errors).length > 0
    return (
      <div style={{ position: 'relative' }}>
        {state.isSubmitted && (
          <Banner
            color={Banner.colors.green}
            style={{ position: 'absolute', top: '0', left: '0' }}
          >
            Course created!
          </Banner>
        )}
        {hasErrors && (
          <Banner
            color={Banner.colors.red}
            style={{ position: 'absolute', top: '0', left: '0' }}
          >
            Failed: Sample course form has errors
          </Banner>
        )}
        <form onSubmit={this.handleSubmit}>
          <Form.VerticalLayout>
            <Heading>
              <h2>Course sample form</h2>
            </Heading>
            <TextInput
              error={isError('name')}
              onChange={this.handleChange}
              name="name"
              label="Course name"
              placeholder="Title"
              subLabel={errorMsg('name') || 'Use Title Case'}
              value={state.name}
            />
            <Dropdown
              error={isError('level')}
              label="Course difficulty level"
              placeholder="Choose one"
              subLabel={errorMsg('level')}
              menu={
                <>
                  {['beginner', 'intermediate', 'advanced'].map((level) => (
                    <Dropdown.Item
                      name="level"
                      key={level}
                      onClick={(_) => this.setState({ level })}
                    >
                      {capitalize(level)}
                    </Dropdown.Item>
                  ))}
                </>
              }
            />
            <DatePicker
              error={isError('publish')}
              name="publish"
              value={state.publish}
              label="Publish date"
              subLabel="When your course will go live"
              onSelect={(publish) => this.setState({ publish })}
            />
            <Switch
              error={isError('slides')}
              checked={state.slides}
              name="slides"
              onClick={(checked) => this.setState({ slides: checked })}
            >
              Has slides?
            </Switch>
            <Form.Divider />
            <Radio.Group
              error={isError('slidestech')}
              disabled={!state.slides}
              name="slidestech"
              onSelect={(_, slidestech) => this.setState({ slidestech })}
              value={state.slidestech}
            >
              <Radio.Button value="key" label="Keynote" />
              <Radio.Button value="pptx" label="Powerpoint" />
            </Radio.Group>
            <Form.Divider />
            <Checkbox
              error={isError('demo')}
              checked={state.demo}
              name="demo"
              label="Demo included"
              value="demo"
              onCheck={(_, checked, __, name) =>
                this.setState({ [name]: checked })
              }
            />
            <Checkbox
              error={isError('assessment')}
              checked={state.assessment}
              name="assessment"
              label="Assessment included"
              value="assessment"
              onCheck={(_, checked, __, name) =>
                this.setState({ [name]: checked })
              }
            />
            <TextArea
              error={isError('desc')}
              label="Description"
              subLabel={errorMsg('desc')}
              placeholder="What is your course about?"
              onChange={this.handleChange}
              name="desc"
              value={state.desc}
            />
            <Form.ButtonRow>
              <Button loading={state.isSubmitting} onClick={this.handleSubmit}>
                Save
              </Button>
              <Button
                appearance={Button.appearances.secondary}
                onClick={(evt) => evt.preventDefault()}
              >
                Cancel
              </Button>
            </Form.ButtonRow>
          </Form.VerticalLayout>
        </form>
      </div>
    )
  }
}

export default InAppExample
