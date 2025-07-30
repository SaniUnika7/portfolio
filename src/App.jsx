import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-regular-svg-icons'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/home'
import Aboutme from './assets/components/Aboutme'

function App() {

  return (
    <div className='bg-black h-screen'>
    <Navbar />
    <Home/>
    <Aboutme/>
    </div>
  )
}

export default App
