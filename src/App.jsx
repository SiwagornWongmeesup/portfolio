import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faDiscord, faFacebook, faGithub, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Header from './sections/Header'
import Navbar from './sections/Navbar'
import Contact from './sections/Contact'
function App() {

  return (

    <div className='mt-6 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
      <div>
        {/* stickyยึดติดกับอเมื่อscroll */}
        <div className='sticky top-6 grid grid-rows-[63%_33%_5%] h-[92vh]'>
        <Header/>
        <Navbar/>
        <Contact/>
        </div>
      </div>
      <div>
        <div>About</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
      </div>
     
     
      

    </div>
  )
}

export default App
