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
    it('triggers closes on outside click', () => {
      const onClose = jest.fn()

      render(
        <Dialog onClose={onClose} modal aria-label="test-modal-label">
          <MockChild />
        </Dialog>
      )
      fireEvent.click(document)

      expect(onClose).toHaveBeenCalled()
    })
  })

  describe('when `modal` and `disableCloseOnOutsideClick` are true', () => {
    it('does NOT trigger closes on outside click', () => {
      const onClose = jest.fn()

      render(
        <Dialog
          disableCloseOnOutsideClick
          onClose={onClose}
          modal
          aria-label="test-modal-label"
        >
          <MockChild />
        </Dialog>
      )
      fireEvent.click(document)

      expect(onClose).not.toHaveBeenCalled()
    })
  })
})
