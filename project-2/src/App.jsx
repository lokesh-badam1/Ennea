import { useState } from 'react'
import './App.css'
import Display from "./components/display"
import Controls from "./components/controls.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      <Display value={count}/>
      <Controls setCount={setCount} count = {count}></Controls>
    </>
  )
}



export default App



