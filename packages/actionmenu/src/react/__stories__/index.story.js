import React, { useRef, useEffect } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import * as core from '@pluralsight/ps-design-system-core'
import * as Icon from '@pluralsight/ps-design-system-icon'
import { BelowLeft, BelowRight } from '@pluralsight/ps-design-system-position'

import ActionMenu from '../index.js'

storiesOf('menu items', module)
  .add('one', _ => (
    <ActionMenu>
      <ActionMenu.Item>One item</ActionMenu.Item>
    </ActionMenu>
  ))
  .add('multiple', _ => (
    <ActionMenu>
      <ActionMenu.Item>One item</ActionMenu.Item>
      <ActionMenu.Item>Two item</ActionMenu.Item>
      <ActionMenu.Item>Three item</ActionMenu.Item>
    </ActionMenu>
  ))
  .add('lots', _ => (
    <ActionMenu>
      {new Array(30).fill(null).map((_, index) => (
        <ActionMenu.Item key={index}>index: {index}</ActionMenu.Item>
      ))}
    </ActionMenu>
  ))
  .add('flex gutter', _ => (
    <ActionMenu>
      <ActionMenu.Item>
        <span>Label</span>
        <span>😀</span>
      </ActionMenu.Item>
    </ActionMenu>
  ))
  .add('ellipsis', _ => (
    <ActionMenu>
      <ActionMenu.Item>
        One item that has text that goes on forever and onward into the
        universes yet to be
      </ActionMenu.Item>
    </ActionMenu>
  ))
  .add('with icons', _ => (
    <ActionMenu>
      <ActionMenu.Item>
        <Icon.ChannelIcon />
        <span>One item</span>
      </ActionMenu.Item>
      <ActionMenu.Item>
        <Icon.PathIcon />
        <span>Two item</span>
      </ActionMenu.Item>
      <ActionMenu.Item>
        <Icon.ReportIcon />
        <span>Three item</span>
      </ActionMenu.Item>
    </ActionMenu>
  ))
  .add('ellipses with icon', _ => (
    <ActionMenu>
      <ActionMenu.Item>
        <span
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          One item that has text that goes on forever and onward into the
          universes yet to be
        </span>
        <Icon.ChannelIcon style={{ flex: 'none' }} />
      </ActionMenu.Item>
    </ActionMenu>
  ))
//   .add('long text', _ => (
//     <ActionMenu>
//       <ActionMenu.Item>
//         One item that has text that goes on forever and onward into the
//         universes yet to be
//       </ActionMenu.Item>
//       <ActionMenu.Item>
//         Another item that takes a long time to explain in the context of
//         everything that is in a line.
//       </ActionMenu.Item>
//     </ActionMenu>
//   ))
//   .add('null item', _ => (
//     <ActionMenu>
//       <ActionMenu.Item>One item</ActionMenu.Item>
//       {null}
//       <ActionMenu.Item>Skip to three item</ActionMenu.Item>
//     </ActionMenu>
//   ))

storiesOf('dividers', module)
  .add('edge', _ => (
    <ActionMenu>
      <ActionMenu.Item>One item</ActionMenu.Item>
      <ActionMenu.Divider />
    </ActionMenu>
  ))
  .add('sandwich', _ => (
    <ActionMenu>
      <ActionMenu.Item>One item</ActionMenu.Item>
      <ActionMenu.Divider />
      <ActionMenu.Item>Two item</ActionMenu.Item>
      <ActionMenu.Item>Three item</ActionMenu.Item>
    </ActionMenu>
  ))

const BlurOnMount = () => {
  const ref = useRef(null)
  useEffect(() => {
    ref.current && ref.current.querySelector('* > li').blur()
  })
  return (
    <ActionMenu ref={ref}>
      <ActionMenu.Item>One item</ActionMenu.Item>
      <ActionMenu.Item>Two item</ActionMenu.Item>
      <ActionMenu.Item>Three item</ActionMenu.Item>
    </ActionMenu>
  )
}
storiesOf('Blur onMount', module).add('example', _ => <BlurOnMount />)

