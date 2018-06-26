import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react'
import Banner from '@pluralsight/ps-design-system-banner/react'
import Button from '@pluralsight/ps-design-system-button/react'
import Checkbox from '@pluralsight/ps-design-system-checkbox/react'
import core from '@pluralsight/ps-design-system-core'
import Dropdown from '@pluralsight/ps-design-system-dropdown/react'
import Form from '@pluralsight/ps-design-system-form/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import Text from '@pluralsight/ps-design-system-text/react'
import TextInput from '@pluralsight/ps-design-system-textinput/react'
import TextArea from '@pluralsight/ps-design-system-textarea/react'
import Radio from '@pluralsight/ps-design-system-radio/react'
import Switch from '@pluralsight/ps-design-system-switch/react'
import Theme from '@pluralsight/ps-design-system-theme/react'
import { string as stringUtil } from '@pluralsight/ps-design-system-util'

import {
  Chrome,
  Code,
  Content,
  Example,
  Heading,
  Intro,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  TextLink,
  ThemeToggle,
  withServerProps
} from '../../src/ui'

class CheckboxExample extends React.Component {
  constructor() {
    super()
    this.state = { values: {} }
    this.handleCheck = this.handleCheck.bind(this)
  }
  handleCheck(evt, checked, value, name) {
    if (checked) {
      this.setState({ values: { ...this.state.values, [name]: value } })
    } else {
      const { [name]: omit, ...values } = this.state.values
      this.setState({ values })
    }
  }
  render() {
    const features = Object.keys(this.state.values)
    const checked = name => features.indexOf(name) > -1
    return (
      <div>
        <Checkbox
          onCheck={this.handleCheck}
          name="demo"
          value="yes"
          label="Has demo?"
          checked={checked('demo')}
        />
        <Checkbox
          onCheck={this.handleCheck}
          name="assessment"
          value="of-course"
          label="Has assessment?"
          checked={checked('assessment')}
        />
        <Checkbox
          onCheck={this.handleCheck}
          name="slides"
          value="who-doesnt"
          label="Has slides?"
          checked={checked('slides')}
        />
      </div>
    )
  }
}

