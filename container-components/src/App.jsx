import axios from 'axios'
import {CurrentUserLoader} from './CurrentUserLoader';
import DataLoader from './DataLoader'
import ResourceLoader from './ResourceLoader'
import {UserInfo} from './UserInfo';
import UserLoader from './UserLoader';

const getServerData = url => async () => {
  const response = await axios.get(url);
  return response.data;
}


function App() {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <UserLoader userId={1}>
        <UserInfo />
      </UserLoader>
      <ResourceLoader resourceUrl="/api/users/1" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <DataLoader resourceName="user" getData={getServerData('/api/users/1')}>
        <UserInfo />
      </DataLoader>
    </>
  );
}

export default App;
