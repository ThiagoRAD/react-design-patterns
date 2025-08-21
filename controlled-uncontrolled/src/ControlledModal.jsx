import { useState } from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  overflow: auto;
`

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
  border-radius: 8px;
`

export const ControlledModal = ({ children, shouldShow, onRequestClose }) => {
  return shouldShow && (
      <ModalBackground onClick={onRequestClose}>
        <ModalBody onClick={e => e.stopPropagation()}>
          <button onClick={onRequestClose}>Hide Modal</button>
          {children}
        </ModalBody>
      </ModalBackground>
    );
}

