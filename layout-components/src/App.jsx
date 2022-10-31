import './App.css'
import SplitScreen from './SplitScreen'

function App() {

  return (
    <>
      <SplitScreen left={() => <h1>Left Side</h1>} right={() => <h1>Right Side</h1>} />
    </>
  )
}

export default App
