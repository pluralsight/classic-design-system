import { action } from '@storybook/addon-actions'
import backgrounds from '@storybook/addon-backgrounds'
import Button from '@pluralsight/ps-design-system-button/react'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import { linkTo } from '@storybook/addon-links'
import React from 'react'
import ReactDOM from 'react-dom'
import sizeMe from 'react-sizeme'
import { storiesOf } from '@storybook/react'

import ActionMenu from '../react'

const bg = backgrounds([
  { name: 'product', value: core.colors.gray06, default: true }
])

// TODO: snapshot test generator can't handle.
// storiesOf('activations', module).addDecorator(bg).add('via button', _ => {
//   const Activator = sizeMe({ monitorHeight: true })(
//     class extends React.Component {
//       constructor(props) {
//         super(props)
//         this.state = { isOpen: true }
//         this.handleClick = this.handleClick.bind(this)
//       }
//       handleClick(evt) {
//         evt.preventDefault()
//         this.setState({ isOpen: !this.state.isOpen })
//       }
//       render() {
//         return (
//           <div style={{ display: 'inline-block', position: 'relative' }}>
//             <Button
//               appearance={this.state.isOpen ? null : Button.appearances.flat}
//               icon={<Icon id={Icon.ids.more} />}
//               onClick={this.handleClick}
//             />
//             {this.state.isOpen &&
//               <ActionMenu
//                 css={{
//                   left: 0, // TODO: make dynamic
//                   top: this.props.size.height
//                 }}
//               >
//                 <ActionMenu.Item iconId={Icon.ids.account}>
//                   qwer
//                 </ActionMenu.Item>
//                 <ActionMenu.Item iconId={Icon.ids.channel}>
//                   asdasd
//                 </ActionMenu.Item>
//                 <ActionMenu.Divider />
//                 <ActionMenu.Item iconId={Icon.ids.channel}>
//                   asdasd
//                 </ActionMenu.Item>
//               </ActionMenu>}
//           </div>
//         )
//       }
//     }
//   )
//   return <Activator />
// })

storiesOf('menu items', module)
  .addDecorator(bg)
  .add('one', _ =>
    <ActionMenu>
      <ActionMenu.Item>
        One item
      </ActionMenu.Item>
    </ActionMenu>
  )
  .add('multiple', _ =>
    <ActionMenu>
      <ActionMenu.Item>
        One item
      </ActionMenu.Item>
      <ActionMenu.Item>
        Two item
      </ActionMenu.Item>
      <ActionMenu.Item>
        Three item
      </ActionMenu.Item>
    </ActionMenu>
  )
  .add('with icons', _ =>
    <ActionMenu>
      <ActionMenu.Item iconId={Icon.ids.channel}>
        One item
      </ActionMenu.Item>
      <ActionMenu.Item iconId={Icon.ids.path}>
        Two item
      </ActionMenu.Item>
      <ActionMenu.Item iconId={Icon.ids.report}>
        Three item
      </ActionMenu.Item>
    </ActionMenu>
  )
  .add('long text', _ =>
    <ActionMenu>
      <ActionMenu.Item>
        One item that has text that goes on forever and onward into the
        universes yet to be
      </ActionMenu.Item>
      <ActionMenu.Item>
        Another item that takes a long time to explain in the context of
        everything that is in a line.
      </ActionMenu.Item>
    </ActionMenu>
  )
  .add('long text with icon', _ =>
    <ActionMenu>
      <ActionMenu.Item iconId={Icon.ids.channel}>
        One item that has text that goes on forever and onward into the
        universes yet to be
      </ActionMenu.Item>
    </ActionMenu>
  )

storiesOf('dividers', module)
  .addDecorator(bg)
  .add('edge', _ =>
    <ActionMenu>
      <ActionMenu.Item>
        One item
      </ActionMenu.Item>
      <ActionMenu.Divider />
    </ActionMenu>
  )
  .add('sandwich', _ =>
    <ActionMenu>
      <ActionMenu.Item>
        One item
      </ActionMenu.Item>
      <ActionMenu.Divider />
      <ActionMenu.Item>
        Two item
      </ActionMenu.Item>
      <ActionMenu.Item>
        Three item
      </ActionMenu.Item>
    </ActionMenu>
  )
