import core from '@pluralsight/ps-design-system-core'
import Button from '@pluralsight/ps-design-system-button/react'
import Dialog from '@pluralsight/ps-design-system-dialog/react'
import React from 'react'
import * as Text from '@pluralsight/ps-design-system-text/react'
import { transparentize } from 'polished'

import { Head, withServerProps } from '../../src/ui'

export default withServerProps(
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = { isOpen: false }
      this.handleButtonClick = this.handleButtonClick.bind(this)
    }
    handleButtonClick() {
      this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
      return (
        <div className="page">
          <Head />
          <div className="app" aria-hidden={this.state.isOpen}>
            <Button onClick={this.handleButtonClick}>Open Modal</Button>
          </div>
          {this.state.isOpen && (
            <Dialog modal onClose={this.handleButtonClick}>
              <Text.Heading>
                <h2>Lorem ipsum dolor sit amet.</h2>
              </Text.Heading>
              <div style={{ background: core.colors.bone, height: '176px' }} />
              <div className="buttons">
                <Button appearance={Button.appearances.stroke}>
                  Secondary
                </Button>
                <Button>Primary button</Button>
              </div>
            </Dialog>
          )}

          <style jsx>{`
            :global(body) {
              margin: 0;
            }
            .page {
              display: flex;
              justify-content: center;
              height: 100vh;
              width: 100vw;
              background-color: ${transparentize(0.5, core.colors.black)};
            }
            .app {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .buttons {
              display: flex;
              justify-content: flex-end;
              padding-top: ${core.layout.spacingMedium};
            }
            .buttons > :global(button) {
              margin-left: ${core.layout.spacingMedium};
            }
          `}</style>
        </div>
      )
    }
  }
)
