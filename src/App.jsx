import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-regular-svg-icons'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/home'
import Aboutme from './assets/components/Aboutme'
import SkillCard from './assets/components/SkillCard'
import Contactme from './assets/components/Contactme'

function App() {

  return (
    <div>
    <Navbar />
    <Home/>
    <Aboutme/>
    <SkillCard/>
    <Contactme/>
    </div>
  )
}

export default App
