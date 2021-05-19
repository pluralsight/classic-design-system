import * as core from '@pluralsight/ps-design-system-core'
import * as Icon from '@pluralsight/ps-design-system-icon'
import { BelowLeft, BelowRight } from '@pluralsight/ps-design-system-position'
import { ValueOf } from '@pluralsight/ps-design-system-util'
import { Meta, Story } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import React from 'react'

import * as vars from '../../index'
import ActionMenu from '../index'

export default {
  title: 'Components/ActionMenu',
  component: ActionMenu
} as Meta

export const OneItem: Story = () => (
  <ActionMenu>
    <ActionMenu.Item>One item</ActionMenu.Item>
  </ActionMenu>
)
export const MultipleItems: Story = () => (
  <ActionMenu>
    <ActionMenu.Item>One item</ActionMenu.Item>
    <ActionMenu.Item>Two item</ActionMenu.Item>
    <ActionMenu.Item>Three item</ActionMenu.Item>
  </ActionMenu>
)

export const LotsOfItems: Story = () => (
  <ActionMenu>
    {new Array(30).fill(null).map((_, index) => (
      <ActionMenu.Item key={index}>index: {index}</ActionMenu.Item>
    ))}
  </ActionMenu>
)

export const Ellipsis: Story = () => (
  <ActionMenu>
    <ActionMenu.Item>
      <ActionMenu.Ellipsis>
        One item that has text that goes on forever and onward into the
        universes yet to be
      </ActionMenu.Ellipsis>
    </ActionMenu.Item>
  </ActionMenu>
)

export const WithIcons: Story = () => (
  <ActionMenu>
    <ActionMenu.Item>
      <ActionMenu.Icon marginLeft>
        <Icon.ChannelIcon />
      </ActionMenu.Icon>
      <ActionMenu.Ellipsis>One item</ActionMenu.Ellipsis>
    </ActionMenu.Item>
    <ActionMenu.Item>
      <ActionMenu.Icon marginLeft>
        <Icon.PathIcon />
      </ActionMenu.Icon>
      <ActionMenu.Ellipsis>Two item</ActionMenu.Ellipsis>
    </ActionMenu.Item>
    <ActionMenu.Item>
      <ActionMenu.Icon marginLeft>
        <Icon.ReportIcon />
      </ActionMenu.Icon>
      <ActionMenu.Ellipsis>Three item</ActionMenu.Ellipsis>
    </ActionMenu.Item>
  </ActionMenu>
)

export const EllipsesWithIcon: Story = () => (
  <ActionMenu>
    <ActionMenu.Item>
      <ActionMenu.Icon marginLeft>
        <Icon.ChannelIcon />
      </ActionMenu.Icon>
      <ActionMenu.Ellipsis>
        One item that has text that goes on forever and onward into the
        universes yet to be
      </ActionMenu.Ellipsis>
    </ActionMenu.Item>
  </ActionMenu>
)

export const LongText: Story = () => (
  <ActionMenu>
    <ActionMenu.Item>
      <ActionMenu.Ellipsis>
        One item that has text that goes on forever and onward into the
        universes yet to be
      </ActionMenu.Ellipsis>
    </ActionMenu.Item>
    <ActionMenu.Item>
      <ActionMenu.Ellipsis>
        Another item that takes a long time to explain in the context of
        everything that is in a line.
      </ActionMenu.Ellipsis>
    </ActionMenu.Item>
  </ActionMenu>
)

export const NullItem: Story = () => (
  <ActionMenu>
    <ActionMenu.Item>One item</ActionMenu.Item>
    {null}
    <ActionMenu.Item>Skip to three item</ActionMenu.Item>
  </ActionMenu>
)

export const ActiveItem: Story = () => (
  <ActionMenu>
    <ActionMenu.Item>Not active</ActionMenu.Item>
    <ActionMenu.Item active>Active (styled w/o :focus)</ActionMenu.Item>
    <ActionMenu.Item active disabled>
      Active disabled
    </ActionMenu.Item>
  </ActionMenu>
)

