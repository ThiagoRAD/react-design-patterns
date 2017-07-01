import { inLayout } from './inLayout'
import {printProps} from './printProps';
import {UserInfo} from './UserInfo';
import { withUser } from './withUser'

function App() {
  const UserInfoWrapped = inLayout(withUser(printProps(UserInfo), 1));

  return <UserInfoWrapped />
}

export default App;
