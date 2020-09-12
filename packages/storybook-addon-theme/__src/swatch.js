import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import * as core from '@pluralsight/ps-design-system-core'
import Theme from '@pluralsight/ps-design-system-theme'

const styles = {
  container: props =>
    glamor.css({
      border: `1px solid ${core.colorsBorder.lowOnLight}`,
      borderRadius: 4,
      color: 'inherit',
      cursor: 'pointer',
      display: 'inline-block',
      overflow: 'hidden',
      padding: 0,
      margin: core.layout.spacingXSmall,
      textAlign: 'left',
      width: 150,
      wordWrap: 'break-word'
    }),
  preview: props => {
    const base = glamor.css({
      height: 60
    })
    const theme = glamor.css(
      props.name === 'dark' && { background: core.colorsBackgroundDark[2] },
      props.name === 'light' && { background: core.colorsBackgroundLight[2] }
    )

    return glamor.compose(base, theme)
  },
  info: props =>
    glamor.css({
      borderTop: `1px solid ${core.colorsBorder.highOnLight}`,
      color: core.colorsTextIcon.highOnLight,
      padding: '0 10px'
    }),
  title: props =>
    glamor.css({
      color: 'inherit',
      fontWeight: 'bold',
      fontSize: 12,
      padding: `${core.layout.spacingXSmall} 0`,
      textTransform: 'uppercase'
    })
}

export default function Swatch({ onSelect, name, ...props }) {
  function handleClick(evt) {
    onSelect(evt, name)
  }

  return (
    <Container onClick={handleClick}>
      <Preview name={name} />
      <Info>
        <Title>{name}</Title>
      </Info>
    </Container>
  )
}

Swatch.propTypes = {
  name: PropTypes.oneOf(Object.values(Theme.names)).isRequired,
  onSelect: PropTypes.func.isRequired
}

const Container = props => <button {...styles.container()} {...props} />

const Preview = props => <div {...styles.preview(props)} {...props} />

const Info = props => <div {...styles.info()} {...props} />

const Title = props => <h2 {...styles.title()} {...props} />

Title.propTypes = {
  children: PropTypes.string.isRequired
}