export const DividerOnEdge: Story = () => (
  <ActionMenu>
    <ActionMenu.Item>One item</ActionMenu.Item>
    <ActionMenu.Divider />
  </ActionMenu>
)

export const DividerSandwiched: Story = () => (
  <ActionMenu>
    <ActionMenu.Item>One item</ActionMenu.Item>
    <ActionMenu.Divider />
    <ActionMenu.Item>Two item</ActionMenu.Item>
    <ActionMenu.Item>Three item</ActionMenu.Item>
  </ActionMenu>
)

export const FocusOnMount: Story = () => {
  const FocusOnMountDemo = React.forwardRef<HTMLUListElement>(
    (_props, forwardedRef) => {
      const ref = ActionMenu.useMenuRef()
      React.useImperativeHandle(forwardedRef, () => ref.current)

      return (
        <ActionMenu ref={ref}>
          <ActionMenu.Item>One item</ActionMenu.Item>
          <ActionMenu.Item>Two item</ActionMenu.Item>
          <ActionMenu.Item>Three item</ActionMenu.Item>
        </ActionMenu>
      )
    }
  )
  return <FocusOnMountDemo />
}

export const NestedMenu: Story = () => {
  const NestedMenuDemo = ({
    origin
  }: {
    origin?: ValueOf<typeof vars.origins>
  }) => (
    <ActionMenu origin={origin}>
      <ActionMenu.Item
        origin={origin}
        nested={
          <>
            <ActionMenu.Item>Nest 1</ActionMenu.Item>
            <ActionMenu.Item
              origin={origin}
              nested={
                <>
                  <ActionMenu.Item>Nest nest 1-1</ActionMenu.Item>
                  <ActionMenu.Item>Nest nest 1-2</ActionMenu.Item>
                  <ActionMenu.Item>Nest nest 1-3</ActionMenu.Item>
                </>
              }
            >
              Nest 2
            </ActionMenu.Item>
            <ActionMenu.Divider />
            <ActionMenu.Item>Nest 3</ActionMenu.Item>
            <ActionMenu.Item
              origin={origin}
              nested={
                <>
                  <ActionMenu.Item>Nest nest 2-1</ActionMenu.Item>
                  <ActionMenu.Item>Nest nest 2-2</ActionMenu.Item>
                </>
              }
            >
              Nest 4
            </ActionMenu.Item>
          </>
        }
      >
        One ({origin})
      </ActionMenu.Item>
      <ActionMenu.Item>Two</ActionMenu.Item>
    </ActionMenu>
  )

  const coords = {
    topLeft: { top: '16px', left: '16px' },
    topRight: { top: '16px', right: '16px' },
    bottomLeft: { bottom: '16px', left: '16px' },
    bottomRight: { bottom: '16px', right: '16px' }
  }

  return (
    <div>
      {Object.values(ActionMenu.origins).map(origin => (
        <div style={{ position: 'absolute', ...coords[origin] }} key={origin}>
          <NestedMenuDemo origin={origin} />
        </div>
      ))}
    </div>
  )
}

export const OnClickNested: Story = () => {
  const handleClick = (_e: unknown, value: unknown) => {
    action('on click')(value)
  }
  return (
    <ActionMenu onClick={handleClick}>
      <ActionMenu.Item value="-0">0</ActionMenu.Item>
      <ActionMenu.Item
        value="-1"
        nested={
          <>
            <ActionMenu.Item value="-1-1">1-1</ActionMenu.Item>
            <ActionMenu.Item
              value="-1-2"
              nested={
                <>
                  <ActionMenu.Item value="-1-2-1">1-2-1</ActionMenu.Item>
                  <ActionMenu.Item value="-1-2-2">1-2-2</ActionMenu.Item>
                  <ActionMenu.Item value="-1-2-3">1-2-3</ActionMenu.Item>
                </>
              }
            >
              1-2
            </ActionMenu.Item>
            <ActionMenu.Divider />
            <ActionMenu.Item value="-1-3">1-3</ActionMenu.Item>
            <ActionMenu.Item
              value="-1-4"
              nested={
                <>
                  <ActionMenu.Item value="-1-4-1">1-4-1</ActionMenu.Item>
                  <ActionMenu.Item value="-1-4-2">1-4-2</ActionMenu.Item>
                </>
              }
            >
              1-4
            </ActionMenu.Item>
          </>
        }
      >
        1
      </ActionMenu.Item>
      <ActionMenu.Item value="-2">2</ActionMenu.Item>
      <ActionMenu.Item value="-3">3</ActionMenu.Item>
      <ActionMenu.Item value="-4">4</ActionMenu.Item>
      <ActionMenu.Item value="-5">5</ActionMenu.Item>
      <ActionMenu.Item value="-6">6</ActionMenu.Item>
      <ActionMenu.Item value="-7">7</ActionMenu.Item>
      <ActionMenu.Item value="-8">8</ActionMenu.Item>
      <ActionMenu.Item value="-9">9</ActionMenu.Item>
      <ActionMenu.Item value="-10">10</ActionMenu.Item>
      <ActionMenu.Item value="-11">11</ActionMenu.Item>
      <ActionMenu.Item value="-12">12</ActionMenu.Item>
    </ActionMenu>
  )
}

