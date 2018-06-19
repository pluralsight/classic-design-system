import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react'
import Button from '@pluralsight/ps-design-system-button/react'
import core from '@pluralsight/ps-design-system-core'
import Form from '@pluralsight/ps-design-system-form/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import Text from '@pluralsight/ps-design-system-text/react'
import TextInput from '@pluralsight/ps-design-system-textinput/react'
import TextArea from '@pluralsight/ps-design-system-textarea/react'
import Radio from '@pluralsight/ps-design-system-radio/react'
import Checkbox from '@pluralsight/ps-design-system-checkbox/react'
import Dropdown from '@pluralsight/ps-design-system-dropdown/react'

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
    </Content>
  </Chrome>
))
