import { useState,createContext } from 'react'
import './App.css'
import Header from './components/Header'
import Inputs from './components/Inputs'
import Results from './components/Results'

export const Values = createContext();

function App() {
  
  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);

  return (
    <>
    <Values.Provider value={{weight,setWeight,height,setHeight}}>
      <Header />
      <Inputs />
      <Results />
    </Values.Provider>
    </>
  );
}

export default App
