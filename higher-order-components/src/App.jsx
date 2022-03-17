import {printProps} from './printProps';
import {UserInfo} from './UserInfo';

function App() {
  const EnhancedComponent = printProps(UserInfo);
}

export default App;
