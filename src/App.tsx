import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing/Landing'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>

      </Router>
    </>
  )
}

export default App