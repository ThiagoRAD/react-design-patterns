import './App.css'
import {ControlledForm} from './ControlledForm';
import {UncontrolledForm} from './UncontrolledForm';

const App = () => {
  return (
    <div>
      <UncontrolledForm />
      <hr />
      <ControlledForm />
    </div>
  );
};

export default App;
