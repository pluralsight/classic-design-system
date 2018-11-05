import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import core from '@pluralsight/ps-design-system-core'
import Theme from '@pluralsight/ps-design-system-theme/react'

const styles = {
  container: props =>
    glamor.css({
      border: `1px solid ${core.colors.gray01}`,
      borderRadius: 4,
      color: 'inherit',
      cursor: 'pointer',
      display: 'inline-block',
      overflow: 'hidden',
      padding: 0,
      textAlign: 'left',
      width: 150,
      wordWrap: 'break-word',

      '& + &': { marginLeft: 10 },
      '&:first-child': { marginLeft: 0 }
    }),
  preview: props => {
    const base = glamor.css({
      height: 60
    })
    const theme = glamor.css(
      props.name === 'dark' && { background: core.colors.gray06 },
      props.name === 'light' && { background: core.colors.bone }
    )

    return glamor.compose(
      base,
      theme
    )
  },
  info: props =>
    glamor.css({
      borderTop: `1px solid ${core.colors.gray01}`,
      color: core.colors.gray03,
      padding: '0 10px'
    }),
  title: props =>
    glamor.css({
      color: 'inherit',
      fontWeight: 'bold',
      fontSize: 12,
      textTransform: 'uppercase'
    })
}

const Container = props => <button {...styles.container()} {...props} />

const Preview = props => <div {...styles.preview(props)} {...props} />

const Info = props => <div {...styles.info()} {...props} />

const Title = props => <h2 {...styles.title()} {...props} />

Title.propTypes = {
  children: PropTypes.string.isRequired
}

class Swatch extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    this.props.onSelect(event, this.props.name)
  }

  render () {
    return (
      <Container onClick={this.handleClick}>
        <Preview name={this.props.name} />
        <Info>
          <Title>{this.props.name}</Title>
        </Info>
      </Container>
    )
  }
}

Swatch.propTypes = {
  name: PropTypes.oneOf(Object.values(Theme.names)).isRequired,
  onSelect: PropTypes.func.isRequired
}

module.exports = Swatch
