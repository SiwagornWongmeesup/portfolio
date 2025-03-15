import './App.css'
import LeftSection from './sections/LeftSection'
import RightSetion from './sections/RightSection'
function App() {

  return (

    <div className='mt-6 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]'>
     <LeftSection/>
     <RightSetion/>
     
     
      

    </div>
  )
}

export default App
