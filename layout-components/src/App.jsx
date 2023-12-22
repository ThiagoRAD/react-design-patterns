import './App.css'
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
    <h1>Left Side</h1>
  </LeftContainer>
);

const RightHandComponent = () => (
  <RightContainer>
    <h1>Right Side</h1>
  </RightContainer>
);


function App() {

  return (
    <>
      <SplitScreen left={LeftHandComponent} right={RightHandComponent} />
    </>
  )
}

export default App
