import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-regular-svg-icons'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/home'

function App() {

  return (
    <div className='bg-black h-screen'>
    <Navbar />
    <Home/>
    </div>
  )
}

export default App
