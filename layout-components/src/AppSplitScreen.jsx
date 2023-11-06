import SplitScreen from './SplitScreen'
import styled from 'styled-components';

const LeftContainer = styled.div`
  background-color: lightblue;
  height: 100vh;
`;

const RightContainer = styled.div`
  background-color: lightgreen;
  height: 100vh;
`;

const LeftHandComponent = ({message}) => (
  <LeftContainer>
    <h1>{message}</h1>
  </LeftContainer>
);

const RightHandComponent = () => (
  <RightContainer>
    <h1>Right</h1>
  </RightContainer>
);


function App() {

  return (
      <SplitScreen leftWeight={1} rightWeight={2} >
        <LeftHandComponent message="Left"/>
        <RightHandComponent />
      </SplitScreen>
  )
}

export default App