export const CustomStyles: Story = () => (
  <ActionMenu>
    <ActionMenu.Item style={{ outline: '1px solid red' }}>
      One item
    </ActionMenu.Item>
    <ActionMenu.Item style={{ outline: '1px solid blue' }}>
      Two item
    </ActionMenu.Item>
    <ActionMenu.Item style={{ outline: '1px solid green' }}>
      Three item
    </ActionMenu.Item>
  </ActionMenu>
)

export const Link: Story = () => (
  <ActionMenu>
    <ActionMenu.Item href="https://duckduckgo.com" tagName="a">
      Links to web
    </ActionMenu.Item>
  </ActionMenu>
)

export const DisabledSingle: Story = () => (
  <ActionMenu>
    <ActionMenu.Item disabled>Single, disabled</ActionMenu.Item>
  </ActionMenu>
)

export const DisabledAll: Story = () => (
  <ActionMenu>
    <ActionMenu>
      <ActionMenu.Item disabled>Mult 1, disabled</ActionMenu.Item>
      <ActionMenu.Item disabled>Mult 2, disabled</ActionMenu.Item>
    </ActionMenu>
  </ActionMenu>
)

export const DisabledSome: Story = () => (
  <ActionMenu>
    <ActionMenu>
      <ActionMenu.Item>Enabled</ActionMenu.Item>
      <ActionMenu.Item disabled>Disabled</ActionMenu.Item>
      <ActionMenu.Item>Enabled</ActionMenu.Item>
      <ActionMenu.Item disabled>Disabled</ActionMenu.Item>
    </ActionMenu>
  </ActionMenu>
)

export const DisabledLinks: Story = () => (
  <ActionMenu>
    <ActionMenu.Item href="https://duck.com" tagName="a">
      Enabled
    </ActionMenu.Item>
    <ActionMenu.Item disabled href="https://duck.com" tagName="a">
      Disabled
    </ActionMenu.Item>
    <ActionMenu.Item href="https://duck.com" tagName="a">
      Enabled
    </ActionMenu.Item>
    <ActionMenu.Item disabled href="https://duck.com" tagName="a">
      Disabled
    </ActionMenu.Item>
  </ActionMenu>
)

export const DisabledNested: Story = () => (
  <ActionMenu>
    <ActionMenu.Item>Enabled</ActionMenu.Item>
    <ActionMenu.Item
      disabled
      nested={
        <>
          <ActionMenu.Item>Nest 1</ActionMenu.Item>
          <ActionMenu.Item
            nested={
              <>
                <ActionMenu.Item>Nest nest 1-1</ActionMenu.Item>
                <ActionMenu.Item>Nest nest 1-2</ActionMenu.Item>
                <ActionMenu.Item>Nest nest 1-3</ActionMenu.Item>
              </>
            }
          >
            Nest 2
          </ActionMenu.Item>
        </>
      }
    >
      Nested but disabled
    </ActionMenu.Item>
  </ActionMenu>
)

