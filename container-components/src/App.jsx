import {CurrentUserLoader} from './CurrentUserLoader';
import ResourceLoader from './ResourceLoader'
import {UserInfo} from './UserInfo';
import UserLoader from './UserLoader';

function App() {
  return (
    <>
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}
      {/* <UserLoader userId={1}>
        <UserInfo />
      </UserLoader> */}
      <ResourceLoader resourceUrl="/api/users/1" resourceName="user">
        <UserInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
