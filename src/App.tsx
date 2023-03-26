import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Authmodal from './components/authmodal/Authmodal'
import { useBearStore } from './Store'

const App = () => {

  const isAuthmodalOpen = useBearStore((state) => state.isAuthmodalOpen);
  return (
    <>
      <Router>
        <Navbar />
        {isAuthmodalOpen && <Authmodal />}
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>

      </Router>
    </>
  )
}

export default App