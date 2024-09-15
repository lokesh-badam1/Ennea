import { useState,createContext } from 'react'
import './App.css'
import Display from "./components/display"
import Controls from "./components/Controls.jsx"
import styled from "styled-components"
import Mode from "./components/function.jsx"

export const Dmode  = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const Container = styled.div`
  background-color: ${(props) => (darkMode?'grey':'white')};
  border-radius:5px;
  padding:100px;
  `

  return (
    <>
      <Dmode.Provider value = {darkMode}>
      <Container>
        <Mode setDarkMode={setDarkMode} darkMode={darkMode}/>
      <h1>Counter</h1>
      <Display value={count}/>
      <Controls setCount={setCount} count = {count}></Controls>
      </Container>
      </Dmode.Provider>
    </>
  )
}




export default App



