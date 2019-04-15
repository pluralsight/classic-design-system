import React from 'react'
import {
  cleanup,
  fireEvent,
  render,
  waitForElement
} from 'react-testing-library'

import Dialog from '..'

const MockChild = props => <div data-testid="mock-child" {...props} />

describe('Dialog', () => {
  afterEach(cleanup)

  it('exports tailPositions', () => {
    expect(Dialog.tailPositions).toMatchSnapshot()
  })

  it('renders with children', async () => {
    const { getByTestId } = render(
      <Dialog>
        <MockChild />
      </Dialog>
    )

    await waitForElement(() => getByTestId('mock-child'))
  })

  it('triggers closes on escape key', async () => {
    const onClose = jest.fn()

    const { getByTestId } = render(
      <Dialog onClose={onClose}>
        <MockChild />
      </Dialog>
    )
    const child = await waitForElement(() => getByTestId('mock-child'))
    fireEvent.keyUp(child, { key: 'Escape' })

    expect(onClose).toHaveBeenCalled()
  })

  describe('when `disableCloseOnEscape` is true', () => {
    it('does NOT triggers close on escape key', async () => {
      const onClose = jest.fn()

      const { getByTestId } = render(
        <Dialog disableCloseOnEscape onClose={onClose}>
          <MockChild />
        </Dialog>
      )
      const child = await waitForElement(() => getByTestId('mock-child'))
      fireEvent.keyUp(child, { key: 'Escape' })

      expect(onClose).not.toHaveBeenCalled()
    })
  })

  describe('when `modal` is true', () => {
    it('triggers closes when overlay is clicked', async () => {
      const onClose = jest.fn()

      const { container } = render(
        <Dialog onClose={onClose} modal aria-label="test-modal-label">
          <MockChild />
        </Dialog>
      )

      const overlay = await waitForElement(() =>
        container.querySelector('#psds-dialog__overlay')
      )
      fireEvent.click(overlay)

      expect(onClose).toHaveBeenCalled()
    })
  })

  describe('when `modal` and `disableCloseOnOverlayClick` are true', () => {
    it('does NOT trigger close when overlay is clicked', async () => {
      const onClose = jest.fn()

      const { container } = render(
        <Dialog
          aria-label="test-modal-label"
          disableCloseOnOverlayClick
          modal
          onClose={onClose}
        >
          <MockChild />
        </Dialog>
      )

      const overlay = await waitForElement(() =>
        container.querySelector('#psds-dialog__overlay')
      )
      fireEvent.click(overlay)

      expect(onClose).not.toHaveBeenCalled()
    })
  })
})
