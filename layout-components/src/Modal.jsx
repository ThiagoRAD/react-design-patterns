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

const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false)
  return (
    <>
    <button onClick={() => setShouldShow(true)}>Show Modal</button>
    {shouldShow && (
      <ModalBackground>
        <ModalBody>
          {children}
        </ModalBody>
      </ModalBackground>
    )}
    </>
  );
}

export default Modal
