import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import React from 'react'

import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import * as Icon from '@pluralsight/ps-design-system-icon'

import Dropdown from '../index.js'

const Empty = React.forwardRef((props, forwardedRef) => <span />)

const DropdownWithDefaults = props => <Dropdown {...props} />

storiesOf('labels', module)
  .add('none', _ => <DropdownWithDefaults />)
  .add('placeholder', _ => (
    <DropdownWithDefaults placeholder="some placeholder" />
  ))
  .add('label', _ => <DropdownWithDefaults label="Some label" />)
  .add('subLabel', _ => <DropdownWithDefaults subLabel="Some sublabel" />)
  .add('label and subLabel', _ => (
    <DropdownWithDefaults label="Some label" subLabel="Some sublabel" />
  ))
  .add('all', _ => (
    <DropdownWithDefaults
      label="Some label"
      subLabel="Some sublabel"
      placeholder="Some placeholder"
    />
  ))

const appearanceStory = storiesOf('appearance', module)

Object.keys(Dropdown.sizes).forEach(size =>
  Object.keys(Dropdown.appearances).forEach(appearance =>
    appearanceStory.add(`${size} ${appearance}`, _ => (
      <DropdownWithDefaults
        size={size}
        appearance={appearance}
        placeholder="The placeholder "
      />
    ))
  )
)
Object.keys(Dropdown.appearances).forEach(appearance =>
  appearanceStory.add(`${appearance} w/ error`, _ => (
    <DropdownWithDefaults appearance={appearance} error label="Problem field" />
  ))
)
appearanceStory.add('gaps', _ => (
  <div>
    <div>
      <DropdownWithDefaults label="Problem field" />
    </div>
    <div>
      <DropdownWithDefaults error label="Problem field" />
    </div>
    <div>
      <DropdownWithDefaults
        appearance={Dropdown.appearances.subtle}
        label="Problem field"
      />
    </div>
    <div>
      <DropdownWithDefaults
        appearance={Dropdown.appearances.subtle}
        error
        label="Problem field"
      />
    </div>
  </div>
))

storiesOf('disabled', module).add('compare', _ => (
  <div>
    <DropdownWithDefaults
      label="Normal"
      subLabel="Still normal"
      placeholder="I'm normal, see"
    />
    <DropdownWithDefaults
      label="I'm not usable"
      subLabel="Neither am I"
      disabled
      placeholder="I'm untouchable"
    />
  </div>
))

storiesOf('whitelist', module)
  .add('name', _ => (
    <DropdownWithDefaults
      placeholder="I have a form name"
      name="myFieldNameOfPower"
    />
  ))
  .add('onChange', _ => {
    function ChangeStory() {
      const [value, setValue] = React.useState('two')

      function handleChange(evt, value, label) {
        setValue(value)
      }

      return (
        <div>
          <div style={{ color: '#ababab' }}>Value: {value}</div>
          <Dropdown
            placeholder="Change me"
            label="Thing to change"
            menu={
              <ActionMenu>
                <ActionMenu.Item value="one">One item</ActionMenu.Item>
                <ActionMenu.Item value="two">Two item</ActionMenu.Item>
                <ActionMenu.Item value="three">Three item</ActionMenu.Item>
              </ActionMenu>
            }
            onChange={handleChange}
            value={value}
          />
        </div>
      )
    }
    return <ChangeStory />
  })
  .add('clear', _ => {
    function ClearStory(props) {
      const [value, setValue] = React.useState('two')

      function handleChange(evt, value, label) {
        setValue(value)
      }

      function handleClear() {
        setValue(null)
      }

      return (
        <div>
          <div style={{ color: '#ababab' }}>Value: {value}</div>
          <button onClick={handleClear}>Clear</button>
          <Dropdown
            placeholder="Change me"
            label="Thing to change"
            menu={
              <ActionMenu>
                <ActionMenu.Item value="one">One item</ActionMenu.Item>
                <ActionMenu.Item value="two">Two item</ActionMenu.Item>
                <ActionMenu.Item value="three">Three item</ActionMenu.Item>
              </ActionMenu>
            }
            onChange={handleChange}
            value={value}
          />
        </div>
      )
    }

    return <ClearStory />
  })