class SwitchExample extends React.Component {
  constructor() {
    super()
    this.state = { checked: false }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(checked) {
    this.setState({ checked })
  }
  render() {
    const { state } = this
    return (
      <Switch checked={state.checked} onClick={this.handleClick}>
        Profile is {state.checked ? 'public' : 'private'}
      </Switch>
    )
  }
}

const Comp = props => (
  <div className="comp">
    <div className="label">
      <Text.Heading size={Text.Heading.sizes.medium}>
        <h3>{props.title}</h3>
      </Text.Heading>
      <div>
        <span className="desc">{props.desc}</span>
        <span className="link">
          <TextLink href={props.href}>Docs</TextLink>
          <Icon id={Icon.ids.caretRight} size={Icon.sizes.small} />
        </span>
      </div>
    </div>
    <div className="control">{props.children}</div>
    <style jsx>{`
      .comp {
        padding-bottom: ${core.layout.spacingLarge};
        border-bottom: 1px solid ${core.colors.gray02};
        margin-bottom: ${core.layout.spacingXLarge};
      }
      .label {
        margin-bottom: ${core.layout.spacingLarge};
      }
      .control {
        position: relative;
        z-index: 0;
      }
      .desc {
        display: inline-block;
        margin-right: ${core.layout.spacingXSmall};
      }
      .link {
        display: inline-flex;
        align-items: center;
        color: ${core.colors.orange};
      }
      @media (min-width: 769px) {
        .comp {
          display: grid;
          grid-template-columns: 50% 50%;
          gap: ${core.layout.spacingLarge};
        }
      }
    `}</style>
  </div>
)

const validate = state => {
  const rules = {
    name: { rule: /.+/, message: 'Required' },
    level: {
      rule: /beginner|intermediate|advanced/,
      message: 'Select a valid option'
    },
    slides: {
      rule: /false|true/,
      message: 'Turn on or off'
    },
    demo: {
      rule: /false|true/,
      message: 'Select a demo option'
    },
    assessment: {
      rule: /false|true/,
      message: 'Select an assessment option'
    },
    desc: { rule: /.+/, message: 'Required' }
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
  desc: ''
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
      [name]: value
    })
  }
  handleSubmit(evt) {
    evt.preventDefault()
    const errors = validate(this.state)
    const hasErrors = Object.keys(errors).length > 0
    this.setState({ errors })
    if (hasErrors) {
    } else {
      this.setState({ isSubmitting: true }, _ => {
        setTimeout(
          _ =>
            this.setState({ isSubmitting: false, isSubmitted: true }, _ =>
              setTimeout(_ => this.reset(), 800)
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
    const { props, state } = this
    const errorMsg = name => state.errors[name]
    const isError = name => !!errorMsg(name)
    const hasErrors = Object.keys(state.errors).length > 0
    return (
      <div>
        <ThemeToggle.Container>
          <div className="example">
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
                <Text.Heading>
                  <h2>Course sample form</h2>
                </Text.Heading>
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
                    <ActionMenu>
                      {['beginner', 'intermediate', 'advanced'].map(level => (
                        <ActionMenu.Item
                          name="level"
                          onClick={_ => this.setState({ level })}
                        >
                          {stringUtil.capitalize(level)}
                        </ActionMenu.Item>
                      ))}
                    </ActionMenu>
                  }
                />
                <Switch
                  error={isError('slides')}
                  checked={state.slides}
                  name="slides"
                  onClick={checked => this.setState({ slides: checked })}
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
                  onCheck={(_, checked, __, name) =>
                    this.setState({ [name]: checked })
                  }
                />
                <Checkbox
                  error={isError('assessment')}
                  checked={state.assessment}
                  name="assessment"
                  label="Assessment included"
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
                  <Button
                    loading={state.isSubmitting}
                    onClick={this.handleSubmit}
                  >
                    Save
                  </Button>
                  <Button
                    appearance={Button.appearances.flat}
                    onClick={evt => evt.preventDefault()}
                  >
                    Cancel
                  </Button>
                </Form.ButtonRow>
              </Form.VerticalLayout>
            </form>
          </div>
        </ThemeToggle.Container>

        <Code
          lang="javascript"
          collapsible
        >{`class InAppExample extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: {},
      isSubmitting: false,
      name: '',
      level: null,
      slides: false,
      slidestech: null,
      desc: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.reset = this.reset.bind(this)
  }
  handleChange(evt) {
    const { name, value } = evt.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit(evt) {
    evt.preventDefault()
    // ...
  }
  render() {
    const { props, state } = this
    const errorMsg = name => state.errors[name]
    const isError = name => !!errorMsg(name)
    return (
      <form onSubmit={this.handleSubmit}>
        <Form.VerticalLayout>
          <Text.Heading>
            <h2>Course sample form</h2>
          </Text.Heading>
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
              <ActionMenu>
                {['beginner', 'intermediate', 'advanced'].map(level => (
                  <ActionMenu.Item
                    name="level"
                    onClick={_ => this.setState({ level })}
                  >
                    {stringUtil.capitalize(level)}
                  </ActionMenu.Item>
                ))}
              </ActionMenu>
            }
          />
          <Checkbox
            error={isError('slides')}
            checked={state.slides}
            name="slides"
            label="Has slides?"
            onCheck={(_, checked, __, name) =>
              this.setState({ [name]: checked })
            }
          />
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
            <Button
              loading={state.isSubmitting}
              onClick={this.handleSubmit}
            >
              Save
            </Button>
            <Button appearance={Button.appearances.flat} onClick={_ => {}}>
              Cancel
            </Button>
          </Form.ButtonRow>
        </Form.VerticalLayout>
      </form>
    )
  }
}`}</Code>
        <style jsx>{`
          .example {
            padding: ${core.layout.spacingLarge} ${core.layout.spacingXLarge};
          }
        `}</style>
      </div>
    )
  }
}

export default withServerProps(_ => (
  <Chrome>
    <Content title="Form">
      <PageHeading packageName="form">Form</PageHeading>

      <Intro>
        The Form component helps arrange a form full of input controls. The
        package doesn't provide these controls but it is compatible with them.
      </Intro>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-form
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        {`import Form from '@pluralsight/ps-design-system-form/react'`}
      </Code>

      <SectionHeading>In-app example</SectionHeading>
      <P>
        Here's a fully functioning form that does everything short of submitting
        to a server.
      </P>
      <InAppExample />

      <SectionHeading>Form.VerticalLayout</SectionHeading>
      <P>
        Forms should be horizontally left-aligned, with one input control per
        line, and inputs are stretched to the full container width. Bring your
        own container. <Text.Code>Form.VerticalLayout</Text.Code> takes care of
        the vertical spacing between controls.
      </P>
      <Example.React
        themeToggle
        orient="vertical"
        includes={{
          ActionMenu,
          Button,
          Checkbox,
          Dropdown,
          Form,
          Radio,
          TextArea,
          TextInput
        }}
        codes={[
          `<div style={{ width: '80%' }}>
  <Form.VerticalLayout>
    <TextInput placeholder="Stacked" />
    <TextInput placeholder="In a form" />
  </Form.VerticalLayout>
</div>`
        ]}
      />

      <SectionHeading>Form.Divider</SectionHeading>
      <P>
        Dividers are simple visual indicators that break form flow and content
        into logical pieces.
      </P>
      <Example.React
        themeToggle
        orient="vertical"
        includes={{
          ActionMenu,
          Button,
          Checkbox,
          Dropdown,
          Form,
          Radio,
          TextArea,
          TextInput
        }}
        codes={[
          `<div style={{ width: '80%' }}>
  <Form.VerticalLayout>
    <TextInput placeholder="Related stuff" />
    <Form.Divider />
    <TextInput placeholder="Other related stuff" />
  </Form.VerticalLayout>
</div>`
        ]}
      />

      <SectionHeading>Form.ButtonRow</SectionHeading>
      <P>
        Forms commonly have multiple buttons that a user can interact with.
        Those buttons should be on a single row and left-aligned.{' '}
        <Text.Code>Form.ButtonRow</Text.Code> will help.
      </P>
      <Example.React
        themeToggle
        orient="vertical"
        includes={{
          ActionMenu,
          Button,
          Checkbox,
          Dropdown,
          Form,
          Radio,
          TextArea,
          TextInput
        }}
        codes={[
          `<div style={{ width: '80%' }}>
  <Form.VerticalLayout>
    <TextInput placeholder="Related stuff" />
    <TextInput placeholder="Other related stuff" />
    <Form.ButtonRow>
      <Button>Primary</Button>
      <Button appearance={Button.appearances.flat}>Secondary</Button>
    </Form.ButtonRow>
  </Form.VerticalLayout>
</div>`
        ]}
      />
      <SectionHeading>Form controls</SectionHeading>
      <P>
        Each one of these controls is a separate package. They are mean to be
        used inside the <Text.Code>Form</Text.Code> layout component. Find links
        to the docs below
      </P>

      <Comp
        title="Text Input"
        href="/components/textinput"
        desc="For short textual input."
      >
        <TextInput label="First name" placeholder="What's your name?" />
      </Comp>

      <Comp
        title="Text Area"
        href="/components/textarea"
        desc="For longer textual input."
      >
        <TextArea label="Bio" placeholder="Tell me about yourself." />
      </Comp>

      <Comp
        title="Radio"
        href="/components/radio"
        desc="For single selection amongst few choices."
      >
        <Radio.Group>
          <Radio.Button value="beginner" label="Beginner" />
          <Radio.Button value="intermediate" label="Intermediate" />
          <Radio.Button value="advanced" label="Advanced" />
        </Radio.Group>
      </Comp>

      <Comp
        title="Dropdown"
        href="/components/dropdown"
        desc="For single selection amongst few to many choices."
      >
        <Dropdown
          label="Level"
          subLabel="Be as specific as possible"
          menu={
            <ActionMenu>
              <ActionMenu.Item
                nested={
                  <ActionMenu>
                    <ActionMenu.Item>What's nylon</ActionMenu.Item>
                    <ActionMenu.Item>Dream of nylon</ActionMenu.Item>
                    <ActionMenu.Item>Dangerous</ActionMenu.Item>
                  </ActionMenu>
                }
              >
                Beginner
              </ActionMenu.Item>
              <ActionMenu.Item
                nested={
                  <ActionMenu>
                    <ActionMenu.Item>Nylon adept</ActionMenu.Item>
                    <ActionMenu.Item>Epic nylon user</ActionMenu.Item>
                  </ActionMenu>
                }
              >
                Intermediate
              </ActionMenu.Item>
              <ActionMenu.Item
                nested={
                  <ActionMenu>
                    <ActionMenu.Item>Invented nylon</ActionMenu.Item>
                    <ActionMenu.Item>Now it's kevlar</ActionMenu.Item>
                  </ActionMenu>
                }
              >
                Advanced
              </ActionMenu.Item>
            </ActionMenu>
          }
        />
      </Comp>

      <Comp
        title="Checkbox"
        href="/components/checkbox"
        desc="For multiple selection."
      >
        <CheckboxExample />
      </Comp>

      <Comp
        title="Switch"
        href="/components/switch"
        desc="For on/off selections."
      >
        <SwitchExample />
      </Comp>
    </Content>
  </Chrome>
))
