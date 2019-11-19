import { useState } from 'react'
import './App.css'
import {ControlledForm} from './ControlledForm';
import { ControlledModal } from './ControlledModal'

const App = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <ControlledModal shouldShow={showModal} onRequestClose={() => setShowModal(false)}>
        <ControlledForm />
      </ControlledModal>
      <hr />
    </div>
  );
};

export default App;