export const PositionBelowLeft: Story = () => (
  <div style={{ margin: core.layout.spacingMedium }}>
    <BelowLeft
      when
      show={
        <div>
          <ActionMenu>
            <ActionMenu.Item>One item</ActionMenu.Item>
            <ActionMenu.Item>Two item</ActionMenu.Item>
            <ActionMenu.Item>Three item</ActionMenu.Item>
          </ActionMenu>
        </div>
      }
    >
      <div
        style={{
          background: 'pink',
          display: 'inline-block',
          padding: core.layout.spacingXXSmall
        }}
      >
        anchor
      </div>
    </BelowLeft>
  </div>
)

export const PositionBelowRight: Story = () => (
  <div style={{ margin: core.layout.spacingMedium, float: 'right' }}>
    <BelowRight
      when
      show={
        <ActionMenu>
          <ActionMenu.Item>One item</ActionMenu.Item>
          <ActionMenu.Item>Two item</ActionMenu.Item>
          <ActionMenu.Item>Three item</ActionMenu.Item>
        </ActionMenu>
      }
    >
      <div
        style={{
          background: 'pink',
          display: 'inline-block',
          padding: core.layout.spacingXXSmall
        }}
      >
        anchor
      </div>
    </BelowRight>
  </div>
)

export const OnCloseToggles: Story = () => {
  function Story() {
    const [open, setOpen] = React.useState(true)
    type Callback = (evt: Event | MouseEvent | UIEvent) => void
    const show = () => setOpen(true)
    const hide: Callback = evt => {
      console.log(evt.target)
      setOpen(false)
    }

    return (
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
        vestibulum mattis ullamcorper velit sed ullamcorper. Nisl nisi
        scelerisque eu ultrices. Amet risus nullam eget felis. Arcu non sodales
        neque sodales ut etiam. Tortor at auctor urna nunc. Faucibus scelerisque
        eleifend donec pretium vulputate sapien nec sagittis aliquam.
        Condimentum vitae sapien pellentesque habitant morbi tristique. Egestas
        maecenas pharetra convallis posuere morbi leo urna molestie. Et ultrices
        neque ornare aenean euismod elementum nisi quis eleifend. Lobortis
        feugiat vivamus at augue eget arcu dictum. Fusce id velit ut tortor
        pretium viverra suspendisse. Convallis tellus id interdum velit. In
        tellus integer feugiat scelerisque varius morbi enim nunc faucibus.
        Tempor orci dapibus ultrices in iaculis nunc. Elit ullamcorper dignissim
        cras tincidunt lobortis feugiat. Sit amet massa vitae tortor.
        Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum.
        Ipsum dolor sit amet consectetur adipiscing. Sed felis eget velit
        aliquet sagittis. Elit pellentesque habitant morbi tristique. Sit amet
        consectetur adipiscing elit. Id volutpat lacus laoreet non curabitur
        gravida arcu ac. Enim neque volutpat ac tincidunt. Lorem ipsum dolor sit
        amet. Aliquam sem et tortor consequat id. Vitae tempus quam pellentesque
        nec nam. Platea dictumst quisque sagittis purus sit amet volutpat.
        <BelowRight
          when={open}
          show={
            <div>
              <ActionMenu
                onClose={hide as () => void}
                origin={ActionMenu.origins.topLeft}
              >
                <ActionMenu.Item>One item</ActionMenu.Item>
                <ActionMenu.Item>Two item</ActionMenu.Item>
                <ActionMenu.Item>Three item</ActionMenu.Item>
              </ActionMenu>
            </div>
          }
        >
          <div
            onClick={show}
            style={{
              background: 'pink',
              display: 'inline-block',
              padding: core.layout.spacingXXSmall
            }}
          >
            {!open ? 'click to show' : 'anchor'}
          </div>
        </BelowRight>
        Convallis tellus id interdum velit laoreet id. Convallis tellus id
        interdum velit laoreet id donec ultrices. Metus vulputate eu scelerisque
        felis imperdiet. Luctus venenatis lectus magna fringilla urna porttitor.
        Pellentesque habitant morbi tristique senectus. Mi bibendum neque
        egestas congue quisque egestas diam in. Faucibus interdum posuere lorem
        ipsum dolor sit. Tortor vitae purus faucibus ornare suspendisse sed nisi
        lacus sed. Ut tortor pretium viverra suspendisse potenti. Lectus proin
        nibh nisl condimentum id venenatis a condimentum. Consequat id porta
        nibh venenatis cras sed felis eget velit. Placerat orci nulla
        pellentesque dignissim enim sit. Erat imperdiet sed euismod nisi porta
        lorem mollis aliquam. Malesuada fames ac turpis egestas integer.
        Consectetur purus ut faucibus pulvinar elementum integer. Consectetur
        adipiscing elit pellentesque habitant morbi. Lorem ipsum dolor sit amet
        consectetur adipiscing elit ut. Sed tempus urna et pharetra pharetra
        massa massa ultricies mi. Dictumst quisque sagittis purus sit. Sapien
        nec sagittis aliquam malesuada bibendum arcu vitae elementum. Porttitor
        massa id neque aliquam vestibulum. Viverra maecenas accumsan lacus vel
        facilisis volutpat est. Ac orci phasellus egestas tellus. Dui vivamus
        arcu felis bibendum ut tristique. Pharetra convallis posuere morbi leo
        urna molestie at. Suscipit tellus mauris a diam maecenas. Cursus risus
        at ultrices mi tempus imperdiet nulla. Turpis egestas pretium aenean
        pharetra magna ac placerat vestibulum. In eu mi bibendum neque egestas
        congue quisque. Augue mauris augue neque gravida in fermentum. Interdum
        consectetur libero id faucibus nisl tincidunt eget. In metus vulputate
        eu scelerisque felis imperdiet proin. Ut lectus arcu bibendum at varius
        vel pharetra vel. Semper auctor neque vitae tempus quam pellentesque nec
        nam aliquam. In dictum non consectetur a erat nam at lectus urna. Sem
        fringilla ut morbi tincidunt. Porttitor massa id neque aliquam
        vestibulum morbi. Ut placerat orci nulla pellentesque dignissim enim sit
        amet. Sed augue lacus viverra vitae congue eu consequat. Nibh cras
        pulvinar mattis nunc sed. Nec ultrices dui sapien eget mi. Ut tellus
        elementum sagittis vitae. Diam sollicitudin tempor id eu nisl nunc mi
        ipsum. Nisi vitae suscipit tellus mauris a diam. Pellentesque dignissim
        enim sit amet venenatis urna cursus eget nunc. Feugiat pretium nibh
        ipsum consequat nisl vel pretium lectus. Amet justo donec enim diam
        vulputate. Arcu vitae elementum curabitur vitae. Urna cursus eget nunc
        scelerisque viverra mauris in aliquam sem. Vel turpis nunc eget lorem
        dolor sed viverra. Orci eu lobortis elementum nibh tellus molestie nunc
        non. Mi eget mauris pharetra et ultrices. Pulvinar neque laoreet
        suspendisse interdum consectetur libero id. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </div>
    )
  }

  return <Story />
}

export const OnCloseDropdown: Story = () => {
  function Story() {
    const [value, setValue] = React.useState('click to show')
    const [open, setOpen] = React.useState(true)
    type Callback = (evt: Event | MouseEvent | UIEvent) => void
    const show = () => setOpen(true)
    const hide: React.MouseEventHandler = evt => {
      setOpen(false)
    }
    const handleClick: React.MouseEventHandler = evt => {
      setValue((evt.target as HTMLSpanElement).innerText)
    }
    return (
      <BelowRight
        when={open}
        show={
          <ActionMenu
            onClose={hide as () => void}
            origin={ActionMenu.origins.topLeft}
            onClick={handleClick}
          >
            <ActionMenu.Item value="One item">One item</ActionMenu.Item>
            <ActionMenu.Item value="Two item">Two item</ActionMenu.Item>
            <ActionMenu.Item value="Three item">Three item</ActionMenu.Item>
          </ActionMenu>
        }
      >
        <div
          onClick={show}
          style={{
            background: 'pink',
            display: 'inline-block',
            padding: core.layout.spacingXXSmall
          }}
        >
          {value}
        </div>
      </BelowRight>
    )
  }

  return <Story />
}
