import { action } from '@storybook/addon-actions'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react'
import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Dropdown from '../react'

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingLarge }}>{storyFn()}</div>
)

const actionMenuWithThreeItems = (
  <ActionMenu>
    <ActionMenu.Item onClick={action('one')}>One item</ActionMenu.Item>
    <ActionMenu.Item onClick={action('two')}>Two item</ActionMenu.Item>
    <ActionMenu.Item onClick={action('three')}>Three item</ActionMenu.Item>
  </ActionMenu>
)

const labelStory = storiesOf('labels', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('none', _ => <Dropdown menu={actionMenuWithThreeItems} />)
  .add('placeholder', _ => (
    <Dropdown placeholder="some placeholder" menu={actionMenuWithThreeItems} />
  ))
  .add('label', _ => (
    <Dropdown label="Some label" menu={actionMenuWithThreeItems} />
  ))
  .add('subLabel', _ => (
    <Dropdown subLabel="Some sublabel" menu={actionMenuWithThreeItems} />
  ))
  .add('selectedLabel', _ => (
    <Dropdown
      selectedLabel="Some selectedLabel"
      menu={actionMenuWithThreeItems}
    />
  ))
  .add('label and subLabel', _ => (
    <Dropdown
      label="Some label"
      subLabel="Some sublabel"
      menu={actionMenuWithThreeItems}
    />
  ))
  .add('all', _ => (
    <Dropdown
      label="Some label"
      subLabel="Some sublabel"
      placeholder="Some placeholder"
      menu={actionMenuWithThreeItems}
    />
  ))

const appearanceStory = storiesOf('appearance', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
Object.keys(Dropdown.appearances).forEach(appearance =>
  appearanceStory.add(appearance, _ => (
    <Dropdown appearance={appearance} placeholder="The placeholder " />
  ))
)
Object.keys(Dropdown.appearances).forEach(appearance =>
  appearanceStory.add(`${appearance} w/ error`, _ => (
    <Dropdown appearance={appearance} error label="Problem field" />
  ))
)
appearanceStory.add('gaps', _ => (
  <div>
    <div>
      <Dropdown label="Problem field" />
    </div>
    <div>
      <Dropdown error label="Problem field" />
    </div>
    <div>
      <Dropdown
        appearance={Dropdown.appearances.subtle}
        label="Problem field"
      />
    </div>
    <div>
      <Dropdown
        appearance={Dropdown.appearances.subtle}
        error
        label="Problem field"
      />
    </div>
  </div>
))

const disabledStory = storiesOf('disabled', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('compare', _ => (
    <div>
      <Dropdown
        label="Normal"
        subLabel="Still normal"
        placeholder="I'm normal, see"
      />
      <Dropdown
        label="I'm not usable"
        subLabel="Neither am I"
        disabled
        placeholder="I'm untouchable"
      />
    </div>
  ))

const whitelistStory = storiesOf('whitelist', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('name', _ => (
    <Dropdown placeholder="I have a form name" name="myFieldNameOfPower" />
  ))
  .add('onChange', _ => (
    <Dropdown placeholder="Change me" onChange={action('I changed')} />
  ))

const layoutsStory = storiesOf('layouts', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('full width', _ => (
    <div style={{ border: '1px solid blue', width: '500px' }}>
      <Dropdown label="First" style={{ display: 'block', width: '100%' }} />
      <Dropdown
        error
        label="Second"
        style={{ display: 'block', width: '100%' }}
      />
      <Dropdown
        appearance={Dropdown.appearances.subtle}
        label="Third"
        style={{ display: 'block', width: '100%' }}
      />
      <Dropdown
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
        <Dropdown
          placeholder="Filter"
          appearance={Dropdown.appearances.subtle}
        />
      </div>
      <div style={{ border: '3px solid green', height: '50px' }} />
    </div>
  ))

const selectedLabelStory = storiesOf('placeholder', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('as pre-selected item', _ => (
    <Dropdown
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

const menuStory = storiesOf('menu', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('single list', _ => (
    <Dropdown
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
    <Dropdown
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
    <Dropdown
      label="Level"
      placeholder="Select one"
      menu={
        <ActionMenu>
          <ActionMenu.Item>One item</ActionMenu.Item>
          <ActionMenu.Item>Two item</ActionMenu.Item>
          <ActionMenu.Item>Three item</ActionMenu.Item>
          <ActionMenu.Item icon={<Icon id={Icon.ids.check} />}>
            Three and the amazing item
          </ActionMenu.Item>
        </ActionMenu>
      }
    />
  ))
  .add('divider', _ => (
    <Dropdown
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
        <Dropdown
          label="Level"
          placeholder="Select one"
          menu={
            <ActionMenu>
              <ActionMenu.Item>One item</ActionMenu.Item>
              <ActionMenu.Item>Two item</ActionMenu.Item>
              <ActionMenu.Item>Three item</ActionMenu.Item>
              <ActionMenu.Item icon={<Icon id={Icon.ids.check} />}>
                Three and the amazing item
              </ActionMenu.Item>
            </ActionMenu>
          }
        />
      </div>
      <div>
        <Dropdown
          label="Level"
          placeholder="Select another one"
          menu={
            <ActionMenu>
              <ActionMenu.Item>One item</ActionMenu.Item>
              <ActionMenu.Item>Two item</ActionMenu.Item>
              <ActionMenu.Item>Three item</ActionMenu.Item>
              <ActionMenu.Item icon={<Icon id={Icon.ids.check} />}>
                Three and the amazing item
              </ActionMenu.Item>
            </ActionMenu>
          }
        />
      </div>
    </div>
  ))
  .add('super long', _ => (
    <Dropdown
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
    <Dropdown
      label="Level"
      placeholder="Select another one"
      menu={
        <ActionMenu>
          <ActionMenu.Item>One item</ActionMenu.Item>
          <ActionMenu.Item>Two item</ActionMenu.Item>
          <ActionMenu.Item>Three item</ActionMenu.Item>
          <ActionMenu.Item
            icon={<Icon id={Icon.ids.check} />}
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
    <Dropdown
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
            icon={<Icon id={Icon.ids.check} />}
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
    <Dropdown
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
    <Dropdown
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
