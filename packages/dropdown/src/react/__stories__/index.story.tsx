/* eslint-disable react/display-name */
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import React, { useEffect, forwardRef, useState, HTMLAttributes } from 'react'
import * as Icon from '@pluralsight/ps-design-system-icon'

import Dropdown from '../'
import { DropdownContext, useDropdown } from '../../js'

storiesOf('labels', module)
  .add('none', () => <Dropdown />)
  .add('placeholder', () => <Dropdown placeholder="some placeholder" />)
  .add('label', () => <Dropdown label="Some label" />)
  .add('subLabel', () => <Dropdown subLabel="Some sublabel" />)
  .add('label and subLabel', () => (
    <Dropdown label="Some label" subLabel="Some sublabel" />
  ))
  .add('all', () => (
    <Dropdown
      label="Some label"
      subLabel="Some sublabel"
      placeholder="Some placeholder"
    />
  ))

const appearanceStory = storiesOf('appearance', module)

Object.keys(Dropdown.sizes).forEach(size =>
  Object.keys(Dropdown.appearances).forEach(appearance =>
    appearanceStory.add(`${size} ${appearance}`, () => (
      <Dropdown
        size={size as 'medium' | 'small'}
        appearance={appearance as 'default' | 'subtle'}
        placeholder="The placeholder "
      />
    ))
  )
)
Object.keys(Dropdown.appearances).forEach(appearance =>
  appearanceStory.add(`${appearance} w/ error`, () => (
    <Dropdown
      appearance={appearance as 'default' | 'subtle'}
      error
      label="Problem field"
    />
  ))
)
appearanceStory.add('gaps', () => (
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

storiesOf('disabled', module)
  .add('compare dropdown', () => (
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
  .add('compare items', () => (
    <div>
      <Dropdown
        label="Normal"
        placeholder="Has mixed labels"
        menu={
          <>
            <Dropdown.Item>Normal Label 1</Dropdown.Item>
            <Dropdown.Item disabled>Disabled Label 2</Dropdown.Item>
            <Dropdown.Item>Normal Label 3</Dropdown.Item>
          </>
        }
      />
    </div>
  ))

storiesOf('whitelist', module)
  .add('onChange', () => {
    function ChangeStory() {
      const [value, setValue] = React.useState('two')

      function handleChange(evt: React.MouseEvent, value: string) {
        setValue(value)
      }

      return (
        <div>
          <div style={{ color: '#ababab' }}>Value: {value}</div>
          <Dropdown
            placeholder="Change me"
            label="Thing to change"
            menu={
              <>
                <Dropdown.Item value="one">One item</Dropdown.Item>
                <Dropdown.Item value="two">Two item</Dropdown.Item>
                <Dropdown.Item value="three">Three item</Dropdown.Item>
              </>
            }
            onChange={handleChange}
            value={value}
          />
        </div>
      )
    }
    return <ChangeStory />
  })
  .add('clear', () => {
    function ClearStory(props) {
      const [value, setValue] = React.useState('two')

      function handleChange(evt: React.MouseEvent, value: string) {
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
              <>
                <Dropdown.Item value="one">One item</Dropdown.Item>
                <Dropdown.Item value="two">Two item</Dropdown.Item>
                <Dropdown.Item value="three">Three item</Dropdown.Item>
              </>
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
  .add('full width', () => (
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
  .add('right-aligned', () => (
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
  .add('custom width', () => {
    function ChangeStory() {
      const [value, setValue] = React.useState('two')
      function handleChange(ev: React.MouseEvent, value: string) {
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
              <>
                <Dropdown.Item value="one">
                  One item One item One item One item One item One item
                </Dropdown.Item>
                <Dropdown.Item value="two">Two item</Dropdown.Item>
                <Dropdown.Item value="three">Three item</Dropdown.Item>
              </>
            }
            onChange={handleChange}
            value={value}
          />
          <Dropdown
            placeholder="Change me"
            label="Width determined by longest item"
            menu={
              <>
                <Dropdown.Item value="one">
                  One item One item One item One item One item One item
                </Dropdown.Item>
                <Dropdown.Item value="two">Two item</Dropdown.Item>
                <Dropdown.Item value="three">Three item</Dropdown.Item>
              </>
            }
            onChange={handleChange}
            value={value}
          />
        </div>
      )
    }
    return <ChangeStory />
  })

storiesOf('value', module)
  .add('no preselection', () => (
    <>
      <h2>With values</h2>
      <Dropdown
        placeholder="Shown until selection made"
        menu={
          <>
            <Dropdown.Item value="o">One item</Dropdown.Item>
            <Dropdown.Item value="w">Two item</Dropdown.Item>
            <Dropdown.Item value="h">Three item</Dropdown.Item>
          </>
        }
      />
      <h2>Just labels</h2>
      <Dropdown
        placeholder="Shown until selection made"
        menu={
          <>
            <Dropdown.Item>One item</Dropdown.Item>
            <Dropdown.Item>Two item</Dropdown.Item>
            <Dropdown.Item>Three item</Dropdown.Item>
          </>
        }
      />
    </>
  ))
  .add('shows pre-selected item by label', () => (
    <Dropdown
      placeholder="Shown because can't find option"
      value="Preselected three item"
      menu={
        <>
          <Dropdown.Item>One item</Dropdown.Item>
          <Dropdown.Item>Two item</Dropdown.Item>
          <Dropdown.Item>Preselected three item</Dropdown.Item>
        </>
      }
    />
  ))
  .add('shows pre-selected item by value', () => (
    <Dropdown
      placeholder="Not shown until empty"
      value="h"
      menu={
        <>
          <Dropdown.Item value="o">One item</Dropdown.Item>
          <Dropdown.Item value="w">Two item</Dropdown.Item>
          <Dropdown.Item value="h">Preselected three item</Dropdown.Item>
        </>
      }
    />
  ))
  .add('value is not an item in the list', () => (
    <Dropdown
      placeholder="Shown because can't find option"
      value="unknown"
      menu={
        <>
          <Dropdown.Item value="o">One item</Dropdown.Item>
          <Dropdown.Item value="w">Two item</Dropdown.Item>
          <Dropdown.Item value="h">Preselected three item</Dropdown.Item>
        </>
      }
    />
  ))
  .add('external state change', () => {
    function StateChange() {
      const values = ['o', 'w', 'h']
      const [value, setValue] = useState(values[0])
      useEffect(() => {
        const timerId = setInterval(() => {
          const i = values.findIndex(v => v === value)
          setValue(i < values.length - 1 ? values[i + 1] : values[0])
        }, 1000)

        return () => clearInterval(timerId)
      })

      return (
        <Dropdown
          placeholder="Not shown until empty"
          value={value}
          menu={
            <>
              <Dropdown.Item value="o">One item</Dropdown.Item>
              <Dropdown.Item value="w">Two item</Dropdown.Item>
              <Dropdown.Item value="h">Preselected three item</Dropdown.Item>
            </>
          }
        />
      )
    }
    return <StateChange />
  })

  .add('test the spec', () => (
    <Dropdown
      placeholder="Select"
      value="w"
      menu={[
        <Dropdown.Item key="1" value="o">
          One
        </Dropdown.Item>,
        <Dropdown.Item key="2" value="w">
          Two
        </Dropdown.Item>,
        <Dropdown.Item key="3" value="h">
          Three
        </Dropdown.Item>
      ]}
    />
  ))

storiesOf('menu', module)
  .add('single list', () => (
    <Dropdown
      label="Level"
      menu={
        <>
          <Dropdown.Item>One item</Dropdown.Item>
          <Dropdown.Item>Two item</Dropdown.Item>
          <Dropdown.Item>Three item</Dropdown.Item>
          <Dropdown.Item>Three and the amazing item</Dropdown.Item>
        </>
      }
    />
  ))
  .add('max height', () => (
    <Dropdown
      label="Level"
      menu={
        <>
          <Dropdown.Item>One item</Dropdown.Item>
          <Dropdown.Item>Two item</Dropdown.Item>
          <Dropdown.Item>Three item</Dropdown.Item>
          <Dropdown.Item>Four item</Dropdown.Item>
          <Dropdown.Item>Five item</Dropdown.Item>
          <Dropdown.Item>Six item</Dropdown.Item>
          <Dropdown.Item>Seven item</Dropdown.Item>
          <Dropdown.Item>Eight item</Dropdown.Item>
          <Dropdown.Item>Nine item</Dropdown.Item>
          <Dropdown.Item>Ten item</Dropdown.Item>
          <Dropdown.Item>Eleven item</Dropdown.Item>
          <Dropdown.Item>Twelve item</Dropdown.Item>
          <Dropdown.Item>Thirteen item</Dropdown.Item>
          <Dropdown.Item>Fourteen item</Dropdown.Item>
          <Dropdown.Item>Fifteen item</Dropdown.Item>
        </>
      }
    />
  ))
  .add('w/ value', () => (
    <Dropdown
      label="Level"
      value="three-1"
      menu={
        <>
          <Dropdown.Item value="one">One item</Dropdown.Item>
          <Dropdown.Item value="two">Two item</Dropdown.Item>
          <Dropdown.Item value="three">Three item</Dropdown.Item>
          <Dropdown.Item value="three-1">
            Three and the amazing item
          </Dropdown.Item>
        </>
      }
    />
  ))
  .add('w/ subLabel', () => (
    <Dropdown
      label="Level"
      subLabel="The course level"
      menu={
        <>
          <Dropdown.Item>One item</Dropdown.Item>
          <Dropdown.Item>Two item</Dropdown.Item>
          <Dropdown.Item>Three item</Dropdown.Item>
          <Dropdown.Item>Three and the amazing item</Dropdown.Item>
        </>
      }
    />
  ))
  .add('single list w/ icon', () => (
    <Dropdown
      label="Level"
      placeholder="Select one"
      menu={
        <>
          <Dropdown.Item>One item</Dropdown.Item>
          <Dropdown.Item>Two item</Dropdown.Item>
          <Dropdown.Item>Three item</Dropdown.Item>
          <Dropdown.Item icon={<Icon.CheckIcon />}>
            Three and the amazing item
          </Dropdown.Item>
        </>
      }
    />
  ))
  .add('divider', () => (
    <Dropdown
      label="Level"
      menu={
        <>
          <Dropdown.Item>One item</Dropdown.Item>
          <Dropdown.Item>Two item</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Three item</Dropdown.Item>
          <Dropdown.Item>Three and the amazing item</Dropdown.Item>
        </>
      }
    />
  ))
  .add('in stack', () => (
    <div>
      <div>
        <Dropdown
          label="Level"
          placeholder="Select one"
          menu={
            <>
              <Dropdown.Item>One item</Dropdown.Item>
              <Dropdown.Item>Two item</Dropdown.Item>
              <Dropdown.Item>Three item</Dropdown.Item>
              <Dropdown.Item>Three and the amazing item</Dropdown.Item>
            </>
          }
        />
      </div>
      <div>
        <Dropdown
          label="Level"
          placeholder="Select another one"
          menu={
            <>
              <Dropdown.Item>One item</Dropdown.Item>
              <Dropdown.Item>Two item</Dropdown.Item>
              <Dropdown.Item>Three item</Dropdown.Item>
              <Dropdown.Item icon={<Icon.CheckIcon />}>
                Three and the amazing item
              </Dropdown.Item>
            </>
          }
        />
      </div>
    </div>
  ))
  .add('super long', () => (
    <Dropdown
      label="Level"
      menu={
        <>
          <Dropdown.Item>
            This level really is the longest level that anyone has ever seen.
            There is none longer
          </Dropdown.Item>
        </>
      }
    />
  ))
  .add('onClicks', () => (
    <Dropdown
      label="Level"
      appearance={Dropdown.appearances.subtle}
      placeholder="Select another one"
      error
      menu={
        <>
          <Dropdown.Item onClick={action('one')}>One item</Dropdown.Item>
          <Dropdown.Item onClick={action('two')}>Two item</Dropdown.Item>
          <Dropdown.Item onClick={action('three')}>Three item</Dropdown.Item>
        </>
      }
    />
  ))
  .add('w/ longer placeholder', () => (
    <Dropdown
      label="Level"
      placeholder="This one is longer than any menu item"
      menu={
        <>
          <Dropdown.Item>One item</Dropdown.Item>
          <Dropdown.Item>Two item</Dropdown.Item>
        </>
      }
    />
  ))

storiesOf('props whitelist', module).add('title', () => (
  <Dropdown
    title="This title should be present"
    label="Level"
    menu={
      <>
        <Dropdown.Item>One item</Dropdown.Item>
      </>
    }
  />
))

function AutofocusStory(props) {
  const ref = React.createRef<HTMLButtonElement>()

  React.useEffect(() => {
    ref.current.focus()
  })

  return <Dropdown {...props} ref={ref} />
}

storiesOf('focus', module)
  .add('onFocus', () => <Dropdown onFocus={action('focused')} />)
  .add('onBlur', () => <Dropdown onBlur={action('blurred')} />)
  .add('disabled', () => (
    <Dropdown disabled onBlur={action('blurred')} onFocus={action('focused')} />
  ))
  .add('autofocus with ref', () => <AutofocusStory />)
storiesOf('portal', module).add('position', () => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Porta nibh venenatis
    cras sed. Ornare lectus sit amet est placerat in egestas. Sed lectus
    vestibulum mattis ullamcorper velit sed ullamcorper. Nisl nisi scelerisque
    eu ultrices. Amet risus nullam eget felis. Arcu non sodales neque sodales ut
    etiam. Tortor at auctor urna nunc. Faucibus scelerisque eleifend donec
    pretium vulputate sapien nec sagittis aliquam. Condimentum vitae sapien
    pellentesque habitant morbi tristique. Egestas maecenas pharetra convallis
    posuere morbi leo urna molestie. Et ultrices neque ornare aenean euismod
    elementum nisi quis eleifend. Lobortis feugiat vivamus at augue eget arcu
    dictum. Fusce id velit ut tortor pretium viverra suspendisse. Convallis
    tellus id interdum velit. In tellus integer feugiat scelerisque varius morbi
    enim nunc faucibus. Tempor orci dapibus ultrices in iaculis nunc. Elit
    ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet massa vitae
    tortor. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula
    ipsum. Ipsum dolor sit amet consectetur adipiscing. Sed felis eget velit
    aliquet sagittis. Elit pellentesque habitant morbi tristique. Sit amet
    consectetur adipiscing elit. Id volutpat lacus laoreet non curabitur gravida
    arcu ac. Enim neque volutpat ac tincidunt. Lorem ipsum dolor sit amet.
    <Dropdown
      label="Level"
      menu={
        <>
          <Dropdown.Item>One item</Dropdown.Item>
          <Dropdown.Item>Two item</Dropdown.Item>
          <Dropdown.Item>Three item</Dropdown.Item>
          <Dropdown.Item>Three and the amazing item</Dropdown.Item>
        </>
      }
    />
    Aliquam sem et tortor consequat id. Vitae tempus quam pellentesque nec nam.
    Platea dictumst quisque sagittis purus sit amet volutpat. Convallis tellus
    id interdum velit laoreet id. Convallis tellus id interdum velit laoreet id
    donec ultrices. Metus vulputate eu scelerisque felis imperdiet. Luctus
    venenatis lectus magna fringilla urna porttitor. Pellentesque habitant morbi
    tristique senectus. Mi bibendum neque egestas congue quisque egestas diam
    in. Faucibus interdum posuere lorem ipsum dolor sit. Tortor vitae purus
    faucibus ornare suspendisse sed nisi lacus sed. Ut tortor pretium viverra
    suspendisse potenti. Lectus proin nibh nisl condimentum id venenatis a
    condimentum. Consequat id porta nibh venenatis cras sed felis eget velit.
    Placerat orci nulla pellentesque dignissim enim sit. Erat imperdiet sed
    euismod nisi porta lorem mollis aliquam. Malesuada fames ac turpis egestas
    integer. Consectetur purus ut faucibus pulvinar elementum integer.
    Consectetur adipiscing elit pellentesque habitant morbi. Lorem ipsum dolor
    sit amet consectetur adipiscing elit ut. Sed tempus urna et pharetra
    pharetra massa massa ultricies mi. Dictumst quisque sagittis purus sit.
    Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.
    Porttitor massa id neque aliquam vestibulum. Viverra maecenas accumsan lacus
    vel facilisis volutpat est. Ac orci phasellus egestas tellus. Dui vivamus
    arcu felis bibendum ut tristique. Pharetra convallis posuere morbi leo urna
    molestie at. Suscipit tellus mauris a diam maecenas. Cursus risus at
    ultrices mi tempus imperdiet nulla. Turpis egestas pretium aenean pharetra
    magna ac placerat vestibulum. In eu mi bibendum neque egestas congue
    quisque. Augue mauris augue neque gravida in fermentum. Interdum consectetur
    libero id faucibus nisl tincidunt eget. In metus vulputate eu scelerisque
    felis imperdiet proin. Ut lectus arcu bibendum at varius vel pharetra vel.
    Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. In
    dictum non consectetur a erat nam at lectus urna. Sem fringilla ut morbi
    tincidunt. Porttitor massa id neque aliquam vestibulum morbi. Ut placerat
    orci nulla pellentesque dignissim enim sit amet. Sed augue lacus viverra
    vitae congue eu consequat. Nibh cras pulvinar mattis nunc sed. Nec ultrices
    dui sapien eget mi. Ut tellus elementum sagittis vitae. Diam sollicitudin
    tempor id eu nisl nunc mi ipsum. Nisi vitae suscipit tellus mauris a diam.
    Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.
    Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Amet justo
    donec enim diam vulputate. Arcu vitae elementum curabitur vitae. Urna cursus
    eget nunc scelerisque viverra mauris in aliquam sem. Vel turpis nunc eget
    lorem dolor sed viverra. Orci eu lobortis elementum nibh tellus molestie
    nunc non. Mi eget mauris pharetra et ultrices. Pulvinar neque laoreet
    suspendisse interdum consectetur libero id. Vestibulum lectus mauris
    ultrices eros in cursus turpis massa.
  </div>
))

interface DropdownWithIconProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  icon: React.ReactNode
  onChange?: (e: React.MouseEvent, value: string) => void
  menu: React.ReactNode
}

const DropdownWithIcon = forwardRef<HTMLButtonElement, DropdownWithIconProps>(
  ({ icon, ...props }, forwardedRef) => {
    const allProps = useDropdown(props, forwardedRef)

    return (
      <Dropdown.Layout
        {...allProps.layout}
        label={<Dropdown.Label {...allProps.label} />}
        menu={
          <DropdownContext.Provider {...allProps.value}>
            <Dropdown.Menu {...allProps.menu} />
          </DropdownContext.Provider>
        }
        subLabel={<Dropdown.SubLabel {...allProps.subLabel} />}
        button={
          <Dropdown.Button {...allProps.button}>
            {icon}
            <div style={{ height: '100%', position: 'relative', flex: 1 }}>
              <Dropdown.Selected {...allProps.selected} />
            </div>
          </Dropdown.Button>
        }
      />
    )
  }
)

const DropdownWithDynamicIcon = () => {
  const [selected, setSelected] = useState<null | string>()
  const values = {
    channel: {
      value: 'channel',
      icon: <Icon.ChannelIcon style={{ marginRight: 8 }} />,
      label: 'Channel'
    },
    analytics: {
      value: 'analytics',
      icon: <Icon.AnalyticsIcon style={{ marginRight: 8 }} />,
      label: 'Analytics'
    },
    authorKit: {
      value: 'authorKit',
      icon: <Icon.AuthorKitIcon style={{ marginRight: 8 }} />,
      label: 'Author Kit'
    },
    labs: {
      value: 'labs',
      icon: <Icon.LabsIcon style={{ marginRight: 8 }} />,
      label: 'Labs'
    }
  }
  const handleChange = (e: React.MouseEvent, value: string) => {
    setSelected(value)
  }
  const icon = values[selected] ? (
    values[selected].icon
  ) : (
    <div style={{ width: 24, height: 24, marginRight: 8 }} />
  )
  return (
    <DropdownWithIcon
      icon={icon}
      onChange={handleChange}
      menu={Object.values(values).map(({ value, icon, label }) => (
        <Dropdown.Item value={value} key={value} icon={icon}>
          {label}
        </Dropdown.Item>
      ))}
    />
  )
}

storiesOf('custom', module)
  .add('fixed icon', () => (
    <DropdownWithIcon
      icon={<Icon.CalendarIcon style={{ marginRight: 8 }} />}
      menu={
        <>
          <Dropdown.Item>Trailing 14 Days</Dropdown.Item>
          <Dropdown.Item>Last Month</Dropdown.Item>
          <Dropdown.Item>Trailing 30 Days</Dropdown.Item>
          <Dropdown.Item>Last Quater</Dropdown.Item>
          <Dropdown.Item>Trailing 90 Days</Dropdown.Item>
          <Dropdown.Item>Custom</Dropdown.Item>
        </>
      }
    />
  ))
  .add('dynamic icon', () => <DropdownWithDynamicIcon />)
