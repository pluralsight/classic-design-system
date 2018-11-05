import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import core from '@pluralsight/ps-design-system-core'
import Theme from '@pluralsight/ps-design-system-theme/react'

const styles = {
  decorator: ({ themeName }) => {
    const base = glamor.css({
      overflow: 'scroll',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      transition: `background ${core.motion.speedNormal}`,
      backgroundSize: 'cover',
      background: 'transparent'
    })

    const theme = glamor.css(
      themeName === 'dark' && { background: core.colors.gray06 },
      themeName === 'light' && { background: core.colors.bone }
    )

    return glamor.compose(
      base,
      theme
    )
  }
}

export class ThemeDecorator extends React.Component {
  constructor (props) {
    super(props)

    this.channel = this.props.addons.getChannel()
    this.story = this.props.story()

    this.setTheme = this.setTheme.bind(this)

    this.state = { themeName: Theme.defaultName }
  }

  componentWillMount () {
    this.channel.on('theme', this.setTheme)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.story !== this.props.story) this.story = nextProps.story()
  }

  componentWillUnmount () {
    this.channel.removeListener('theme', this.setTheme)
  }

  setTheme (themeName) {
    this.setState({ themeName })
  }

  handleClick (themeName) {
    this.setState({ themeName })
    this.channel.emit('ps-design-system-theme/names/select', themeName)
  }

  render () {
    return (
      <div {...styles.decorator({ themeName: this.state.themeName })}>
        <Theme name={this.state.themeName}>{this.story}</Theme>
      </div>
    )
  }
}

ThemeDecorator.propTypes = {
  addons: PropTypes.shape({
    getChannel: PropTypes.func.isRequired
  }).isRequired,
  story: PropTypes.func.isRequired
}

// NOTE: unconventional need to pass addons here.  dealt with this for a day
// https://storybook.js.org/basics/faq/#why-is-there-no-addons-channel
// this is the way I solved it, finally
export default addons => story => (
  <ThemeDecorator addons={addons} story={story} />
)
