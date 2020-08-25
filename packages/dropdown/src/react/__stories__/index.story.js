import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import React from 'react'
import * as Icon from '@pluralsight/ps-design-system-icon'

import Dropdown from '../index.js'

storiesOf('labels', module)
  .add('none', _ => <Dropdown />)
  .add('placeholder', _ => <Dropdown placeholder="some placeholder" />)
  .add('label', _ => <Dropdown label="Some label" />)
  .add('subLabel', _ => <Dropdown subLabel="Some sublabel" />)
  .add('label and subLabel', _ => (
    <Dropdown label="Some label" subLabel="Some sublabel" />
  ))
  .add('all', _ => (
    <Dropdown
      label="Some label"
      subLabel="Some sublabel"
      placeholder="Some placeholder"
    />
  ))

const appearanceStory = storiesOf('appearance', module)

Object.keys(Dropdown.sizes).forEach(size =>
  Object.keys(Dropdown.appearances).forEach(appearance =>
    appearanceStory.add(`${size} ${appearance}`, _ => (
      <Dropdown
        size={size}
        appearance={appearance}
        placeholder="The placeholder "
      />
    ))
  )
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

storiesOf('disabled', module).add('compare', _ => (
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

storiesOf('whitelist', module)
  .add('name', _ => (
    <Dropdown placeholder="I have a form name" name="myFieldNameOfPower" />
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

storiesOf('placeholder', module).add('as pre-selected item', _ => (
  <Dropdown
    placeholder="Two item"
    menu={
      <>
        <Dropdown.Item>One item</Dropdown.Item>
        <Dropdown.Item>Two item</Dropdown.Item>
        <Dropdown.Item>Three item</Dropdown.Item>
      </>
    }
  />
))

storiesOf('menu', module)
  .add('single list', _ => (
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
  .add('w/ value', _ => (
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
  .add('w/ subLabel', _ => (
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
  .add('single list w/ icon', _ => (
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
  .add('divider', _ => (
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
  .add('in stack', _ => (
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
  .add('super long', _ => (
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
  .add('nested', _ => (
    <Dropdown
      label="Level"
      placeholder="Select another one"
      menu={
        <>
          <Dropdown.Item>One item</Dropdown.Item>
          <Dropdown.Item>Two item</Dropdown.Item>
          <Dropdown.Item>Three item</Dropdown.Item>
          <Dropdown.Item
            menu={
              <>
                <Dropdown.Item>3 - One item</Dropdown.Item>
                <Dropdown.Item>3 - Two item</Dropdown.Item>
                <Dropdown.Item>3 - Three item</Dropdown.Item>
              </>
            }
            icon={<Icon.CheckIcon />}
          >
            Three and the amazing item
          </Dropdown.Item>
        </>
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
        <>
          <Dropdown.Item onClick={action('one')}>One item</Dropdown.Item>
          <Dropdown.Item onClick={action('two')}>Two item</Dropdown.Item>
          <Dropdown.Item onClick={action('three')}>Three item</Dropdown.Item>
          <Dropdown.Item
            menu={
              <>
                <Dropdown.Item onClick={action('three - One')}>
                  3 - One item
                </Dropdown.Item>
                <Dropdown.Item onClick={action('three - Two')}>
                  3 - Two item
                </Dropdown.Item>
                <Dropdown.Item onClick={action('three -  Three')}>
                  3 - Three item
                </Dropdown.Item>
              </>
            }
            icon={<Icon.CheckIcon />}
          >
            Three and the amazing item
          </Dropdown.Item>
        </>
      }
    />
  ))
  .add('w/ longer placeholder', _ => (
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
  .add('w/ longer nested menu item label', _ => (
    <Dropdown
      label="Level"
      menu={
        <>
          <Dropdown.Item>Short</Dropdown.Item>
          <Dropdown.Item
            menu={
              <>
                <Dropdown.Item
                  menu={
                    <>
                      <Dropdown.Item>This is pretty longest</Dropdown.Item>
                      <Dropdown.Item>
                        The longest in el mundo. Find me!
                      </Dropdown.Item>
                    </>
                  }
                >
                  Longer and longer
                </Dropdown.Item>
                <Dropdown.Item>This one is longer</Dropdown.Item>
              </>
            }
          >
            Short enough
          </Dropdown.Item>
        </>
      }
    />
  ))

storiesOf('props whitelist', module).add('title', _ => (
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
  const ref = React.createRef()

  React.useEffect(_ => {
    ref.current.focus()
  })

  return <Dropdown {...props} ref={ref} />
}

storiesOf('focus', module)
  .add('onFocus', _ => <Dropdown onFocus={action('focused')} />)
  .add('onBlur', _ => <Dropdown onBlur={action('blurred')} />)
  .add('disabled', _ => (
    <Dropdown disabled onBlur={action('blurred')} onFocus={action('focused')} />
  ))
  .add('autofocus with ref', _ => <AutofocusStory />)
storiesOf('portal', module).add('position', _ => (
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
