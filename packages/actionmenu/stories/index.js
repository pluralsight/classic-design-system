import { action } from '@storybook/addon-actions'
import addons from '@storybook/addons'
import Button from '@pluralsight/ps-design-system-button/react'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import ReactDOM from 'react-dom'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import ActionMenu from '../react'

// TODO: snapshot test generator can't handle.
// storiesOf('activations', module).addDecorator(themeDecorator(addons)).add('via button', _ => {
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
//                 <ActionMenu.Item icon={<Icon id={Icon.ids.account} />}>
//                   qwer
//                 </ActionMenu.Item>
//                 <ActionMenu.Item icon={<Icon id={Icon.ids.channel} />}>
//                   asdasd
//                 </ActionMenu.Item>
//                 <ActionMenu.Divider />
//                 <ActionMenu.Item icon={<Icon id={Icon.ids.channel} />}>
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
  .addDecorator(themeDecorator(addons))
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
  .add('with icons', _ => (
    <ActionMenu>
      <ActionMenu.Item icon={<Icon id={Icon.ids.channel} />}>
        One item
      </ActionMenu.Item>
      <ActionMenu.Item icon={<Icon id={Icon.ids.path} />}>
        Two item
      </ActionMenu.Item>
      <ActionMenu.Item icon={<Icon id={Icon.ids.report} />}>
        Three item
      </ActionMenu.Item>
    </ActionMenu>
  ))
  .add('long text', _ => (
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
  ))
  .add('long text with icon', _ => (
    <ActionMenu>
      <ActionMenu.Item icon={<Icon id={Icon.ids.channel} />}>
        One item that has text that goes on forever and onward into the
        universes yet to be
      </ActionMenu.Item>
    </ActionMenu>
  ))

storiesOf('dividers', module)
  .addDecorator(themeDecorator(addons))
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

const nestedStory = storiesOf('nested', module).addDecorator(
  themeDecorator(addons)
)

storiesOf('shouldFocusOnMount', module)
  .addDecorator(themeDecorator(addons))
  .add('false', _ => (
    <ActionMenu shouldFocusOnMount={false}>
      <ActionMenu.Item>One item</ActionMenu.Item>
      <ActionMenu.Item>Two item</ActionMenu.Item>
      <ActionMenu.Item>Three item</ActionMenu.Item>
    </ActionMenu>
  ))

const calcContainerStyle = origin => ({
  position: 'absolute',
  ...{
    topLeft: {
      left: 20,
      top: 20
    },
    topRight: {
      right: 20,
      top: 20
    },
    bottomRight: {
      bottom: 20,
      right: 20
    },
    bottomLeft: {
      left: 20,
      bottom: 20
    }
  }[origin]
})

Object.keys(ActionMenu.origins).forEach(origin =>
  nestedStory.add(`origin ${origin}`, _ => (
    <div style={calcContainerStyle(origin)}>
      <ActionMenu origin={origin}>
        <ActionMenu.Item
          nested={
            <ActionMenu origin={origin}>
              <ActionMenu.Item>Nest 1</ActionMenu.Item>
              <ActionMenu.Item
                nested={
                  <ActionMenu origin={origin}>
                    <ActionMenu.Item>Nest nest 1-1</ActionMenu.Item>
                    <ActionMenu.Item>Nest nest 1-2</ActionMenu.Item>
                    <ActionMenu.Item>Nest nest 1-3</ActionMenu.Item>
                  </ActionMenu>
                }
              >
                Nest 2
              </ActionMenu.Item>
              <ActionMenu.Divider />
              <ActionMenu.Item>Nest 3</ActionMenu.Item>
              <ActionMenu.Item
                nested={
                  <ActionMenu origin={origin}>
                    <ActionMenu.Item>Nest nest 2-1</ActionMenu.Item>
                    <ActionMenu.Item>Nest nest 2-2</ActionMenu.Item>
                  </ActionMenu>
                }
              >
                Nest 4
              </ActionMenu.Item>
            </ActionMenu>
          }
        >
          One
        </ActionMenu.Item>
        <ActionMenu.Item>Two</ActionMenu.Item>
      </ActionMenu>
    </div>
  ))
)

const onClickStory = storiesOf('onClick', module)
  .addDecorator(themeDecorator(addons))
  .add('flat', _ => (
    <ActionMenu>
      <ActionMenu.Item onClick={action('one')}>One item</ActionMenu.Item>
      <ActionMenu.Item onClick={action('two')}>Two item</ActionMenu.Item>
      <ActionMenu.Item onClick={action('three')}>Three item</ActionMenu.Item>
    </ActionMenu>
  ))
  .add('nested', _ => (
    <ActionMenu>
      <ActionMenu.Item onClick={action('-0')}>0</ActionMenu.Item>
      <ActionMenu.Item
        onClick={action('-1')}
        nested={
          <ActionMenu>
            <ActionMenu.Item onClick={action('-1-1')}>1-1</ActionMenu.Item>
            <ActionMenu.Item
              onClick={action('-1-2')}
              nested={
                <ActionMenu>
                  <ActionMenu.Item onClick={action('-1-2-1')}>
                    1-2-1
                  </ActionMenu.Item>
                  <ActionMenu.Item onClick={action('-1-2-2')}>
                    1-2-2
                  </ActionMenu.Item>
                  <ActionMenu.Item onClick={action('-1-2-3')}>
                    1-2-3
                  </ActionMenu.Item>
                </ActionMenu>
              }
            >
              1-2
            </ActionMenu.Item>
            <ActionMenu.Divider />
            <ActionMenu.Item onClick={action('-1-3')}>1-3</ActionMenu.Item>
            <ActionMenu.Item
              onClick={action('-1-4')}
              nested={
                <ActionMenu>
                  <ActionMenu.Item onClick={action('-1-4-1')}>
                    1-4-1
                  </ActionMenu.Item>
                  <ActionMenu.Item onClick={action('-1-4-2')}>
                    1-4-2
                  </ActionMenu.Item>
                </ActionMenu>
              }
            >
              1-4
            </ActionMenu.Item>
          </ActionMenu>
        }
      >
        1
      </ActionMenu.Item>
      <ActionMenu.Item onClick={action('-2')}>2</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-3')}>3</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-4')}>4</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-5')}>5</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-6')}>6</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-7')}>7</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-8')}>8</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-9')}>9</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-10')}>10</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-11')}>11</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-12')}>12</ActionMenu.Item>
    </ActionMenu>
  ))

const styleStory = storiesOf('customized styles', module)
  .addDecorator(themeDecorator(addons))
  .add('item style', _ => (
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
  ))

const linkStory = storiesOf('link', module)
  .addDecorator(themeDecorator(addons))
  .add('a w/ href', _ => (
    <ActionMenu>
      <ActionMenu.Item href="https://duckduckgo.com">
        Links to web
      </ActionMenu.Item>
    </ActionMenu>
  ))
