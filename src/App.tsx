import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Authmodal from './components/authmodal/Authmodal'
import { useBearStore } from './Store'
import Services from './pages/services/Services'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from './pages/profile/Profile'

/* import dotenv from 'dotenv'; */
/* dotenv.config(); */

const App = () => {

  const isAuthmodalOpen = useBearStore((state) => state.isAuthmodalOpen);
  const userprofile = useBearStore((state) => state.userprofile);

  return (
    <>
      <Router>

        <ToastContainer
          position="top-right"
          autoClose={1200}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          closeButton={false}
        />


        <Navbar />
        {isAuthmodalOpen && <Authmodal />}

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/services' element={<Services />} />
          {/*    <Route path='/services' element={<Services />} /> */}
          <Route path="/:username" element={<Profile />} />
        </Routes>

      </Router>
    </>
  )
}

export default App