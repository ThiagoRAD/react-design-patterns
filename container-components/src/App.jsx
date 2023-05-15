import {CurrentUserLoader} from './CurrentUserLoader';
import {UserInfo} from './UserInfo';
import UserLoader from './UserLoader';

function App() {
  return (
    <>
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}
      <UserLoader userId={1}>
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