storiesOf('layouts', module)
  .add('full width', _ => (
    <div style={{ border: '1px solid blue', width: '500px' }}>
      <DropdownWithDefaults
        label="First"
        style={{ display: 'block', width: '100%' }}
      />
      <DropdownWithDefaults
        error
        label="Second"
        style={{ display: 'block', width: '100%' }}
      />
      <DropdownWithDefaults
        appearance={Dropdown.appearances.subtle}
        label="Third"
        style={{ display: 'block', width: '100%' }}
      />
      <DropdownWithDefaults
        appearance={Dropdown.appearances.subtle}
        error
        label="Fourth"
        style={{ display: 'block', width: '100%' }}
      />
    </div>
  ))
  .add('right-aligned', _ => (
    <div style={{ border: '1px solid blue' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <DropdownWithDefaults
          placeholder="Filter"
          appearance={Dropdown.appearances.subtle}
        />
      </div>
      <div style={{ border: '3px solid green', height: '50px' }} />
    </div>
  ))
  .add('custom width', _ => {
    function ChangeStory() {
      const [value, setValue] = React.useState('two')
      function handleChange(evt, value, label) {
        setValue(value)
      }

      return (
        <div>
          <div style={{ color: '#ababab' }}>Value: {value}</div>
          <Dropdown
            placeholder="Change me"
            label="Width 150"
            style={{ width: 150 }}
            menu={
              <ActionMenu>
                <ActionMenu.Item value="one">
                  One item One item One item One item One item One item
                </ActionMenu.Item>
                <ActionMenu.Item value="two">Two item</ActionMenu.Item>
                <ActionMenu.Item value="three">Three item</ActionMenu.Item>
              </ActionMenu>
            }
            onChange={handleChange}
            value={value}
          />
          <Dropdown
            placeholder="Change me"
            label="Width determined by longest item"
            menu={
              <ActionMenu>
                <ActionMenu.Item value="one">
                  One item One item One item One item One item One item
                </ActionMenu.Item>
                <ActionMenu.Item value="two">Two item</ActionMenu.Item>
                <ActionMenu.Item value="three">Three item</ActionMenu.Item>
              </ActionMenu>
            }
            onChange={handleChange}
            value={value}
          />
        </div>
      )
    }
    return <ChangeStory />
  })

storiesOf('placeholder', module).add('as pre-selected item', _ => (
  <DropdownWithDefaults
    placeholder="Two item"
    menu={
      <ActionMenu>
        <ActionMenu.Item>One item</ActionMenu.Item>
        <ActionMenu.Item>Two item</ActionMenu.Item>
        <ActionMenu.Item>Three item</ActionMenu.Item>
      </ActionMenu>
    }
  />
))

storiesOf('menu', module)
  .add('single list', _ => (
    <DropdownWithDefaults
      label="Level"
      menu={
        <ActionMenu>
          <ActionMenu.Item>One item</ActionMenu.Item>
          <ActionMenu.Item>Two item</ActionMenu.Item>
          <ActionMenu.Item>Three item</ActionMenu.Item>
          <ActionMenu.Item>Three and the amazing item</ActionMenu.Item>
        </ActionMenu>
      }
    />
  ))
  .add('w/ subLabel', _ => (
    <DropdownWithDefaults
      label="Level"
      subLabel="The course level"
      menu={
        <ActionMenu>
          <ActionMenu.Item>One item</ActionMenu.Item>
          <ActionMenu.Item>Two item</ActionMenu.Item>
          <ActionMenu.Item>Three item</ActionMenu.Item>
          <ActionMenu.Item>Three and the amazing item</ActionMenu.Item>
        </ActionMenu>
      }
    />
  ))
  .add('single list w/ icon', _ => (
    <DropdownWithDefaults
      label="Level"
      placeholder="Select one"
      menu={
        <ActionMenu>
          <ActionMenu.Item>One item</ActionMenu.Item>
          <ActionMenu.Item>Two item</ActionMenu.Item>
          <ActionMenu.Item>Three item</ActionMenu.Item>
          <ActionMenu.Item icon={<Icon.CheckIcon />}>
            Three and the amazing item
          </ActionMenu.Item>
        </ActionMenu>
      }
    />
  ))
  .add('divider', _ => (
    <DropdownWithDefaults
      label="Level"
      menu={
        <ActionMenu>
          <ActionMenu.Item>One item</ActionMenu.Item>
          <ActionMenu.Item>Two item</ActionMenu.Item>
          <ActionMenu.Divider />
          <ActionMenu.Item>Three item</ActionMenu.Item>
          <ActionMenu.Item>Three and the amazing item</ActionMenu.Item>
        </ActionMenu>
      }
    />
  ))
  .add('in stack', _ => (
    <div>
      <div>
        <DropdownWithDefaults
          label="Level"
          placeholder="Select one"
          menu={
            <ActionMenu>
              <ActionMenu.Item>One item</ActionMenu.Item>
              <ActionMenu.Item>Two item</ActionMenu.Item>
              <ActionMenu.Item>Three item</ActionMenu.Item>
              <ActionMenu.Item icon={<Icon.CheckIcon />}>
                Three and the amazing item
              </ActionMenu.Item>
            </ActionMenu>
          }
        />
      </div>
      <div>
        <DropdownWithDefaults
          label="Level"
          placeholder="Select another one"
          menu={
            <ActionMenu>
              <ActionMenu.Item>One item</ActionMenu.Item>
              <ActionMenu.Item>Two item</ActionMenu.Item>
              <ActionMenu.Item>Three item</ActionMenu.Item>
              <ActionMenu.Item icon={<Icon.CheckIcon />}>
                Three and the amazing item
              </ActionMenu.Item>
            </ActionMenu>
          }
        />
      </div>
    </div>
  ))
  .add('super long', _ => (
    <DropdownWithDefaults
      label="Level"
      menu={
        <ActionMenu>
          <ActionMenu.Item>
            This level really is the longest level that anyone has ever seen.
            There is none longer
          </ActionMenu.Item>
        </ActionMenu>
      }
    />
  ))
  .add('nested', _ => (
    <DropdownWithDefaults
      label="Level"
      placeholder="Select another one"
      menu={
        <ActionMenu>
          <ActionMenu.Item>One item</ActionMenu.Item>
          <ActionMenu.Item>Two item</ActionMenu.Item>
          <ActionMenu.Item>Three item</ActionMenu.Item>
          <ActionMenu.Item
            icon={<Icon.CheckIcon />}
            nested={
              <ActionMenu>
                <ActionMenu.Item>3 - One item</ActionMenu.Item>
                <ActionMenu.Item>3 - Two item</ActionMenu.Item>
                <ActionMenu.Item>3 - Three item</ActionMenu.Item>
              </ActionMenu>
            }
          >
            Three and the amazing item
          </ActionMenu.Item>
        </ActionMenu>
      }
    />
  ))
  .add('onClicks', _ => (
    <DropdownWithDefaults
      label="Level"
      appearance={Dropdown.appearances.subtle}
      placeholder="Select another one"
      error
      menu={
        <ActionMenu>
          <ActionMenu.Item onClick={action('one')}>One item</ActionMenu.Item>
          <ActionMenu.Item onClick={action('two')}>Two item</ActionMenu.Item>
          <ActionMenu.Item onClick={action('three')}>
            Three item
          </ActionMenu.Item>
          <ActionMenu.Item
            icon={<Icon.CheckIcon />}
            nested={
              <ActionMenu>
                <ActionMenu.Item onClick={action('three - One')}>
                  3 - One item
                </ActionMenu.Item>
                <ActionMenu.Item onClick={action('three - Two')}>
                  3 - Two item
                </ActionMenu.Item>
                <ActionMenu.Item onClick={action('three -  Three')}>
                  3 - Three item
                </ActionMenu.Item>
              </ActionMenu>
            }
          >
            Three and the amazing item
          </ActionMenu.Item>
        </ActionMenu>
      }
    />
  ))
  .add('w/ longer placeholder', _ => (
    <DropdownWithDefaults
      label="Level"
      placeholder="This one is longer than any menu item"
      menu={
        <ActionMenu>
          <ActionMenu.Item>One item</ActionMenu.Item>
          <ActionMenu.Item>Two item</ActionMenu.Item>
        </ActionMenu>
      }
    />
  ))
  .add('w/ longer nested menu item label', _ => (
    <DropdownWithDefaults
      label="Level"
      menu={
        <ActionMenu>
          <ActionMenu.Item>Short</ActionMenu.Item>
          <ActionMenu.Item
            nested={
              <ActionMenu>
                <ActionMenu.Item
                  nested={
                    <ActionMenu>
                      <ActionMenu.Item>This is pretty longest</ActionMenu.Item>
                      <ActionMenu.Item>
                        The longest in el mundo. Find me!
                      </ActionMenu.Item>
                    </ActionMenu>
                  }
                >
                  Longer and longer
                </ActionMenu.Item>
                <ActionMenu.Item>This one is longer</ActionMenu.Item>
              </ActionMenu>
            }
          >
            Short enough
          </ActionMenu.Item>
        </ActionMenu>
      }
    />
  ))

storiesOf('props whitelist', module).add('title', _ => (
  <DropdownWithDefaults
    title="This title should be present"
    label="Level"
    menu={
      <ActionMenu>
        <ActionMenu.Item>One item</ActionMenu.Item>
      </ActionMenu>
    }
  />
))

function AutofocusStory(props) {
  const ref = React.createRef()

  React.useEffect(_ => {
    ref.current.focus()
  })

  return <Dropdown {...props} ref={ref} menu={<Empty />} />
}

storiesOf('focus', module)
  .add('onFocus', _ => <DropdownWithDefaults onFocus={action('focused')} />)
  .add('onBlur', _ => <DropdownWithDefaults onBlur={action('blurred')} />)
  .add('disabled', _ => (
    <DropdownWithDefaults
      disabled
      onBlur={action('blurred')}
      onFocus={action('focused')}
    />
  ))
  .add('autofocus with ref', _ => <AutofocusStory />)
storiesOf('portal', module).add('position', _ => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <DropdownWithDefaults
      label="Level"
      menu={
        <ActionMenu>
          <ActionMenu.Item>Short</ActionMenu.Item>
          <ActionMenu.Item
            nested={
              <ActionMenu>
                <ActionMenu.Item
                  nested={
                    <ActionMenu>
                      <ActionMenu.Item>This is pretty longest</ActionMenu.Item>
                      <ActionMenu.Item>
                        The longest in el mundo. Find me!
                      </ActionMenu.Item>
                    </ActionMenu>
                  }
                >
                  Longer and longer
                </ActionMenu.Item>
                <ActionMenu.Item>This one is longer</ActionMenu.Item>
              </ActionMenu>
            }
          >
            Short enough
          </ActionMenu.Item>
        </ActionMenu>
      }
    />
  </div>
))