// const calcContainerStyle = origin => ({
//   position: 'absolute',
//   ...{
//     topLeft: {
//       left: 20,
//       top: 20
//     },
//     topRight: {
//       right: 20,
//       top: 20
//     },
//     bottomRight: {
//       bottom: 20,
//       right: 20
//     },
//     bottomLeft: {
//       left: 20,
//       bottom: 20
//     }
//   }[origin]
// })
const NestedMenu = props => (
  <ActionMenu {...props}>
    <ActionMenu.Item
      subMenuItems={
        <>
          <ActionMenu.Item>Nest 1</ActionMenu.Item>
          <ActionMenu.Item
            subMenuItems={
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
            subMenuItems={
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
      One
    </ActionMenu.Item>
    <ActionMenu.Item>Two</ActionMenu.Item>
  </ActionMenu>
)
storiesOf('subMenus', module)
  .add(`example`, _ => <NestedMenu />)
  .add('four corners', () => {
    return (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'grid',
          grid: '1fr 1fr/ 1fr 1fr'
        }}
      >
        <NestedMenu
          style={{
            position: 'relative',
            justifySelf: 'start',
            alignSelf: 'start'
          }}
        />
        <NestedMenu
          style={{
            position: 'relative',
            justifySelf: 'end',
            alignSelf: 'start'
          }}
        />
        <NestedMenu
          style={{
            position: 'relative',
            justifySelf: 'start',
            alignSelf: 'end'
          }}
        />
        <NestedMenu
          style={{
            position: 'relative',
            justifySelf: 'end',
            alignSelf: 'end'
          }}
        />
      </div>
    )
  })
// Object.keys(ActionMenu.origins).forEach(origin =>
//   nestedStory.add(`origin ${origin}`, _ => (
//     <div style={calcContainerStyle(origin)}>
//       <ActionMenu origin={origin}>
//         <ActionMenu.Item
//           nested={
//             <ActionMenu origin={origin}>
//               <ActionMenu.Item>Nest 1</ActionMenu.Item>
//               <ActionMenu.Item
//                 nested={
//                   <ActionMenu origin={origin}>
//                     <ActionMenu.Item>Nest nest 1-1</ActionMenu.Item>
//                     <ActionMenu.Item>Nest nest 1-2</ActionMenu.Item>
//                     <ActionMenu.Item>Nest nest 1-3</ActionMenu.Item>
//                   </ActionMenu>
//                 }
//               >
//                 Nest 2
//               </ActionMenu.Item>
//               <ActionMenu.Divider />
//               <ActionMenu.Item>Nest 3</ActionMenu.Item>
//               <ActionMenu.Item
//                 nested={
//                   <ActionMenu origin={origin}>
//                     <ActionMenu.Item>Nest nest 2-1</ActionMenu.Item>
//                     <ActionMenu.Item>Nest nest 2-2</ActionMenu.Item>
//                   </ActionMenu>
//                 }
//               >
//                 Nest 4
//               </ActionMenu.Item>
//             </ActionMenu>
//           }
//         >
//           One
//         </ActionMenu.Item>
//         <ActionMenu.Item>Two</ActionMenu.Item>
//       </ActionMenu>
//     </div>
//   ))
// )

// storiesOf('onClick', module)
//   .add('flat', _ => (
//     <ActionMenu>
//       <ActionMenu.Item onClick={action('one')}>One item</ActionMenu.Item>
//       <ActionMenu.Item onClick={action('two')}>Two item</ActionMenu.Item>
//       <ActionMenu.Item onClick={action('three')}>Three item</ActionMenu.Item>
//     </ActionMenu>
//   ))
//   .add('nested', _ => (
//     <ActionMenu>
//       <ActionMenu.Item onClick={action('-0')}>0</ActionMenu.Item>
//       <ActionMenu.Item
//         onClick={action('-1')}
//         nested={
//           <ActionMenu>
//             <ActionMenu.Item onClick={action('-1-1')}>1-1</ActionMenu.Item>
//             <ActionMenu.Item
//               onClick={action('-1-2')}
//               nested={
//                 <ActionMenu>
//                   <ActionMenu.Item onClick={action('-1-2-1')}>
//                     1-2-1
//                   </ActionMenu.Item>
//                   <ActionMenu.Item onClick={action('-1-2-2')}>
//                     1-2-2
//                   </ActionMenu.Item>
//                   <ActionMenu.Item onClick={action('-1-2-3')}>
//                     1-2-3
//                   </ActionMenu.Item>
//                 </ActionMenu>
//               }
//             >
//               1-2
//             </ActionMenu.Item>
//             <ActionMenu.Divider />
//             <ActionMenu.Item onClick={action('-1-3')}>1-3</ActionMenu.Item>
//             <ActionMenu.Item
//               onClick={action('-1-4')}
//               nested={
//                 <ActionMenu>
//                   <ActionMenu.Item onClick={action('-1-4-1')}>
//                     1-4-1
//                   </ActionMenu.Item>
//                   <ActionMenu.Item onClick={action('-1-4-2')}>
//                     1-4-2
//                   </ActionMenu.Item>
//                 </ActionMenu>
//               }
//             >
//               1-4
//             </ActionMenu.Item>
//           </ActionMenu>
//         }
//       >
//         1
//       </ActionMenu.Item>
//       <ActionMenu.Item onClick={action('-2')}>2</ActionMenu.Item>
//       <ActionMenu.Item onClick={action('-3')}>3</ActionMenu.Item>
//       <ActionMenu.Item onClick={action('-4')}>4</ActionMenu.Item>
//       <ActionMenu.Item onClick={action('-5')}>5</ActionMenu.Item>
//       <ActionMenu.Item onClick={action('-6')}>6</ActionMenu.Item>
//       <ActionMenu.Item onClick={action('-7')}>7</ActionMenu.Item>
//       <ActionMenu.Item onClick={action('-8')}>8</ActionMenu.Item>
//       <ActionMenu.Item onClick={action('-9')}>9</ActionMenu.Item>
//       <ActionMenu.Item onClick={action('-10')}>10</ActionMenu.Item>
//       <ActionMenu.Item onClick={action('-11')}>11</ActionMenu.Item>
//       <ActionMenu.Item onClick={action('-12')}>12</ActionMenu.Item>
//     </ActionMenu>
//   ))

// storiesOf('customized styles', module).add('item style', _ => (
//   <ActionMenu>
//     <ActionMenu.Item style={{ outline: '1px solid red' }}>
//       One item
//     </ActionMenu.Item>
//     <ActionMenu.Item style={{ outline: '1px solid blue' }}>
//       Two item
//     </ActionMenu.Item>
//     <ActionMenu.Item style={{ outline: '1px solid green' }}>
//       Three item
//     </ActionMenu.Item>
//   </ActionMenu>
// ))

// storiesOf('link', module).add('a w/ href', _ => (
//   <ActionMenu>
//     <ActionMenu.Item href="https://duckduckgo.com">
//       Links to web
//     </ActionMenu.Item>
//   </ActionMenu>
// ))

storiesOf('disabled', module).add('single, disabled', _ => (
  <ActionMenu>
    <ActionMenu.Item disabled>Single, disabled</ActionMenu.Item>
  </ActionMenu>
))
//   .add('multiple, all disabled', _ => (
//     <ActionMenu>
//       <ActionMenu.Item disabled>Mult 1, disabled</ActionMenu.Item>
//       <ActionMenu.Item disabled>Mult 2, disabled</ActionMenu.Item>
//     </ActionMenu>
//   ))
//   .add('item', _ => (
//     <ActionMenu>
//       <ActionMenu.Item>Enabled</ActionMenu.Item>
//       <ActionMenu.Item disabled>Disabled</ActionMenu.Item>
//       <ActionMenu.Item>Enabled</ActionMenu.Item>
//       <ActionMenu.Item disabled>Disabled</ActionMenu.Item>
//     </ActionMenu>
//   ))
//   .add('links', _ => (
//     <ActionMenu>
//       <ActionMenu.Item href="https://duck.com">Enabled</ActionMenu.Item>
//       <ActionMenu.Item disabled href="https://duck.com">
//         Disabled
//       </ActionMenu.Item>
//       <ActionMenu.Item href="https://duck.com">Enabled</ActionMenu.Item>
//       <ActionMenu.Item disabled href="https://duck.com">
//         Disabled
//       </ActionMenu.Item>
//     </ActionMenu>
//   ))
//   .add('nested', _ => (
//     <ActionMenu>
//       <ActionMenu.Item>Enabled</ActionMenu.Item>
//       <ActionMenu.Item
//         disabled
//         nested={
//           <ActionMenu>
//             <ActionMenu.Item>Nest 1</ActionMenu.Item>
//             <ActionMenu.Item
//               nested={
//                 <ActionMenu>
//                   <ActionMenu.Item>Nest nest 1-1</ActionMenu.Item>
//                   <ActionMenu.Item>Nest nest 1-2</ActionMenu.Item>
//                   <ActionMenu.Item>Nest nest 1-3</ActionMenu.Item>
//                 </ActionMenu>
//               }
//             >
//               Nest 2
//             </ActionMenu.Item>
//           </ActionMenu>
//         }
//       >
//         Nested but disabled
//       </ActionMenu.Item>
//     </ActionMenu>
//   ))

// storiesOf('with Position', module)
//   .add('BelowLeft', () => (
//     <div style={{ margin: core.layout.spacingMedium }}>
//       <BelowLeft
//         when
//         show={
//           <div>
//             <ActionMenu
//               origin={ActionMenu.origins.topLeft}
//               shouldFocusOnMount={false}
//             >
//               <ActionMenu.Item>One item</ActionMenu.Item>
//               <ActionMenu.Item>Two item</ActionMenu.Item>
//               <ActionMenu.Item>Three item</ActionMenu.Item>
//             </ActionMenu>
//           </div>
//         }
//       >
//         <div
//           style={{
//             background: 'pink',
//             display: 'inline-block',
//             padding: core.layout.spacingXXSmall
//           }}
//         >
//           anchor
//         </div>
//       </BelowLeft>
//     </div>
//   ))
//   .add('BelowRight', () => (
//     <div style={{ margin: core.layout.spacingMedium, float: 'right' }}>
//       <BelowRight
//         when
//         show={
//           <div>
//             <ActionMenu
//               origin={ActionMenu.origins.topRight}
//               shouldFocusOnMount={false}
//             >
//               <ActionMenu.Item>One item</ActionMenu.Item>
//               <ActionMenu.Item>Two item</ActionMenu.Item>
//               <ActionMenu.Item>Three item</ActionMenu.Item>
//             </ActionMenu>
//           </div>
//         }
//       >
//         <div
//           style={{
//             background: 'pink',
//             display: 'inline-block',
//             padding: core.layout.spacingXXSmall
//           }}
//         >
//           anchor
//         </div>
//       </BelowRight>
//     </div>
//   ))

// storiesOf('onClose', module).add('toggle show/hide', () => {
//   function Story() {
//     const [open, setOpen] = React.useState(true)

//     const show = () => setOpen(true)
//     const hide = () => setOpen(false)

//     return (
//       <div
//         style={{
//           width: '100%',
//           height: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           flexDirection: 'column'
//         }}
//       >
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Porta nibh venenatis
//         cras sed. Ornare lectus sit amet est placerat in egestas. Sed lectus
//         vestibulum mattis ullamcorper velit sed ullamcorper. Nisl nisi
//         scelerisque eu ultrices. Amet risus nullam eget felis. Arcu non sodales
//         neque sodales ut etiam. Tortor at auctor urna nunc. Faucibus scelerisque
//         eleifend donec pretium vulputate sapien nec sagittis aliquam.
//         Condimentum vitae sapien pellentesque habitant morbi tristique. Egestas
//         maecenas pharetra convallis posuere morbi leo urna molestie. Et ultrices
//         neque ornare aenean euismod elementum nisi quis eleifend. Lobortis
//         feugiat vivamus at augue eget arcu dictum. Fusce id velit ut tortor
//         pretium viverra suspendisse. Convallis tellus id interdum velit. In
//         tellus integer feugiat scelerisque varius morbi enim nunc faucibus.
//         Tempor orci dapibus ultrices in iaculis nunc. Elit ullamcorper dignissim
//         cras tincidunt lobortis feugiat. Sit amet massa vitae tortor.
//         Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum.
//         Ipsum dolor sit amet consectetur adipiscing. Sed felis eget velit
//         aliquet sagittis. Elit pellentesque habitant morbi tristique. Sit amet
//         consectetur adipiscing elit. Id volutpat lacus laoreet non curabitur
//         gravida arcu ac. Enim neque volutpat ac tincidunt. Lorem ipsum dolor sit
//         amet. Aliquam sem et tortor consequat id. Vitae tempus quam pellentesque
//         nec nam. Platea dictumst quisque sagittis purus sit amet volutpat.
//         <BelowLeft
//           when={open}
//           show={
//             <div>
//               <ActionMenu
//                 onClose={hide}
//                 origin={ActionMenu.origins.topLeft}
//                 shouldFocusOnMount={false}
//               >
//                 <ActionMenu.Item>One item</ActionMenu.Item>
//                 <ActionMenu.Item>Two item</ActionMenu.Item>
//                 <ActionMenu.Item>Three item</ActionMenu.Item>
//               </ActionMenu>
//             </div>
//           }
//         >
//           <div
//             onClick={show}
//             style={{
//               background: 'pink',
//               display: 'inline-block',
//               padding: core.layout.spacingXXSmall
//             }}
//           >
//             {!open ? 'click to show' : 'anchor'}
//           </div>
//         </BelowLeft>
//         Convallis tellus id interdum velit laoreet id. Convallis tellus id
//         interdum velit laoreet id donec ultrices. Metus vulputate eu scelerisque
//         felis imperdiet. Luctus venenatis lectus magna fringilla urna porttitor.
//         Pellentesque habitant morbi tristique senectus. Mi bibendum neque
//         egestas congue quisque egestas diam in. Faucibus interdum posuere lorem
//         ipsum dolor sit. Tortor vitae purus faucibus ornare suspendisse sed nisi
//         lacus sed. Ut tortor pretium viverra suspendisse potenti. Lectus proin
//         nibh nisl condimentum id venenatis a condimentum. Consequat id porta
//         nibh venenatis cras sed felis eget velit. Placerat orci nulla
//         pellentesque dignissim enim sit. Erat imperdiet sed euismod nisi porta
//         lorem mollis aliquam. Malesuada fames ac turpis egestas integer.
//         Consectetur purus ut faucibus pulvinar elementum integer. Consectetur
//         adipiscing elit pellentesque habitant morbi. Lorem ipsum dolor sit amet
//         consectetur adipiscing elit ut. Sed tempus urna et pharetra pharetra
//         massa massa ultricies mi. Dictumst quisque sagittis purus sit. Sapien
//         nec sagittis aliquam malesuada bibendum arcu vitae elementum. Porttitor
//         massa id neque aliquam vestibulum. Viverra maecenas accumsan lacus vel
//         facilisis volutpat est. Ac orci phasellus egestas tellus. Dui vivamus
//         arcu felis bibendum ut tristique. Pharetra convallis posuere morbi leo
//         urna molestie at. Suscipit tellus mauris a diam maecenas. Cursus risus
//         at ultrices mi tempus imperdiet nulla. Turpis egestas pretium aenean
//         pharetra magna ac placerat vestibulum. In eu mi bibendum neque egestas
//         congue quisque. Augue mauris augue neque gravida in fermentum. Interdum
//         consectetur libero id faucibus nisl tincidunt eget. In metus vulputate
//         eu scelerisque felis imperdiet proin. Ut lectus arcu bibendum at varius
//         vel pharetra vel. Semper auctor neque vitae tempus quam pellentesque nec
//         nam aliquam. In dictum non consectetur a erat nam at lectus urna. Sem
//         fringilla ut morbi tincidunt. Porttitor massa id neque aliquam
//         vestibulum morbi. Ut placerat orci nulla pellentesque dignissim enim sit
//         amet. Sed augue lacus viverra vitae congue eu consequat. Nibh cras
//         pulvinar mattis nunc sed. Nec ultrices dui sapien eget mi. Ut tellus
//         elementum sagittis vitae. Diam sollicitudin tempor id eu nisl nunc mi
//         ipsum. Nisi vitae suscipit tellus mauris a diam. Pellentesque dignissim
//         enim sit amet venenatis urna cursus eget nunc. Feugiat pretium nibh
//         ipsum consequat nisl vel pretium lectus. Amet justo donec enim diam
//         vulputate. Arcu vitae elementum curabitur vitae. Urna cursus eget nunc
//         scelerisque viverra mauris in aliquam sem. Vel turpis nunc eget lorem
//         dolor sed viverra. Orci eu lobortis elementum nibh tellus molestie nunc
//         non. Mi eget mauris pharetra et ultrices. Pulvinar neque laoreet
//         suspendisse interdum consectetur libero id. Vestibulum lectus mauris
//         ultrices eros in cursus turpis massa.
//       </div>
//     )
//   }

//   return <Story />
// })
