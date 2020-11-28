import {printProps} from './printProps';
import {UserInfo} from './UserInfo';

function App() {
  const UserInfoWrapped = printProps(UserInfo);

  return <UserInfoWrapped user={{id: 1, name: 'Black', hobbies: ['Reading', 'Traveling']}}></UserInfoWrapped>
}

export default App;
