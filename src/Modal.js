import React from 'react'
import ReactDom from 'react-dom'

  const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    backgroundColor: 'var(--color-bg)',      // White background
    color: 'var(--color-text)',              // Charcoal text
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    maxWidth: '800px',
    width: '80%',
    maxHeight: '80%',
    borderRadius: '12px',
    overflow: 'auto',
    padding: '1rem'
  }

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',     // Lighter overlay
    zIndex: 999
  }

export default function Modal({ children, onClose }) {

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button className='modal-close' onClick={onClose}>×</button>
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  )
}