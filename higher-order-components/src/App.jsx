import {printProps} from './printProps';
import {UserInfo} from './UserInfo';

function App() {
  const UserInfoWrapped = printProps(UserInfo);

  return <UserInfoWrapped a={1} b="Hello" c={{name: 'Black'}} user={{id: 1, name: 'John Doe', hobbies: ['Reading', 'Traveling']}}></UserInfoWrapped>
}

export default App;
