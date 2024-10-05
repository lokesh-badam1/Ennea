import { useState,createContext } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Rootelement from './pages/Rootelement';
import Homepage from './pages/Homepage';
import Sendform from './pages/Sendform';
import './App.css'

const router = createBrowserRouter([
  {path:"/",
    element:<Rootelement />,
    children:[
    {path:'/',element:<Homepage />},
    {path:'/sendform',element:<Sendform />}

  ]}
]);

export const Values = createContext();

function App() {

  
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState(0);
  return (
    <Values.Provider value={{title,setTitle,price,setPrice}} >
      <RouterProvider router={router} />
    </Values.Provider>
    
  )
}

export default App
