import Header from "../Header";
import Navbar from "../Navbar";
import Contact from "../Contact";

const LeftSection = () => {
    return (
        <div>
        {/* stickyยึดติดกับอเมื่อscroll */}
            <div className='sticky top-6 grid grid-rows-[63%_33%_5%] h-[92vh]'>
                <Header/>
                <Navbar/>
                <Contact/>
            </div>
      </div>
    )
} 

export default LeftSection;