import React, { useState } from 'react'
import {
  layout,
  colorsBackgroundLight
} from '@pluralsight/ps-design-system-core'
import Dialog from '@pluralsight/ps-design-system-dialog'
import { EqualColumnLayout } from '@pluralsight/ps-design-system-layout'

const Boxes = props => {
  const [modalSrc, setModalSrc] = useState(null)
  const handleOpen = modalSrc => setModalSrc(modalSrc)
  const handleClose = () => setModalSrc(null)

  return (
    <div style={{ margin: `${layout.spacingLarge} 0` }}>
      <EqualColumnLayout count={props.count || EqualColumnLayout.counts.three}>
        {React.Children.map(props.children, child => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: colorsBackgroundLight[2],
              borderRadius: 12
            }}
          >
            <button
              style={{
                border: 'none',
                background: 'none',
                cursor: 'pointer'
              }}
              onClick={_ => handleOpen(child.props.src)}
            >
              {child}
            </button>
          </div>
        ))}
      </EqualColumnLayout>
      {modalSrc && (
        <Dialog modal onClose={handleClose} aria-label="Enlarge graphic">
          <img
            style={{
              height: '55vh',
              width: '55vw'
            }}
            src={modalSrc}
          />
        </Dialog>
      )}
    </div>
  )
}

export default Boxes
