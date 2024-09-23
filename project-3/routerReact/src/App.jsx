import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router className='main'>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page1">Page 1</Link></li>
            <li><Link to="/page2">Page 2</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
