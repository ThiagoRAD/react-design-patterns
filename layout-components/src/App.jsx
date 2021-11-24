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

const LeftHandComponent = () => (
  <LeftContainer>
    <h1>Left</h1>
  </LeftContainer>
);

const RightHandComponent = () => (
  <RightContainer>
    <h1>Right</h1>
  </RightContainer>
);


function App() {

  return (
    <>
      <SplitScreen left={LeftHandComponent} leftWeight={1} right={RightHandComponent} rightWeight={2} />
    </>
  )
}

export default App
